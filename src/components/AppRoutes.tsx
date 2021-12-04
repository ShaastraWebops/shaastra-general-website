import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Exhibitions from "./pages/Exhibitions/Exhibitions";
import Home from "./pages/Home";
import Envisage from "./pages/night/Envisage";
import Shows from "./pages/night/Shows";
import Project from "./pages/night/Project";
import Team from "./pages/Team_page/Team";
import ShaastraJuniorsPage from "./pages/ShaastraJuniors";
import Social from "./pages/socialEndeavours/SocialEnd";
import Eventsworkshops from "./pages/Events and Workshops/EventsHome";
import Events from "./pages/Events and Workshops/Events";
import Summit from "./pages/Events and Workshops/Summit";
import Tif from "./pages/Events and Workshops/Tif";
import Workshops from "./pages/Events and Workshops/Workshops";
import Spons from "../../src/components/pages/spons";
import Show from "../../src/components/pages/night/Show";
import Speaker from "../../src/components/pages/Speaker/Speaker";
import EventVertical from "./pages/Events and Workshops/EventVertical"
import EventAdmin from "./pages/Events and Workshops/AddEvent"
import EditEvent from "./pages/Events and Workshops/EditEvent"

interface Props {}

const AppRoutes = (props: Props) => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/envisage" component={Envisage} />
      <Route path="/project/:id" component={Project} />
      <Route path="/shows" component={Show} />
      <Route exact path="/exhibitions" component={Exhibitions} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/shaastra-juniors" component={ShaastraJuniorsPage} />
      <Route exact path="/social-endeavours" component={Social} />

      <Route exact path="/eventsworkshops" component={Eventsworkshops} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/events/:name" component={EventVertical}></Route>
      <Route exact path="/admin/add" component={EventAdmin}></Route>
      <Route exact path="/admin/edit" component={EditEvent}></Route>

      <Route exact path="/tif" component={Tif} />
      <Route exact path="/summit" component={Summit} />
      <Route exact path="/sponsors" component={Spons} />
      <Route exact path="/speakers" component={Speaker} />
    </Router>
  );
};

export default AppRoutes;
