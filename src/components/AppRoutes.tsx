import * as React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/Home"
import Eventsworkshops from "./pages/Events and Workshops/EventsHome"
import Events from './pages/Events and Workshops/Events'
import Summit from './pages/Events and Workshops/Summit'
import Tif from './pages/Events and Workshops/Tif'
import Workshops from './pages/Events and Workshops/Workshops'

interface Props {
    
}

const AppRoutes = (props: Props) => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/eventsworkshops" component ={Eventsworkshops}/>
            <Route exact path="/events" component ={Events}/>
            <Route exact path="/workshops" component ={Workshops}/>
            <Route exact path="/tif" component ={Tif}/>
            <Route exact path="/summit" component ={Summit}/>
        </Router>
    )
}

export default AppRoutes
