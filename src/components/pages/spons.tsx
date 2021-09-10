import React from "react";
// import ParticleBackground from './particle';
import "../../styles/button.scss";
import "../../styles/spons.scss";
import "../../styles/tooltip.scss";
import Astra from "../../images/logo/static/Astra.svg";
import Atlasian from "../../images/logo/static/Atlasian.svg";
import Boeing from "../../images/logo/static/Boeing.svg";
import CAT from "../../images/logo/static/CAT.svg";
import KLA from "../../images/logo/static/KLA.svg";
import Mahindra from "../../images/logo/static/Mahindra.svg";
import Salesforces from "../../images/logo/static/Salesforce.svg";
import Wells from "../../images/logo/static/Wells_Fargo.svg";
import foxmula from "../../images/logo/static/foxmula.png";
import innovaccer from "../../images/logo/static/innovaccer.png";
import kamal from "../../images/logo/static/kamal_wears.png";
import LT from "../../images/logo/static/L&T.png";
import mtx from "../../images/logo/static/mtx.png";
import subex from "../../images/logo/static/subex.png";
import surana from "../../images/logo/static/surana.png";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import CustomBox from "../shared/CustomBox";
import catl from "../../images/logo/static/caterpillar22.png";
import www from "../../images/logo/static/www.png";
import linkedin from "../../images/logo/static/linkedin (1).png";
import facebook from "../../images/logo/static/facebook.png";

function Spons() {
  return (
    <>
      <CustomBox>
        <Header />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
        <div className="main-boxx">
          {" "}
          <br />
          <br />
          <p id="about">About Us</p>
          <br />
          <br />
          <p className="boxx">
            Shaastra, ever since it's conception has been growing by leaps and
            bounds and this wouldn't have been achieved without the support of
            the student community and our corporate partners. We are
            continuously on the look out for long-term and mutually beneficial
            associations with reputed organizations from around the globe. In
            case your organization shares and believes in Shaastra’s vision, we
            would love to work out an association. We always welcome ideas,
            queries and criticism of any kind and hence, do feel free to contact
            us.
          </p>
          <br />
          <br />
          <div className="card__collection">
            <div className="card" id="photo">
              <div className="card-front">
                <img src={Astra} className="img-responsive" alt="" />
              </div>
              <div className="card-back">
                <p className="text">
                  <a href="https://www.astrazeneca.com/">
                    <img src={www} id="www1" alt=""></img>
                  </a>
                  <a href="https://www.linkedin.com/company/astrazeneca/">
                    <img alt="" src={linkedin} id="www2"></img>
                  </a>
                  <a href="https://www.facebook.com/astrazenecacareers/">
                    <img alt="" src={facebook} id="www3"></img>
                  </a>
                </p>
              </div>
            </div>

            <div className="card" id="photo">
              <div className="card-front">
                <img src={Atlasian} className="img-responsive" alt="" />
              </div>
              <div className="card-back">
                <p className="text">
                  <a href="https://www.atlassian.com/">
                    <img src={www} id="www1" alt=""></img>
                  </a>
                  <a href="https://www.linkedin.com/company/atlassian/?originalSubdomain=in">
                    <img alt="" src={linkedin} id="www2"></img>
                  </a>
                  <a href="https://www.facebook.com/Atlassian/">
                    <img alt="" src={facebook} id="www3"></img>
                  </a>
                </p>
              </div>
            </div>

            <div className="card" id="photo">
              <div className="card-front">
                <img src={Boeing} className="img-responsive" alt="" />
              </div>
              <div className="card-back">
                <p className="text">
                  <a href="https://www.boeing.com/">
                    <img src={www} id="www1" alt=""></img>
                  </a>
                  <a href="https://www.linkedin.com/company/boeing/">
                    <img alt="" src={linkedin} id="www2"></img>
                  </a>
                  <a href="https://www.facebook.com/Boeing/">
                    <img alt="" src={facebook} id="www3"></img>
                  </a>
                </p>
              </div>
            </div>

            <div className="card" id="photo">
              <div className="card-front">
                <img src={CAT} className="img-responsive" alt="" />
              </div>
              <div className="card-back">
                <p className="text">
                  <a href="https://www.caterpillar.com/">
                    <img src={www} id="www1" alt=""></img>
                  </a>
                  <a href="https://www.linkedin.com/company/caterpillar-inc/">
                    <img alt="" src={linkedin} id="www2"></img>
                  </a>
                  <a href="https://www.facebook.com/caterpillarinc/">
                    <img alt="" src={facebook} id="www3"></img>
                  </a>
                </p>
              </div>
            </div>

            <div className="card" id="photo">
              <div className="card-front">
                <img src={KLA} className="img-responsive" alt="" />
              </div>
              <div className="card-back">
                <p className="text">
                  <a href="https://www.kla-tencor.com/company">
                    <img src={www} id="www1" alt=""></img>
                  </a>
                  <a href="https://www.linkedin.com/company/klacorp/">
                    <img alt="" src={linkedin} id="www2"></img>
                  </a>
                  <a href="https://www.facebook.com/KLAcorp/">
                    <img alt="" src={facebook} id="www3"></img>
                  </a>
                </p>
              </div>
            </div>

            <div className="card" id="photo">
              <div className="card-front">
                <img src={Mahindra} className="img-responsive" alt="" />
              </div>
              <div className="card-back">
                <p className="text">
                  <a href="https://www.mahindra.com/">
                    <img src={www} id="www1" alt=""></img>
                  </a>
                  <a href="https://www.linkedin.com/company/mahindragroup/?originalSubdomain=in">
                    <img alt="" src={linkedin} id="www2"></img>
                  </a>
                  <a href="https://www.facebook.com/MahindraRise/">
                    <img alt="" src={facebook} id="www3"></img>
                  </a>
                </p>
              </div>
            </div>

            <div className="card" id="photo">
              <div className="card-front">
                <img src={Salesforces} className="img-responsive" alt="" />
              </div>
              <div className="card-back">
                <p className="text">
                  <a href="https://www.salesforce.com/in/">
                    <img src={www} id="www1" alt=""></img>
                  </a>
                  <a href="https://www.linkedin.com/company/salesforce/">
                    <img alt="" src={linkedin} id="www2"></img>
                  </a>
                  <a href="https://www.facebook.com/salesforce/">
                    <img alt="" src={facebook} id="www3"></img>
                  </a>
                </p>
              </div>
            </div>

            <div className="card" id="photo">
              <div className="card-front">
                <img src={foxmula} className="img-responsive" alt="" />
              </div>
              <div className="card-back">
                <p className="text">
                  <a href="https://foxmula.com/">
                    <img src={www} id="www1" alt=""></img>
                  </a>
                  <a href="https://www.linkedin.com/company/foxmula-official/?originalSubdomain=in">
                    <img alt="" src={linkedin} id="www2"></img>
                  </a>
                  <a href="https://www.facebook.com/foxmulaOfficial/">
                    <img alt="" src={facebook} id="www3"></img>
                  </a>
                </p>
              </div>
            </div>

            <div className="card" id="photo">
              <div className="card-front">
                <img
                  src={innovaccer}
                  className="img-responsive"
                  id="inno"
                  alt=""
                />
              </div>
              <div className="card-back">
                <p className="text">
                  <a href="https://innovaccer.com/">
                    <img src={www} id="www1" alt=""></img>
                  </a>
                  <a href="https://www.linkedin.com/company/innovaccer/?originalSubdomain=in">
                    <img alt="" src={linkedin} id="www2"></img>
                  </a>
                  <a href="https://www.facebook.com/InnovAccer/">
                    <img alt="" src={facebook} id="www3"></img>
                  </a>
                </p>
              </div>
            </div>

            <div className="card" id="photo">
              <div className="card-front">
                <img src={kamal} className="img-responsive" id="kamal" alt="" />
              </div>
              <div className="card-back">
                <p className="text">
                  <a href="https://www.kla-tencor.com/company">
                    <img src={www} id="www1" alt=""></img>
                  </a>
                  <a href="https://www.linkedin.com/company/klacorp/">
                    <img alt="" src={linkedin} id="www2"></img>
                  </a>
                  <a href="https://www.facebook.com/KLAcorp/">
                    <img alt="" src={facebook} id="www3"></img>
                  </a>
                </p>
              </div>
            </div>

            <div className="card" id="photo">
              <div className="card-front">
                <img src={LT} className="img-responsive" id="lt" alt="" />
              </div>
              <div className="card-back">
                <p className="text">
                  <a href="https://www.larsentoubro.com/">
                    <img src={www} id="www1" alt=""></img>
                  </a>
                  <a href="https://www.linkedin.com/company/larsen-&-toubro-limited/?originalSubdomain=in">
                    <img alt="" src={linkedin} id="www2"></img>
                  </a>
                  <a href="https://www.facebook.com/LT-Construction-364964870240516/">
                    <img alt="" src={facebook} id="www3"></img>
                  </a>
                </p>
              </div>
            </div>

            <div className="card" id="photo">
              <div className="card-front">
                <img src={mtx} className="img-responsive" id="mtx" alt="" />
              </div>
              <div className="card-back">
                <p className="text">
                  <a href="https://www.mtxb2b.com/s/">
                    <img src={www} id="www1" alt=""></img>
                  </a>
                  <a href="https://www.linkedin.com/company/mtx-group/?originalSubdomain=in">
                    <img alt="" src={linkedin} id="www2"></img>
                  </a>
                  <a href="https://www.facebook.com/mtxb2b/">
                    <img alt="" src={facebook} id="www3"></img>
                  </a>
                </p>
              </div>
            </div>

            <div className="card" id="photo">
              <div className="card-front">
                <img src={subex} className="img-responsive" id="subex" alt="" />
              </div>
              <div className="card-back">
                <p className="text">
                  <a href="https://www.subex.com/">
                    <img src={www} id="www1" alt=""></img>
                  </a>
                  <a href="https://www.linkedin.com/company/subex-ltd/?originalSubdomain=in">
                    <img alt="" src={linkedin} id="www2"></img>
                  </a>
                  <a href="https://www.facebook.com/SubexLimited/">
                    <img alt="" src={facebook} id="www3"></img>
                  </a>
                </p>
              </div>
            </div>

            <div className="card" id="photo">
              <div className="card-front">
                <img
                  src={surana}
                  className="img-responsive"
                  id="surana"
                  alt=""
                />
              </div>
              <div className="card-back">
                <p className="text">
                  <a href="https://suranaandsurana.com/">
                    <img src={www} id="www1" alt=""></img>
                  </a>
                  <a href="https://www.linkedin.com/company/surana-&-surana-internartional-attorneys/?originalSubdomain=in">
                    <img alt="" src={linkedin} id="www2"></img>
                  </a>
                  <a href="https://www.facebook.com/Surana-Surana-International-Attorneys-125263729279918/">
                    <img alt="" src={facebook} id="www3"></img>
                  </a>
                </p>
              </div>
            </div>

            <div className="card" id="photo">
              <div className="card-front">
                <img
                  src={Wells}
                  className="img-responsive"
                  id="surana"
                  alt=""
                />
              </div>
              <div className="card-back">
                {/* <p>Hello world</p> */}
                <p className="text">
                  <a href="https://www.wellsfargo.com/">
                    <img src={www} id="www1" alt=""></img>
                  </a>
                  <a href="https://www.linkedin.com/company/wellsfargo/">
                    <img alt="" src={linkedin} id="www2"></img>
                  </a>
                  <a href="https://www.facebook.com/wellsfargo/">
                    <img alt="" src={facebook} id="www3"></img>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="tooltip">
          <button id="flip" className="fill">
            Approach Us
          </button>
          <span className="tooltiptext">
            <a href="mailto:sponsorship@shaastra.org">
              sponsorship@shaastra.org
            </a>
            <br />
            Nithish Venkatesh - 7200939339
            <br />
            Anand Logesh RR - 7358232804
          </span>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </CustomBox>
    </>
  );
}

export default Spons;