import '../css/Contact.css'
import phone from '../Images/phone.png'
import email from '../Images/email.png'
import map from '../Images/map.png'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'


const Contact = () => {

    const handleSubmit = (e)=>{
       e.preventDefault();
       emailjs.sendForm('service_tgoq579', 'template_qw3pwn6', formRef.current, 'user_QEH1yVFBjpezIgO1Sg0L6')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
       
    }

    const formRef = useRef()


    return (
        <>
            <div className="about-main">
                <div className="about-bg"></div>
                <div className="about-left">
                    <div data-aos="fade-right">
                        <h1 className='about-title'>Contact Me For</h1>
                        <h1 className='about-title'>The Projects 😈</h1>
                    </div>
                    <div className="contactIcon" data-aos="fade-right">

                        <img src={phone} alt="" />


                        <p >{'+917999538027'}</p>

                    </div>
                    <div className="contactIcon" data-aos="fade-right">
                        <img src={email} alt="" />
                        <p>0akshaymeshram123@gmail.com</p>
                    </div>
                    <div className="contactIcon" data-aos="fade-right">
                        <img src={map} alt="" />
                        <div className='line'>
                            <p style={{ marginLeft: "20px" }}>UIT</p>
                            <p>RGPV</p>
                            <p>Bhopal</p>
                        </div>
                    </div>
                </div>
                <div className="about-right">
                    <div className='fh'>
                        <p data-aos="flip-right"><span style={{ fontWeight: '900' }}>Whats Youre Story ? </span>Do you want to learn MERN stack Web development , and awsome new web technologies like React, Express, NodeJs NextJs, Firebase, Bootstrap, MongoDB etc.</p>
                    </div>
                    <div className="fc">
                        <form onSubmit={handleSubmit} ref={formRef}>

                            <div className='f' >
                                <input type="text" placeholder='Whats Youre Name' name='user_name'/>
                                <input type="text" placeholder='Subject' name='user_subject' />
                                <input type="text" placeholder='Email' name='user_email' />
                                <div>
                                    <textarea id="" cols="60" rows="8" name='message' className='textarea'></textarea>
                                </div>

                                <div className='btnD'>
                                    <button type='submit' className='btn'>Send Message</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;