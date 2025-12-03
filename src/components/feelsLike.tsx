import { Box, Card, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { fetchFeelsLike } from "../service/aqi"

export const FeelsLikeComponent = () => {
    const [feelsLike, setFeelsLike] = useState<number>(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFeelsLike()
                if (data && data.hourly && data.hourly.apparent_temperature) {
                    const currentFeelsLike = data.hourly.apparent_temperature[0]
                    if (currentFeelsLike !== undefined) {
                        setFeelsLike(Math.round(currentFeelsLike))
                    }
                }
            } catch (error) {
                console.error('Error fetching feels like:', error)
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
                        Feels like
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
                            {feelsLike}°
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
                        <circle cx="25" cy="25" r="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <path
                            d="M 25 10 L 25 20 M 25 30 L 25 40 M 10 25 L 20 25 M 30 25 L 40 25"
                            stroke="#FF6B6B"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <circle cx="25" cy="25" r="3" fill="#FF6B6B" />
                    </svg>
                </Box>
            </Box>
        </Card>
    )
}

