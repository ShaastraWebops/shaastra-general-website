import * as React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Exhibitions from "./pages/Exhibitions/Exhibitions"
import Home from "./pages/Home"
import Envisage from "./pages/Envisage"
import Shows from "./pages/Shows"
import Project from "./pages/Project";
import Team from "./pages/Team_page/Team";

interface Props {}

const AppRoutes = (props: Props) => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/envisage" component={Envisage} />
            <Route path="/project/:id" component={Project} />
            <Route path="/shows" component={Shows} />
            <Route exact path="/exhibitions" component={Exhibitions} />
            <Route exact path="/team" component={Team} />
        </Router>
    )
}

export default AppRoutes;
