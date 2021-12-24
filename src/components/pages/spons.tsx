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
import HW from "../../images/logo/static/HW.png";
import AMD from "../../images/logo/static/AMD.png";
import ES from "../../images/logo/static/ES.png";
import subex from "../../images/logo/static/subex.png";
import surana from "../../images/logo/static/surana.png";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import binance from "../../images/logo/static/BL-removebg-preview.png";
import TPL from "../../images/logo/static/TPL.png";
import CustomBox from "../shared/CustomBox";
import HPCL from "../../images/logo/static/HPCL.png";
import catl from "../../images/logo/static/caterpillar22.png";
import www from "../../images/logo/static/www.png";
import linkedin from "../../images/logo/static/linkedin (1).png";
import MEB from "../../images/logo/static/ME-B.png";
import MEW from "../../images/logo/static/ME-W.png";
import CL from "../../images/logo/static/CL.png";
import WC from "../../images/logo/static/WC.png";
import BS from "../../images/logo/static/BS.png";
import ADW from "../../images/logo/static/AD-W.png";
import ADB from "../../images/logo/static/AD-B.png";
import facebook from "../../images/logo/static/facebook.png";
import { useColorModeValue } from "@chakra-ui/color-mode";
import logo2 from "../../images/logo/static/logo2.png";
import { invertScale } from "framer-motion/types/value/use-inverted-scale";

function Spons() {
  const theme = useColorModeValue("white", "black");
  return (
    <>
      <CustomBox>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
        <div className="sponsBox1">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="main-boxx">
            <br />
            <br />
            <div className="aboutus">
              <p id="about">About Us</p>
            </div>
            <br />
            <br />
            <div className="maintextspons">
              <p className="boxx">
                Shaastra, ever since it's conception has been growing by leaps
                and bounds and this wouldn't have been achieved without the
                support of the student community and our corporate partners. We
                are continuously on the look out for long-term and mutually
                beneficial associations with reputed organizations from around
                the globe. In case your organization shares and believes in
                Shaastra’s vision, we would love to work out an association. We
                always welcome ideas, queries and criticism of any kind and
                hence, do feel free to contact us.
              </p>
            </div>
            <br />
            <br />
            <div className="card__collection">
              <div className="card" id="photo">
                <div className="card-front">
                  <p id="sponsro">Title Sponsor</p>
                  <img
                    src={TPL}
                    className="img-responsive"
                    id="tata"
                    alt=""
                  />
                </div>
                <div className="card-back">
                  <p className="text">
                    <a href="https://www.tataprojects.com/">
                      <img src={www} id="www1" alt=""></img>
                    </a>
                    <a href="https://www.linkedin.com/company/tata-projects/?originalSubdomain=in">
                      <img alt="" src={linkedin} id="www2"></img>
                    </a>
                    <a href="https://www.facebook.com/OfficialTPLCommunity/">
                      <img alt="" src={facebook} id="www3"></img>
                    </a>
                  </p>
                </div>
              </div>

              <div className="card" id="photo">
                <div className="card-front">
                <p id="sponsro">Associate Title</p>

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
                <p id="sponsro">Platinum Sponsor</p>

                  <img src={binance} className="img-responsive" id="binance" alt="" />
                </div>
                <div className="card-back">
                  <p className="text">
                    <a href="https://www.binance.com/en-IN">
                      <img src={www} id="www1" alt=""></img>
                    </a>
                    <a href="https://www.linkedin.com/company/binance/">
                      <img alt="" src={linkedin} id="www2"></img>
                    </a>
                    <a href="https://www.facebook.com/binance/">
                      <img alt="" src={facebook} id="www3"></img>
                    </a>
                  </p>
                </div>
              </div>

              <div className="card" id="photo">
                <div className="card-front">
                <p id="sponsro">Diamond Sponsor</p>

                  <img
                    src={AMD}
                    className="img-responsive"
                    id="AMD"
                    style={
                      theme == "black"
                        ? {
                          filter: "invert(1)",
                        }
                        : {
                          filter: "invert(0)",
                        }
                    }
                    alt=""
                  />
                </div>
                <div className="card-back">
                  <p className="text">
                    <a href="https://www.amd.com/en">
                      <img src={www} id="www1" alt=""></img>
                    </a>
                    <a href="https://www.linkedin.com/company/amd/?originalSubdomain=in">
                      <img alt="" src={linkedin} id="www2"></img>
                    </a>
                    <a href="https://www.facebook.com/AMD/">
                      <img alt="" src={facebook} id="www3"></img>
                    </a>
                  </p>
                </div>
              </div>

              <div className="card" id="photo">
                <div className="card-front">
                <p id="sponsro">Gold Sponsor</p>
                  <img
                    src={Wells}
                    className="img-responsive"
                    id="surana"
                    alt=""
                  />
                </div>
                <div className="card-back">
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

              <div className="card" id="photo">
                <div className="card-front">
                <p id="sponsro">Co Sponsor</p>

                  <img src={logo2} className="img-responsive" id="ravi" alt="" />
                </div>
                <div className="card-back">
                  <p className="text">
                    <a href="http://www.ravikiraninfotech.com/">
                      <img src={www} id="www1" alt=""></img>
                    </a>
                    <a href="https://www.linkedin.com/company/ravikiraninfotech/?originalSubdomain=in">
                      <img alt="" src={linkedin} id="www2"></img>
                    </a>
                    <a href="https://www.facebook.com/ravikiraninfo/">
                      <img alt="" src={facebook} id="www3"></img>
                    </a>
                  </p>
                </div>
              </div>

              <div className="card" id="photo">
                <div className="card-front">
                <p id="sponsro">Co Sponsor</p>

                  <img src={Astra} className="img-responsive" id="Astra" alt="" />
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
                <p id="sponsro">Co Sponsor</p>

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
                <p id="sponsro">IDP Sponsor</p>

                  <img
                    src={CAT}
                    className="img-responsive"
                    alt=""
                    style={
                      theme == "black"
                        ? {
                          filter: "invert(1)",
                        }
                        : {
                          filter: "invert(0)",
                        }
                    }
                  />
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
                <p id="sponsro">Event Sposnor</p>

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
                <p id="sponsro">Event Sposnor</p>

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
                <p id="sponsro">Event Sposnor</p>

                  <img
                    src={MEB}
                    className="img-responsive"
                    id="mouser"
                    alt=""
                  />
                </div>
                <div className="card-back">
                  <p className="text">
                    <a href="https://www.mouser.com/">
                      <img src={www} id="www1" alt=""></img>
                    </a>
                    <a href="https://www.linkedin.com/company/mouser-electronics/">
                      <img alt="" src={linkedin} id="www2"></img>
                    </a>
                    <a href="https://www.facebook.com/mouserelectronics/">
                      <img alt="" src={facebook} id="www3"></img>
                    </a>
                  </p>
                </div>
              </div>

              <div className="card" id="photo">
                <div className="card-front">
                <p id="sponsro">Event Sposnor</p>

                  <img
                    src={ADB}
                    className="img-responsive"
                    id="autodesk"
                    style={
                      theme == "black"
                        ? {
                          filter: "invert(1)",
                        }
                        : {
                          filter: "invert(0)",
                        }
                    }
                    alt=""
                  />
                </div>
                <div className="card-back">
                  <p className="text">
                    <a href="https://www.autodesk.com/education/edu-software/overview?sorting=featured&filters=individual">
                      <img src={www} id="www1" alt=""></img>
                    </a>
                    <a href="https://www.linkedin.com/company/autodesk/">
                      <img alt="" src={linkedin} id="www2"></img>
                    </a>
                    <a href="https://www.facebook.com/autodesk/">
                      <img alt="" src={facebook} id="www3"></img>
                    </a>
                  </p>
                </div>
              </div>

              <div className="card" id="photo">
                <div className="card-front">
                <p id="sponsro">Event Sposnor</p>

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
                    <a href="https://www.linkedin.com/company/surana-&-surana-internartional-attorneys/">
                      <img alt="" src={linkedin} id="www2"></img>
                    </a>
                    <a href="https://www.facebook.com/Surana-Surana-International-Attorneys-125263729279918">
                      <img alt="" src={facebook} id="www3"></img>
                    </a>
                  </p>
                </div>
              </div>

              <div className="card" id="photo">
                <div className="card-front">
                <p id="sponsro">Event Sponsor</p>

                  <img
                    src={HW}
                    className="img-responsive"
                    id="inno"
                    alt=""
                  />
                </div>
                <div className="card-back">
                  <p className="text">
                    <a href="https://www.honeywell.com/us/en">
                      <img src={www} id="www1" alt=""></img>
                    </a>
                    <a href="https://www.linkedin.com/company/honeywell/">
                      <img alt="" src={linkedin} id="www2"></img>
                    </a>
                    <a href="https://www.facebook.com/honeywellhome/">
                      <img alt="" src={facebook} id="www3"></img>
                    </a>
                  </p>
                </div>
              </div>


              

              <div className="card" id="photo">
                <div className="card-front">
                <p id="sponsro">Event Sposnor</p>

                  <img
                    src={BS}
                    className="img-responsive"
                    id="Bs"
                    alt=""
                  />
                </div>
                <div className="card-back">
                  <p className="text">
                    <a href="https://www.business-standard.com/">
                      <img src={www} id="www1" alt=""></img>
                    </a>
                    <a href="https://www.linkedin.com/company/business-standard/?originalSubdomain=in">
                      <img alt="" src={linkedin} id="www2"></img>
                    </a>
                    <a href="https://www.facebook.com/bsindia/">
                      <img alt="" src={facebook} id="www3"></img>
                    </a>
                  </p>
                </div>
              </div>

              <div className="card" id="photo">
                <div className="card-front">
                <p id="sponsro">Event Sponsor</p>

                  <img
                    src={WC}
                    className="img-responsive"
                    id="wow"
                    alt=""
                  />
                </div>
                <div className="card-back">
                  <p className="text">
                    <a href="https://www.wowchess.com/">
                      <img src={www} id="www1" alt=""></img>
                    </a>
                    <a href="https://www.linkedin.com/company/wowchess/?originalSubdomain=in">
                      <img alt="" src={linkedin} id="www2"></img>
                    </a>
                    <a href="#">
                      <img alt="" src={facebook} id="www3"></img>
                    </a>
                  </p>
                </div>
              </div>
              {/* <div className="card" id="photo">
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
                  <img src={foxmula} className="img-responsive" id="foxmula" alt="" />
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
                    src={HPCL}
                    className="img-responsive"
                    id="hpcl"
                    style={
                      theme == "black"
                        ? {
                          filter: "invert(1)",
                        }
                        : {
                          filter: "invert(0)",
                        }
                    }
                    alt=""
                  />
                </div>
                <div className="card-back">
                  <p className="text">
                    <a href="https://www.hindustanpetroleum.com/">
                      <img src={www} id="www1" alt=""></img>
                    </a>
                    <a href="#">
                      <img alt="" src={linkedin} id="www2"></img>
                    </a>
                    <a href="#">
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
                    style={
                      theme == "black"
                        ? {
                          filter: "invert(1)",
                        }
                        : {
                          filter: "invert(0)",
                        }
                    }
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
                  <img
                    src={kamal}
                    className="img-responsive"
                    id="kamal"
                    alt=""
                  />
                </div>
                <div className="card-back">
                  <p className="text">
                    <a href="#">
                      <img src={www} id="www1" alt=""></img>
                    </a>
                    <a href="#">
                      <img alt="" src={linkedin} id="www2"></img>
                    </a>
                    <a href="#">
                      <img alt="" src={facebook} id="www3"></img>
                    </a>
                  </p>
                </div>
              </div>

              

              

              



              



              

              <div className="card" id="photo">
                <div className="card-front">
                  <img
                    src={subex}
                    className="img-responsive"
                    id="subex"
                    alt=""
                  />
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

              



               */}

              <div className="card" id="photo">
                <div className="card-front">
                <p id="sponsro">Campus Ambassador Sponsor</p>

                  <img
                    src={CL}
                    className="img-responsive"
                    id="subex"
                    style={
                      theme == "black"
                        ? {
                          filter: "invert(0)",
                        }
                        : {
                          filter: "invert(1)",
                        }
                    }
                    alt=""
                  />
                </div>
                <div className="card-back">
                  <p className="text">
                    <a href="https://www.cuvette.tech/">
                      <img src={www} id="www1" alt=""></img>
                    </a>
                    <a href="https://www.linkedin.com/company/cuvette-tech/">
                      <img alt="" src={linkedin} id="www2"></img>
                    </a>
                    <a href="https://www.facebook.com/cuvette.tech/">
                      <img alt="" src={facebook} id="www3"></img>
                    </a>
                  </p>
                </div>
              </div>


              <div className="card" id="photo">
                <div className="card-front">
                <p id="sponsro">Campus ambassador sponsor</p>

                  <img
                    src={ES}
                    className="img-responsive"
                    id="subex"
                    style={
                      theme == "black"
                        ? {
                          filter: "invert(1)",
                        }
                        : {
                          filter: "invert(0)",
                        }
                    }
                    alt=""
                  />
                </div>
                <div className="card-back">
                  <p className="text">
                    <a href="https://easyshiksha.com/">
                      <img src={www} id="www1" alt=""></img>
                    </a>
                    <a href="https://www.linkedin.com/company/easyshiksha/">
                      <img alt="" src={linkedin} id="www2"></img>
                    </a>
                    <a href="https://www.facebook.com/EasyShikshaIndia/">
                      <img alt="" src={facebook} id="www3"></img>
                    </a>
                  </p>
                </div>
              </div>
              {/* <div className="card" id="photo">
              <div className="card-front">
                <img src={binance} className="img-responsive" alt="" />
              </div>
              <div className="card-back">
                <p className="text">
                  <a href="https://www.binance.com/en-IN/">
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
            </div> */}










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
              Nithish Venkatesh:  +91 7200939339
              <br />
              Anand Logesh RR:  +91 7358232804
            </span>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        {/* <Header /> */}

        <Footer
          designed={[{ name: "Mitesh", mail: "ce20b025@smail.iitm.ac.in" }]}
        />
      </CustomBox>
    </>
  );
}

export default Spons;
