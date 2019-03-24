import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/header"
import Body from "./components/body"
import Footer from "./components/footer"

class App extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <Body />
                <Footer />
            </React.Fragment>
        ) 
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));