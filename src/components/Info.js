import '../css/Info.css'
import boy from '../Images/boy.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Info = () => {
    useEffect(()=>{
       Aos.init({duration:2000})
    },[])
    return (
        <>
            <div className="Info">
                <div className="left-I">
                    <div className="left-I-Wrapper">
                        <h2 data-aos="fade-right" className="I-title">Welcome to the world of</h2>
                        <h1 className='Name' data-aos="zoom-in-up">{'<> Development </>'}</h1>
                        <div className="info">
                            <div className='info-wrapper'>
                                <div className='infoTitle'><p>Web Developer</p></div>
                                <div className='infoTitle'><p>Firebase</p></div>
                                <div className='infoTitle'><p>ReactJs</p></div>
                                <div className='infoTitle'><p>NextJs</p></div>
                            </div>
                        </div>
                        <div className="description" data-aos="fade-right">
                            <p>{'<> Any fool can write code that a computer can understand. Good programmers write code that humans can understand </>'}</p>
                        </div>
                    </div>
                   
                </div>
                <div className="right-I">
                    <div className="bg" data-aos="fade-right"></div>
                    <img src={boy} alt="fks" className='imgBoy' data-aos="fade-left"/>
                </div>
            </div>
        </>
    )
}

export default Info