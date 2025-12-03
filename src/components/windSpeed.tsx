import { Box, Card, Typography, IconButton } from "@mui/material"
import { useEffect, useState } from "react"
import { fetchWindSpeed } from "../service/aqi"
import { Info as InfoIcon } from "@mui/icons-material"

export const WindSpeedComponent = () => {
    const [windSpeed, setWindSpeed] = useState<number>(0)
    const [windDirection, setWindDirection] = useState<number>(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchWindSpeed()
                if (data && data.hourly && data.hourly.wind_speed_10m) {
                    const currentSpeed = data.hourly.wind_speed_10m[0]
                    const currentDirection = data.hourly.wind_direction_10m?.[0] || 0
                    if (currentSpeed !== undefined) {
                        setWindSpeed(Math.round(currentSpeed * 2.237)) 
                        setWindDirection(currentDirection)
                    }
                }
            } catch (error) {
                console.error('Error fetching wind speed:', error)
            }
        }
        fetchData()
    }, [])



    return (
        <Card
            sx={{
                width: "200px",
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
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography
                            sx={{
                                fontSize: '10px',
                                fontWeight: 400,
                                color: 'white',
                                fontFamily: 'system-ui, sans-serif',
                            }}
                        >
                            Wind Speed
                        </Typography>
                        <IconButton size="small" sx={{ color: 'white', padding: 0, width: 16, height: 16 }}>
                            <InfoIcon sx={{ fontSize: 12 }} />
                        </IconButton>
                    </Box>
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
                            {windSpeed}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '12px',
                                fontWeight: 400,
                                color: 'white',
                                fontFamily: 'system-ui, sans-serif',
                                opacity: 0.9,
                            }}
                        >
                            mph
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        position: 'relative',
                        width: 50,
                        height: 50,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <svg width="50" height="50" viewBox="0 0 50 50">
                        <circle cx="25" cy="25" r="20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                        <line
                            x1="25"
                            y1="25"
                            x2="25"
                            y2="10"
                            stroke="#4A90E2"
                            strokeWidth="3"
                            strokeLinecap="round"
                            transform={`rotate(${windDirection} 25 25)`}
                        />
                    </svg>
                </Box>
            </Box>
        </Card>
    )
}

