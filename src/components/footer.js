import React, {Component} from "react"
import "../styles/footer.sass"

class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="contacts">
                    <div className="addresses">
                        <div className="mails">
                            <span><a href="mailto:info@burst.it">info@burst.it</a></span>
                            <span>For press inquiries: <a href="mailto:burst.v2comms.com">burst.v2comms.com</a></span>
                        </div>
                        <div className="geo">
                            <span>Burst.it, LLC</span>
                            <span>184 High Street, Boston, MA 02110</span>
                        </div>
                    </div>
                    <div className="download">
                        <div className="googleplay">
                            <a href="#" target="_blank"></a>
                        </div>
                        <div className="appstore">
                            <a href="#" target="_blank"></a>
                        </div>
                    </div>
                </div>
                <div className="policy">
                    <span><a href="#">Privacy policy</a></span>
                    <span><a href="#">Terms of service</a></span>
                    <span><a href="#">Burst for consumers</a></span>
                </div>
            </footer>
        )
    }
}

export default Footer