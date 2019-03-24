import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/header"
import Body from "./components/body"

class App extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <Body />
            </React.Fragment>
        ) 
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));