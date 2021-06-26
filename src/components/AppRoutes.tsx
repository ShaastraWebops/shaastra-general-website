import * as React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/Home"
import Main from "./pages/Main"
import Project from "./pages/Project";

interface Props {
    
}

const AppRoutes = (props: Props) => {
    return (
        <Router>
            <Route exact path="/" component={Home} /> 
            <Route path="/main" component={Main} />
            <Route path="/project/:id" component={Project} />

        </Router>
    )
}

export default AppRoutes
