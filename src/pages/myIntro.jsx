import {useNavigate} from 'react-router-dom'
import me from '../pics/myphoto_resize2.jpg'


function MyIntro (){
    const text = '(This is qa environment) My name is Lilian, I come from China. I graduated from Dalian Maritime University and my major is the Internet of Things. It is my first time to Canada, I\'m exticed and happy to come here and join this course. I am outgoing person who really enjoys cooking, cleaning and drawing. I also like outdoor activities, like hiking and camping.\n'
    const Navigate = useNavigate() 
    const Hometown = () =>{
        Navigate('/hometown')
    }
    console.log(3)
    return (
        <div classname="App">
            <header className='App-header'>
                Lilian Introduction
            </header>

            <div className='layoutBox'>
                <div className='leftLayout'>{text} </div>
                <div className='midLayout'/>
                <div className='rightLayout'>
                    <img src={me} alt="logo"/> 
                </div>
            </div>

            <div>
                If you want to know my hometown =》
                <button onClick={Hometown}>To hometown</button>
            </div>
        </div>
    )
}
export default MyIntro;


// function MyIntro (){
//     const text = 'Lilian Introduction:\nMy name is Lilian, I come from China. I graduated from Dalian Maritime University and my major is the Internet of Things. It is my first time to Canada, I\'m exticed and happy to come here and join this course. I am outgoing person who really enjoys cooking, cleaning and drawing. I also like outdoor activities, like hiking and camping.\n'
//     const Navigate = useNavigate() 
//     const Hometown = () =>{
//         Navigate('/hometown')
//     }
//     return <div>
//         {text} 
//         <button onClick={Hometown}>Hometown introdiction</button>
//         </div>
// }
// export default MyIntro;
