import {useNavigate} from 'react-router-dom'
import GetWeather from '../weather'

function HtIntro(){
    const text = 'Hometown Introduction:\nMy hometown is located in Inner Mongolian Autonomous Region, which is a north province in China. There are four seasons: spring, hot summer, fall, and cold winter. In my hometown, there are some famous grasslands, for example: Hulunbeir Grassland, Horqin Grassland, ect. In summer, you can enjoy stunning scenery on the grassland and and the local herdsmen are very enthusiastic. While during winter you will see snow.\n'
    const Navigate = useNavigate()
    const Me = () =>{
        Navigate('/')
    }

    return(
        <div classname="App">
            <header className='App-header'>
                Hometown Introduction
            </header>
            <div className='layoutBox'>
                <div className='leftLayout'>{text} </div>
                <div className='midLayout'/>
                <div className='rightLayout-no-rotate'>
                    <GetWeather/>
                </div>
            </div>
            <div>
                If you want to know me =》
                <button onClick={Me}>To me</button>
            </div>
        </div>)
}
export default HtIntro;