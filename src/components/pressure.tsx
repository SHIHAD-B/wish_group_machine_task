import { Box, Card, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { fetchPressure } from "../service/aqi"
import Pressure from '../assets/pressure.png'



export const PressureComponent = () => {
    const [pressure, setPressure] = useState<number>(0)

    useEffect(() => {
        const fetchPressureData = async () => {
            try {
                const data = await fetchPressure()
                if (data && data.hourly && data.hourly.surface_pressure) {
                    const currentPressure = data.hourly.surface_pressure[0]
                    if (currentPressure) {
                        setPressure(Math.round(currentPressure))
                    }
                }
            } catch (error) {
                console.error('error fetching pressure', error)
            }
        }

        fetchPressureData()
    }, [])

    return (
        <Card
            sx={{
                width: "auto",
                minWidth: "150px",
                maxWidth: "90vw",
                padding: "8px 12px",
                backgroundColor: "rgba(40, 50, 60, 0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: 3,
                color: "white",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography
                        sx={{
                            fontSize: '10px',
                            fontWeight: 400,
                            color: 'white',
                            fontFamily: 'system-ui, sans-serif',
                        }}
                    >
                        Pressure
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 400,
                                color: 'white',
                                fontFamily: 'system-ui, sans-serif',
                                lineHeight: 1,
                            }}
                        >
                            {pressure}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: 400,
                                color: 'white',
                                fontFamily: 'system-ui, sans-serif',
                                opacity: 0.9,
                            }}
                        >
                            hpa
                        </Typography>
                    </Box>
                </Box>

                <img src={Pressure} width={50} alt="" />
            </Box>
        </Card>
    )
}