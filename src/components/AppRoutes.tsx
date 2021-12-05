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
import EventsAdmin from "./pages/Events and Workshops/EventsAdmin"
import Login from "./pages/Login/Login"
import Forgot from "./pages/Login/ForgotPassword"
import Signup from "./pages/Login/Signup"
import ForgotAfter from "./pages/Login/ForgotAfterLink"
import Verify from "./pages/Login/Verify"
import SignOut from "./pages/Login/SignOut"
import Profile from "./pages/Login/Profile"
import EditProfile from "./pages/Login/EditProfile"
import EventPage from "./pages/Events and Workshops/EventPage";

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
      <Route exact path="/admin/edit/:id" component={EditEvent}></Route>
      <Route exact path="/admin" component={EventsAdmin}></Route>
      <Route exact path="/eventpage/:id" component={EventPage}></Route>


      <Route exact path="/tif" component={Tif} />
      <Route exact path="/summit" component={Summit} />
      <Route exact path="/sponsors" component={Spons} />
      <Route exact path="/speakers" component={Speaker} />

      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="/forgotpassword" component={Forgot}></Route>
      <Route exact path="/forgotpassword/:token" component={ForgotAfter}></Route>
      <Route exact path="/verify/:token" component={Verify}></Route>
      <Route exact path="/signout" component={SignOut}></Route>
      <Route exact path="/profile" component={Profile}></Route>
      <Route exact path="/editprofile" component={EditProfile}></Route>
    </Router>
  );
};

export default AppRoutes;
