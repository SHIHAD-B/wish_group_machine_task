import axios from 'axios'

const BASE_URL = 'https://api.open-meteo.com/v1/forecast'


export const fetchAqi = async () => {
    try {
        const result = await axios.get('https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&hourly=pm10,pm2_5,sulphur_dioxide,nitrogen_dioxide,ozone,carbon_monoxide&timezone=auto')
        return result.data
    } catch (error) {
        console.error('Error fetching AQI data:', error)
    }
}

export const fetchToday = async () => {
    try {
        const result = await axios.get('https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2025-11-17&end_date=2025-12-01&daily=weather_code,temperature_2m_max,temperature_2m_mean,temperature_2m_min&hourly=temperature_2m&timezone=auto')
        return result.data
    } catch (error) {
        console.error('Error fetching today data:', error)
    }
}

export const fetchPressure = async () => {
    try {
        const result = await axios.get(`${BASE_URL}?latitude=52.52&longitude=13.41&hourly=surface_pressure&timezone=auto`)
        return result.data
    } catch (error) {
        console.error('Error fetching pressure data:', error)
    }
}

export const fetchHourlyForecast = async () => {
    try {
        const result = await axios.get(`${BASE_URL}?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,weather_code&timezone=auto&forecast_days=1`)
        return result.data
    } catch (error) {
        console.error('Error fetching hourly forecast:', error)
    }
}

export const fetchWindSpeed = async () => {
    try {
        const result = await axios.get(`${BASE_URL}?latitude=52.52&longitude=13.41&hourly=wind_speed_10m,wind_direction_10m&timezone=auto`)
        return result.data
    } catch (error) {
        console.error('Error fetching wind speed:', error)
    }
}

export const fetchFeelsLike = async () => {
    try {
        const result = await axios.get(`${BASE_URL}?latitude=52.52&longitude=13.41&hourly=apparent_temperature&timezone=auto`)
        return result.data
    } catch (error) {
        console.error('Error fetching feels like:', error)
    }
}

export const fetchVisibility = async () => {
    try {
        const result = await axios.get(`${BASE_URL}?latitude=52.52&longitude=13.41&hourly=visibility&timezone=auto`)
        return result.data
    } catch (error) {
        console.error('Error fetching visibility:', error)
    }
}

export const fetchPrecipitation = async () => {
    try {
        const result = await axios.get(`${BASE_URL}?latitude=52.52&longitude=13.41&hourly=precipitation&timezone=auto`)
        return result.data
    } catch (error) {
        console.error('Error fetching precipitation:', error)
    }
}

