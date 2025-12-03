
import logo from '../assets/logo.png'
import { PressureComponent } from './pressure'
import { TodayWeather } from './todayWeather'

const Header = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fffff", color: "#fff", padding: "10px" }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', gap: '2px' }}>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'row', gap: '10px', marginBottom: '0' }}>
                            <img src={logo} width={50} height={50} />
                            <h1 style={{ color: "#ffffff", margin: '0' }}>WEATHER</h1>
                        </div>
                        <h5 style={{ color: "#ffff", textAlign: 'center', margin: '0', marginTop: '2px' }}>Rain,wind,Uv,Snow & pressure on weathherRadar</h5>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'end' }}>

                    <TodayWeather />
                </div>
                <div style={{ display: 'flex', alignItems: 'end' }}>

                    <PressureComponent />
                </div>
            </div>
        </>
    )
}

export default Header