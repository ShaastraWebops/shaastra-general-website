import React from "react";
import { Row, Col } from "react-bootstrap";
import { SimpleGrid } from "@chakra-ui/layout";
import { Box, Grid } from "@chakra-ui/layout";
import { Container } from "react-bootstrap";
import "../../../styles/image.css";
import Hennessy from "../../../images/Speaker/hennessy.jpg";
import Atkins from "../../../images/Speaker/atkins.jpg";
import Radhakrishnan from "../../../images/Speaker/radhakrishnan.jpg";
import Rajan from "../../../images/Speaker/rajan.jpg";
import Robo from "../../../images/Speaker/robothespian.jpg";
import Soumya from "../../../images/Speaker/soumya_swaminathan.jpg";
import Yunus from "../../../images/Speaker/yunus.jpg";
import Capture from "../../../images/Speaker/Capture.jpg";
import Robert from "../../../images/Speaker/robert.jpg";
function Image() {
  return (
    <Box m={100} bg="black">
      {/* // <Row className="content">
    // <Col md={12}> */}
      <div className="mu-featured-tours-area">
        <h2>Our Featured Speakers</h2>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
          officia aut molestiae quod. Veritatis voluptas, possimus. Quae qui
          optio minus dolorem fugit dolore, cum at, harum omnis sint? Saepe,
          asperiores.
        </p>
        <div>
          <Grid
            templateRows="repeat(3,1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={6}
          >
            <Box w="100%">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src={Yunus} alt="img" />
                  </div>
                  <div className="flip-box-back">
                    <h3>Dr Muhammad Yunus</h3>
                    <h4> </h4>
                    <p>Founder of the Grameen Bank, Nobel Peace Prize, 2006</p>
                    <a href="" className="fab fa-youtube fa-2x" />
                  </div>
                </div>
              </div>
            </Box>
            <Box w="100%">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src={Atkins} alt="img" />
                  </div>
                  <div className="flip-box-back">
                    <h3>Dr Peter Atkins</h3>
                    <h4></h4>
                    <span className="mu-price-tag"></span>
                    <p>FRSC, Prolific Author of popular chemistry textbooks</p>
                    <a
                      href="https://www.youtube.com/watch?v=0G_-1SGhYTA&list=PLT4Wldw_lvk2vSGkMDcXazP3iJ3Wlvo4X&index=3"
                      className="fab fa-youtube fa-2x"
                    ></a>
                  </div>
                </div>
              </div>
            </Box>

            <Box w="100%">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src={Hennessy} alt="img" />
                  </div>
                  <div className="flip-box-back">
                    <h3>Dr John Hennessy</h3>
                    <h4></h4>
                    <span className="mu-price-tag"></span>
                    <p>
                      Chairman of Alphabet Inc., Eminent Computer Scientist,
                      Turing Award, 2017
                    </p>
                    <a
                      href="https://www.youtube.com/watch?v=_ebUDIsbqkc&list=PLT4Wldw_lvk2vSGkMDcXazP3iJ3Wlvo4X&index=2"
                      className="fab fa-youtube fa-2x"
                    ></a>
                  </div>
                </div>
              </div>
            </Box>
            <Box w="100%">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src={Radhakrishnan} alt="img" />
                  </div>
                  <div className="flip-box-back">
                    <h3>Dr K. Radhakrishnan</h3>
                    <h4> </h4>
                    <span className="mu-price-tag"></span>
                    <p>Former Chairman, ISRO</p>
                    <a
                      href="https://www.youtube.com/watch?v=Wv_sea0tMrc&list=PLT4Wldw_lvk2vSGkMDcXazP3iJ3Wlvo4X"
                      className="fab fa-youtube fa-2x"
                    ></a>
                  </div>
                </div>
              </div>
            </Box>

            <Box w="100%">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src={Rajan} alt="img" />
                  </div>
                  <div className="flip-box-back">
                    <h3>Rajan</h3>
                    <h4> </h4>
                    <span className="mu-price-tag"></span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      At quidem earum sed. Sint, magnam eligendi!
                    </p>
                    <a href="" className="fab fa-youtube fa-2x"></a>
                  </div>
                </div>
              </div>
            </Box>

            <Box w="100%">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src={Robo} alt="img" />
                  </div>
                  <div className="flip-box-back">
                    <h3>RoboThespian and Cleo</h3>
                    <h4> </h4>
                    <span className="mu-price-tag"></span>
                    <p>World’s First Acting Humanoid Robots</p>
                    <a href="" className="fab fa-youtube fa-2x"></a>
                  </div>
                </div>
              </div>
            </Box>
            <Box w="100%">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src={Soumya} alt="img" />
                  </div>
                  <div className="flip-box-back">
                    <h3>Dr Soumya Swaminathan,</h3>
                    <h4> </h4>
                    <span className="mu-price-tag"></span>
                    <p>Chief Scientist, World Health Organisation (WHO)</p>
                    <a href="" className="fab fa-youtube fa-2x"></a>
                  </div>
                </div>
              </div>
            </Box>

            <Box w="100%">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src={Capture} alt="img" />
                  </div>
                  <div className="flip-box-back">
                    <h3>Dr Joachim Frank</h3>
                    <h4> </h4>
                    <span className="mu-price-tag"></span>
                    <p>Nobel Prize in Chemistry, 2017</p>
                    <a href="" className="fab fa-youtube fa-2x"></a>
                  </div>
                </div>
              </div>
            </Box>

            <Box w="100%">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src={Robert} alt="img" />
                  </div>
                  <div className="flip-box-back">
                    <h3>Mr Robert C. Martin</h3>
                    <h4> </h4>
                    <span className="mu-price-tag"></span>
                    <p>American Software Engineer, Popular Author</p>
                    <a
                      href="https://www.youtube.com/watch?v=FlbDg_iBCkw&list=PLT4Wldw_lvk2vSGkMDcXazP3iJ3Wlvo4X&index=7"
                      className="fab fa-youtube fa-2x"
                    ></a>
                  </div>
                </div>
              </div>
            </Box>
          </Grid>
        </div>
      </div>
      {/* // </Col> */}
      {/* // </Row> */}
    </Box>
  );
}
export default Image;
