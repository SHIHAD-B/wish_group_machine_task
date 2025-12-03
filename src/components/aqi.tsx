import { useEffect, useState } from "react"
import {
    Card,
    Typography,
    Box,
    CircularProgress,
    LinearProgress,
    IconButton
} from "@mui/material"
import { Info as InfoIcon } from "@mui/icons-material"
import { fetchAqi } from "../service/aqi"

interface AqiData {
    hourly: {
        pm10: number[]
        pm2_5: number[]
        sulphur_dioxide: number[]
        nitrogen_dioxide: number[]
        ozone: number[]
        carbon_monoxide: number[]
    }
}

interface Pollutant {
    name: string
    value: number
    color: string
}

const Aqi = () => {
    const [aqiData, setAqiData] = useState<AqiData | null>(null)
    const [aqi, setAqi] = useState<number>(0)
    const [status, setStatus] = useState<string>("Good")
    const [description, setDescription] = useState<string>("")

    useEffect(() => {
        const fetchAqiData = async () => {
            try {
                const data = await fetchAqi()
                if (data) {
                    setAqiData(data)
                    calculateAqi(data)
                }
            } catch (error) {
                console.error("Error fetching AQI data:", error)
            }
        }
        fetchAqiData()
    }, [])

    const calculateAqi = (data: AqiData) => {
        const pm10 = data.hourly.pm10[0] || 0
        const pm2_5 = data.hourly.pm2_5[0] || 0
        const so2 = data.hourly.sulphur_dioxide[0] || 0
        const no2 = data.hourly.nitrogen_dioxide[0] || 0
        const o3 = data.hourly.ozone[0] || 0
        const co = data.hourly.carbon_monoxide[0] || 0


        const weights = {
            pm2_5: 0.3,
            pm10: 0.25,
            no2: 0.2,
            o3: 0.15,
            so2: 0.05,
            co: 0.05,
        }


        const normalizedPm10 = Math.min((pm10 / 50) * 100, 100)
        const normalizedPm2_5 = Math.min((pm2_5 / 35) * 100, 100)
        const normalizedSo2 = Math.min((so2 / 75) * 100, 100)
        const normalizedNo2 = Math.min((no2 / 100) * 100, 100)
        const normalizedO3 = Math.min((o3 / 100) * 100, 100)
        const normalizedCo = Math.min((co / 50) * 100, 100)


        const calculatedAqi = Math.round(
            normalizedPm2_5 * weights.pm2_5 +
            normalizedPm10 * weights.pm10 +
            normalizedNo2 * weights.no2 +
            normalizedO3 * weights.o3 +
            normalizedSo2 * weights.so2 +
            normalizedCo * weights.co
        )

        setAqi(calculatedAqi)

        if (calculatedAqi <= 50) {
            setStatus("Good")
            setDescription("Air quality is considered satisfactory, and air pollution poses little or no risk.")
        } else if (calculatedAqi <= 100) {
            setStatus("Moderate")
            setDescription("Air quality is acceptable; however, there may be a risk for some people.")
        } else if (calculatedAqi <= 150) {
            setStatus("Unhealthy for Sensitive Groups")
            setDescription("Members of sensitive groups may experience health effects.")
        } else {
            setStatus("Unhealthy")
            setDescription("Everyone may begin to experience health effects.")
        }
    }

    const getPollutants = (): Pollutant[] => {
        if (!aqiData) return []

        const pm10 = Math.round(aqiData.hourly.pm10[0] || 0)
        const pm2_5 = Math.round(aqiData.hourly.pm2_5[0] || 0)
        const so2 = Math.round(aqiData.hourly.sulphur_dioxide[0] || 0)
        const no2 = Math.round(aqiData.hourly.nitrogen_dioxide[0] || 0)
        const o3 = Math.round(aqiData.hourly.ozone[0] || 0)
        const co = Math.round(aqiData.hourly.carbon_monoxide[0] || 0)


        const coDisplay = Math.round(co / 50)

        return [
            { name: "PM2.5", value: pm2_5, color: '#4caf50' },
            { name: "PM10", value: pm10, color: '#4caf50' },
            { name: "SO2", value: so2, color: '#4caf50' },
            { name: "NO2", value: no2, color: '#4caf50' },
            { name: "O3", value: o3, color: '#4caf50' },
            { name: "CO", value: coDisplay, color: '#ff9800' },
        ]
    }

    const pollutants = getPollutants()
    const aqiPercentage = Math.min((aqi / 100) * 100, 100)

    return (
        <Card
            sx={{
                width: "100%",
                maxWidth: "100%",
                padding: "16px 20px",
                backgroundColor: "rgba(40, 50, 60, 0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: 3,
                color: "white",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            }}
        >

            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                <Typography sx={{ fontSize: '18px', fontWeight: 600, flexGrow: 1, fontFamily: 'system-ui, sans-serif' }}>
                    Air Quality Index
                </Typography>
                <IconButton size="small" sx={{ color: "white", padding: 0, width: 20, height: 20 }}>
                    <InfoIcon sx={{ fontSize: 16 }} />
                </IconButton>
            </Box>


            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    marginBottom: 3,
                }}
            >

                <Box sx={{ position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                        variant="determinate"
                        value={aqiPercentage}
                        size={100}
                        thickness={6}
                        sx={{
                            color: aqi <= 50 ? "#4caf50" : aqi <= 100 ? "#ff9800" : "#f44336",
                            transform: "rotate(-90deg)",
                        }}
                    />
                    <Box
                        sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                    >
                        <Typography
                            sx={{ fontSize: '20px', fontWeight: 600, fontFamily: 'system-ui, sans-serif' }}
                        >
                            {aqi}
                        </Typography>
                        <Typography
                            sx={{ fontSize: '10px', opacity: 0.9, fontFamily: 'system-ui, sans-serif' }}
                        >
                            AQI
                        </Typography>
                    </Box>
                </Box>


                <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 600, marginBottom: 1, fontFamily: 'system-ui, sans-serif' }}>
                        {status}
                    </Typography>
                    <Typography sx={{ fontSize: '12px', opacity: 0.9, lineHeight: 1.5, fontFamily: 'system-ui, sans-serif' }}>
                        {description}
                    </Typography>
                </Box>
            </Box>


            <Box
                sx={{
                    display: "flex",
                    justifyContent: 'space-between',
                    gap: 1.5,
                    marginTop: 2,
                }}
            >
                {pollutants.map((pollutant) => {
                    return (
                        <Box key={pollutant.name} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography
                                sx={{ fontSize: '14px', fontWeight: 600, marginBottom: 0.5, fontFamily: 'system-ui, sans-serif' }}
                            >
                                {pollutant.value}
                            </Typography>
                            <LinearProgress
                                variant="determinate"
                                value={100}
                                sx={{
                                    height: 6,
                                    width: 40,
                                    borderRadius: 4,
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    "& .MuiLinearProgress-bar": {
                                        backgroundColor: pollutant.color,
                                        borderRadius: 4,
                                    },
                                    marginBottom: 0.5,
                                }}
                            />
                            <Typography sx={{ fontSize: '10px', opacity: 0.8, fontFamily: 'system-ui, sans-serif' }}>
                                {pollutant.name}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
        </Card>
    )
}

export default Aqi
