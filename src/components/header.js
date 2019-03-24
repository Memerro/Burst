import React, {Component} from "react"
import "../styles/header.sass"

class Header extends Component {
    componentDidMount() {
        let containers = document.querySelectorAll('.slide');
        let currentSlide = 0;
        let slideInterval = setInterval(nextSlide, 2000);

        function nextSlide() {
            containers[currentSlide].className='slide';
            currentSlide=(currentSlide+1)%containers.length;
            containers[currentSlide].className='slide showing'
        }
    }

    render() { 
        return(
        <header>
            <div className="colorline">
                <div className="navy"></div>
                <div className="green"></div>
                <div className="yellow"></div>
                <div className="blue"></div>
                <div className="navy"></div>
                <div className="green"></div>
                <div className="yellow"></div>
                <div className="blue"></div>
            </div>
            <div className="navbar">
                <div className="logo">
                    <a href="#"></a>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href="#" target="_blank">HOME</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">DEMO</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">CONTACT US</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">SIGN IN</a>
                        </li>
                    </ul>
                </div>
                <div className="consumers">
                    <a href="#" target="_blank">Burst for consumers<i className="fas fa-chevron-circle-right"></i></a>
                </div>
            </div>
            <div className="slider">
                <div className="slide showing">
                    <div className="phone"></div>
                    <div className="content">
                        <h1>Mobile Video Solution for Business</h1>
                        <p>Engaging consumers, facilitating content creation</p>
                        <div className="demo">
                            <span>
                                <a href="#">View Demo</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="phone"></div>
                    <div className="content">
                        <h1>Mobile Video Solution for Business</h1>
                        <p>Engaging consumers, facilitating content creation</p>
                        <div className="demo">
                            <span>
                                <a href="#">View Demo</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}

export default Header