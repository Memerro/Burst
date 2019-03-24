import React, {Component} from "react"
import "../styles/body.sass"

class Body extends Component {
    render() {
        return(
            <div className="body">
                <div className="actions">
                    <div className="action">
                        <div className="capture"></div>
                        <h3>1. Capture</h3>
                        <p>Easily create video from your mobile phone</p>
                    </div>
                    <div className="action">
                        <div className="publish"></div>
                        <h3>2. Publish</h3>
                        <p>You can publish to web immediately</p>
                    </div>
                    <div className="action">
                        <div className="monetize"></div>
                        <h3>3. Monetize</h3>
                        <p>Ad inventory built right in</p>
                    </div>
                </div>
                <div className="features">
                    <div className="feature">
                        <div className="creation"></div>
                        <h3>Easy content creation</h3>
                        <p>Using any mobile phone, capturing
                           content is easy and inexpensive
                        </p>
                    </div>
                    <div className="feature">
                        <div className="management"></div>
                        <h3>Content Management</h3>
                        <p>With full administration, our content
                           management tool puts you in control of the content
                        </p>
                    </div>
                    <div className="feature">
                        <div className="engagement"></div>
                        <h3>Consumer Engagement</h3>
                        <p>Videos engage end users and drive more traffic</p>
                    </div>
                    <div className="feature">
                        <div className="videos"></div>
                        <h3>Video = $$$</h3>
                        <p>With ad inventory and the ability to white label,
                           your company will have new revenue streams
                        </p>
                    </div>
                    <div className="allFeatures">
                        <span>
                            <a href="#" target="_blank">View All Features<i className="fas fa-angle-right"></i></a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body