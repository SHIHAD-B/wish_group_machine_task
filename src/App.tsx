import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material'
import Header from './components/header'
import Aqi from './components/aqi'

import { WindSpeedComponent } from './components/windSpeed'
import { FeelsLikeComponent } from './components/feelsLike'
import { VisibilityComponent } from './components/visibility'
import { PrecipitationComponent } from './components/precipitation'
import { WidgetComponent } from './components/widget'
import { RadarComponent } from './components/radar'
import './App.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1a1a1a',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ padding: '32px' }}>
        <div style={{ padding: '20px' }}>
          <Header />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            marginTop: '24px'
          }}>
            {/* Top Row: Weather metrics 2x2 grid + AQI on the right */}
            <div style={{
              display: 'flex',
              gap: 0,
              alignItems: 'flex-start',
              width: '100%'
            }}>
              {/* Left side: Weather metrics in a 2x2 square */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                flex: '0 0 auto'
              }}>
                {/* Top row: Wind Speed and Feels Like */}
                <div style={{
                  display: 'flex',
                  gap: 0
                }}>
                  <div style={{ paddingRight: '12px', paddingBottom: '12px' }}>
                    <WindSpeedComponent />
                  </div>
                  <div style={{ paddingLeft: '12px', paddingBottom: '12px' }}>
                    <FeelsLikeComponent />
                  </div>
                </div>
                {/* Bottom row: Visibility and Precipitation */}
                <div style={{
                  display: 'flex',
                  gap: 0
                }}>
                  <div style={{ paddingRight: '12px', paddingTop: '12px' }}>
                    <VisibilityComponent />
                  </div>
                  <div style={{ paddingLeft: '12px', paddingTop: '12px' }}>
                    <PrecipitationComponent />
                  </div>
                </div>
              </div>

              {/* Right side: AQI component */}
              <div style={{
                flex: '1 1 auto',
                paddingLeft: '24px',
                minWidth: '400px'
              }}>
                <Aqi />
              </div>
            </div>

            {/* Bottom Row: Radar and Widget side by side */}
            <div style={{
              display: 'flex',
              gap: 0,
              marginTop: '24px',
              width: '100%'
            }}>
              <div style={{
                flex: '1 1 50%',
                paddingRight: '12px'
              }}>
                <RadarComponent />
              </div>
              <div style={{
                flex: '1 1 50%',
                paddingLeft: '12px'
              }}>
                <WidgetComponent />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
