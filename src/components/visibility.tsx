import { Box, Card, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { fetchVisibility } from "../service/aqi"

export const VisibilityComponent = () => {
    const [visibility, setVisibility] = useState<number>(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchVisibility()
                if (data && data.hourly && data.hourly.visibility) {
                    const currentVisibility = data.hourly.visibility[0]
                    if (currentVisibility !== undefined) {
                        setVisibility(Math.round(currentVisibility / 1000 * 10) / 10) 
                    }
                }
            } catch (error) {
                console.error('Error fetching visibility:', error)
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
                        Visibility
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
                            {visibility}
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
                            km
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
                        <line x1="10" y1="25" x2="40" y2="25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <line x1="12" y1="20" x2="12" y2="30" stroke="white" strokeWidth="1.5" />
                        <line x1="38" y1="20" x2="38" y2="30" stroke="white" strokeWidth="1.5" />
                    </svg>
                </Box>
            </Box>
        </Card>
    )
}

