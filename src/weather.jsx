import { useEffect, useState } from "react";
import cold from './pics/cold.png'
import mild from './pics/mild.png'
import sunny from './pics/sunny.png'

// https://api.openweathermap.org/data/2.5/weather?lat=44.651070&lon=-63.582687&appid=7dc79bf17c5a776409177f7fb2f45178


function GetWeather(){
    const APIKey = '76e81f20536a80f8fcc25c183ec6ec0a';
    const lat = 41.59;
    const lon = 119.33;
    const [data, setDate] = useState({metric: '℃'});
    useEffect(() => {
         fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            setTimeout(()=>{
                console.log(data)
                json.metric = data.metric
                setDate(json)})
        })
    }, [])

    const changeState = () =>{
        if(data.metric == '℃'){
            data.metric = '℉'
            tem = temC * 1.8 + 32
        }
        else{
            data.metric = '℃'
            tem = temC
        }
        document.getElementById("para").innerHTML = `Now weather in my hometwon is ${wea} with ${tem}${data.metric}`
    }

    var wea = 'Clouds'
    var temC = 10
    var tem = 10
    if ('main' in data){
        wea = data.weather[0].main
        temC = data.main.temp
        tem = temC
        if (data.metric == '℉'){
            tem = temC * 1.8 + 32
        }
    }
    
    var picshow = sunny
    if(wea == 'Clouds'){picshow = mild}
    else if(wea == 'Rain' || wea == 'Snow' ) {picshow = cold}

    return(
        <div>
            <img src={picshow} alt="logo"/> 
            <div id="para" className='App-content'>Now weather in my hometwon is {wea} with {tem}{data.metric}</div>
            <button onClick={changeState}>Change metric</button>
        </div>);
    
}
export default GetWeather;