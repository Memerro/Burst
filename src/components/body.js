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
            </div>
        )
    }
}

export default Body