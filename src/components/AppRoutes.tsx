import * as React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/Home"
import Social from "./pages/socialEndeavours/SocialEnd"

interface Props {
    
}

const AppRoutes = (props: Props) => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path ="/social-endeavours" component={Social} />
        </Router>
    )
}

export default AppRoutes
