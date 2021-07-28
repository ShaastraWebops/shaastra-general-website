import * as React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/Home"
import Envisage from "./pages/Envisage"
import Shows from "./pages/Shows"
import Project from "./pages/Project";

interface Props {
    
}

const AppRoutes = (props: Props) => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/envisage" component={Envisage} />
            <Route path="/project/:id" component={Project} />
            <Route path="/shows" component={Shows} />
        </Router>
    )
}

export default AppRoutes
