import React from "react";
import CustomBox from "../../shared/CustomBox";
import "../../../styles/Speaker.css";
import Images from "./Image";
import Video from "../../../images/Speaker/video/speaker.mp4";
// import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <CustomBox>
      <div>
        <section>
          <video autoPlay loop muted src={Video} />
          <div className="mu-hero-featured-content">
            <h1> SPOTLIGHT </h1>
            <h2>
              {" "}
              Spanning Science, Technology, Art, Entertainment & more, Spotlight
              is the flagship lecture series of Shaastra which brings
              visionaries from across the world, creating a unique platform for
              learning and interaction with pioneers who have transformed the
              world in remarkable ways. Spotlight stands for the convergence of
              brilliance, love of knowledge and the very spirit of engineering
              that Shaastra embodies.{" "}
            </h2>
          </div>
        </section>
        <Images />
      </div>
    </CustomBox>
  );
}

export default App;
