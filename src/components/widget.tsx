import { Box, Card, Typography } from "@mui/material"
import { ArrowForward } from "@mui/icons-material"

export const WidgetComponent = () => {
    return (
        <Card
            sx={{
                width: "100%",
                padding: "16px 20px",
                backgroundColor: "rgba(40, 50, 60, 0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: 3,
                color: "white",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                marginTop: 2,
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                <Typography
                    sx={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: 'white',
                        fontFamily: 'system-ui, sans-serif',
                    }}
                >
                    Widget
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer' }}>
                    <Typography sx={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
                        More
                    </Typography>
                    <ArrowForward sx={{ fontSize: 16, color: 'rgba(255,255,255,0.7)' }} />
                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
                
                <Card
                    sx={{
                        flex: 1,
                        padding: "12px",
                        backgroundColor: "rgba(20, 30, 40, 0.9)",
                        borderRadius: 2,
                        color: "white",
                    }}
                >
                    <Typography sx={{ fontSize: '24px', fontWeight: 600, marginBottom: 1 }}>
                        06 45
                    </Typography>
                    <Typography sx={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', marginBottom: 1 }}>
                        Wed Mar 29
                    </Typography>
                    <Typography sx={{ fontSize: '12px', marginBottom: 1 }}>
                        Sydney
                    </Typography>
                    <Typography sx={{ fontSize: '12px', marginBottom: 1 }}>
                        Windy
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography sx={{ fontSize: '20px' }}>☀️</Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>26°</Typography>
                    </Box>
                </Card>

               
                <Card
                    sx={{
                        flex: 1,
                        padding: "12px",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        borderRadius: 2,
                        color: "#333",
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '60%',
                            height: '100%',
                            background: 'linear-gradient(135deg, #87CEEB 0%, #E0F6FF 100%)',
                            opacity: 0.3,
                        }}
                    />
                    <Typography sx={{ fontSize: '18px', fontWeight: 600, marginBottom: 1, position: 'relative', zIndex: 1 }}>
                        25°
                    </Typography>
                    <Typography sx={{ fontSize: '12px', marginBottom: 1, position: 'relative', zIndex: 1 }}>
                        Sunny
                    </Typography>
                    <Box sx={{ position: 'relative', zIndex: 1, fontSize: '32px' }}>
                        ☀️
                    </Box>
                </Card>
            </Box>
        </Card>
    )
}

