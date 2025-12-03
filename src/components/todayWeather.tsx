import { Box, Card } from "@mui/material"
import { useEffect, useState } from "react"
import { fetchToday } from "../service/aqi"


const getWeatherDescription = (code: number): string => {
    const weatherMap: { [key: number]: string } = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        56: "Light freezing drizzle",
        57: "Dense freezing drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        66: "Light freezing rain",
        67: "Heavy freezing rain",
        71: "Slight snow fall",
        73: "Moderate snow fall",
        75: "Heavy snow fall",
        77: "Snow grains",
        80: "Slight rain showers",
        81: "Moderate rain showers",
        82: "Violent rain showers",
        85: "Slight snow showers",
        86: "Heavy snow showers",
        95: "Thunderstorm",
        96: "Thunderstorm with slight hail",
        99: "Thunderstorm with heavy hail"
    }
    return weatherMap[code] || "Unknown"
}



interface WeatherData {
    daily: {
        time: string[]
        weather_code: number[]
        temperature_2m_max: number[]
        temperature_2m_min: number[]
    }
}

export const TodayWeather = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchToday()
                setWeatherData(data)
            } catch (error) {
                console.error('Error fetching weather data:', error)
            }
        }
        fetchData()
    }, [])

    if (!weatherData || !weatherData.daily || weatherData.daily.time.length === 0) {
        return null
    }

    const todayIndex = 0
    const weatherCode = weatherData.daily.weather_code[todayIndex]
    const maxTemp = Math.round(weatherData.daily.temperature_2m_max[todayIndex])
    const minTemp = Math.round(weatherData.daily.temperature_2m_min[todayIndex])
    const description = getWeatherDescription(weatherCode)


    return (
        <Card
            sx={{
                width: "100%",
                padding: "8px 12px",
                backgroundColor: "rgba(40, 50, 60, 0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: 3,
                color: "white",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            }}
        >
            <Box sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                <Box sx={{ fontSize: '14px', fontWeight: 600, fontFamily: 'system-ui, sans-serif' }}>
                    Today
                </Box>
                <Box sx={{ fontSize: '24px', display: 'flex', alignItems: 'center' }}>
                    ⛅
                </Box>
                <Box sx={{ fontSize: '12px', fontWeight: 400, fontFamily: 'system-ui, sans-serif' }}>
                    {description}
                </Box>
                <Box sx={{ fontSize: '12px', fontWeight: 400, marginLeft: 'auto', fontFamily: 'system-ui, sans-serif' }}>
                    {maxTemp}° / {minTemp}°
                </Box>
            </Box>
        </Card>
    )
}