import * as React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Exhibitions from "./pages/Exhibitions/Exhibitions"
import Home from "./pages/Home"

interface Props {
    
}

const AppRoutes = (props: Props) => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/exhibitions" component={Exhibitions} />
        </Router>
    )
}

export default AppRoutes
