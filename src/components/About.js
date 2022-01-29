import '../css/about.css'
import web from '../Images/web.png'

export default function About() {
    return (
        <div className="a">
            <div className="a-left">

                <div className='a-card card-bg' data-aos="fade-left"></div>
                <div className='a-card' data-aos="fade-right">
                    <img className='card-img' src="https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                </div>

            </div>
            <div className="a-right">
                <div className="a-right-wrapper">
                    <h1 className='a-title'>About Web</h1>
                    <h3 className='a-heading' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatum repellendus voluptatibus iure . </h3>
                    <div className='a-des' data-aos="zoom-in">
                        <p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</p>
                    </div>
                    <div className="a-logo-sec">
                        <div className="a-img">
                            <img src={web} alt="" />
                        </div>
                        <div className="a-info">
                            <h3>World Wide Web (WWW)</h3>
                            <p data-aos="fade-up"
                                data-aos-duration="3000">The World Wide Web (WWW) is combination of all resources and users on the Internet that are using the Hypertext Transfer Protocol (HTTP).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
