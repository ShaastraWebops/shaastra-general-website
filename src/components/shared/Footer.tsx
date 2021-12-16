import * as React from "react";
import { ReactComponent as LogoBlack } from "./../../images/logo/static/Main_logo_black.svg";
import { ReactComponent as LogoWhite } from "./../../images/logo/static/Main_logo_white.svg";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import "../../styles/Footer.css";

interface Props {
  designed: {
    name: String;
    mail: String;
  }[];
}

const Footer = (props: Props) => {
  const FooterLogo = useColorModeValue(LogoBlack, LogoWhite);
  const theme = useColorModeValue("white", "black");
  const height = useBreakpointValue({ base: "33", lg: "40" });
  return (
    <section className={`Footer ${theme}`}>
      <div className="top">
        <Link to="/" className="FooterLogo">
          <FooterLogo height={height} width="88" />
        </Link>
        <div className="Contact">
          <h3>Contact Us : </h3>
          <p>
            {window.innerWidth < 600 ? <br /> : <span>General : </span>}
            <a href="mailto:sec_cocur@shaastra.org">
              <FaEnvelope /> sec_cocur@smail.iitm.ac.in
            </a>
          </p>
          {/* <p>
            {window.innerWidth < 600 ? (
              <br />
            ) : (
              <span>Student Relations : </span>
            )}
            <a href="mailto:juniors@shaastra.org">
              <FaEnvelope /> juniors@shaastra.org
            </a>
          </p> */}
          <p>
            {window.innerWidth < 600 ? (
              <br />
            ) : (
              <span>Sponsors Relations : </span>
            )}
            <a href="mailto:sponsorship@shaastra.org">
              <FaEnvelope /> sponsorship@shaastra.org
            </a>
          </p>
          <p>
            {window.innerWidth < 600 ? <br /> : <span>Webops Team : </span>}
            <a href="mailto:webops@shaastra.org">
              <FaEnvelope /> webops@shaastra.org
            </a>
          </p>
          {window.innerWidth < 600 ? <></> : <br />}
        </div>
        <div className="DesignedBy">
          <h3>Legal : </h3>
          <p>
            <a href="policies/privacy-policy">Privacy Policy</a>
          </p>
          <p>
            <a href="policies/terms-conditions">Terms and Conditions</a>
          </p>
          <p>
            <a href="policies/shipping-policy">Shipping Policy</a>
          </p>
          <p>
            <a href="policies/return-refund-policy">Return and Refund Policy</a>
          </p>
        </div>
      </div>
      <div className="bottom">
        <p>
          Ⓒ Developed by{" "}
          {props.designed.map((item, key) => {
            if (key == 0) {
              return item.name;
            } else {
              return ", " + item.name;
            }
          })}{" "}
          | Web Operations | Shaastra | IIT Madras. All Rights Reserved
        </p>
        <div className="Follow">
          <p>FOLLOW US</p>
          <span></span>
          <a
            target="_blank"
            href="https://www.instagram.com/shaastra_iitm/?hl=en"
          >
            <FaInstagram />
          </a>
          <span></span>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/shaastra-iit-madras/?originalSubdomain=in"
          >
            <FaLinkedin />
          </a>
          <span></span>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCgY2ugmW-BV2nMRFu-0qPZA"
          >
            <FaYoutubeSquare />
          </a>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
