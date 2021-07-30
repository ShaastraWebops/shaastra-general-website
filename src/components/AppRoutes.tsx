import * as React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Exhibitions from "./pages/Exhibitions/Exhibitions"
import Home from "./pages/Home"
import Envisage from "./pages/Envisage"
import Shows from "./pages/Shows"
import Project from "./pages/Project";
import Team from "./pages/Team_page/Team";
import ShaastraJuniorsPage from "./pages/ShaastraJuniors"
import Social from "./pages/socialEndeavours/SocialEnd"

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
            <Route exact path="/shaastra-juniors" component={ShaastraJuniorsPage} />
            <Route exact path ="/social-endeavours" component={Social} />
        </Router>
    )
}

export default AppRoutes;
