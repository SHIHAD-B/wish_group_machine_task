import { Box, Card, Typography, IconButton } from "@mui/material"
import { ZoomIn, ZoomOut, Layers, LocationOn, Refresh } from "@mui/icons-material"

export const RadarComponent = () => {
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
            <Typography
                sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'white',
                    marginBottom: 2,
                    fontFamily: 'system-ui, sans-serif',
                }}
            >
                Radar
            </Typography>

            
            <Box sx={{ marginBottom: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
                    <Typography sx={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)' }}>0</Typography>
                    <Typography sx={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)' }}>50</Typography>
                    <Typography sx={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)' }}>100</Typography>
                    <Typography sx={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)' }}>150</Typography>
                    <Typography sx={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)' }}>200</Typography>
                    <Typography sx={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)' }}>300</Typography>
                    <Typography sx={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)' }}>500</Typography>
                </Box>
                <Box
                    sx={{
                        height: 20,
                        borderRadius: 2,
                        background: 'linear-gradient(to right, #4caf50 0%, #8bc34a 16.67%, #ffeb3b 33.33%, #ff9800 50%, #ff5722 66.67%, #f44336 83.33%, #d32f2f 100%)',
                    }}
                />
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: 300,
                    backgroundColor: 'rgba(20, 30, 40, 0.9)',
                    borderRadius: 2,
                    marginBottom: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        right: 10,
                        bottom: 10,
                        backgroundImage: 'url("https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/13.41,52.52,4,0/400x300?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: 1,
                        opacity: 0.6,
                    }}
                />
                <Typography sx={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', zIndex: 1 }}>
                    Map View
                </Typography>
                

                <Box
                    sx={{
                        position: 'absolute',
                        right: 10,
                        top: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        zIndex: 2,
                    }}
                >
                    <IconButton size="small" sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
                        <ZoomIn sx={{ fontSize: 16 }} />
                    </IconButton>
                    <IconButton size="small" sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
                        <ZoomOut sx={{ fontSize: 16 }} />
                    </IconButton>
                    <IconButton size="small" sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
                        <Layers sx={{ fontSize: 16 }} />
                    </IconButton>
                    <IconButton size="small" sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
                        <LocationOn sx={{ fontSize: 16 }} />
                    </IconButton>
                    <IconButton size="small" sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
                        <Refresh sx={{ fontSize: 16 }} />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    )
}

