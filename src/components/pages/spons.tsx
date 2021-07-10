import React from 'react'
// import ParticleBackground from './particle';
import '../../styles/button.scss';
import '../../styles/spons.scss';
import '../../styles/tooltip.scss';
import Astra from '../../images/logo/static/Astra.svg'
import Atlasian from '../../images/logo/static/Atlasian.svg'
import Boeing from '../../images/logo/static/Boeing.svg'
import CAT from '../../images/logo/static/CAT.svg'
import KLA from '../../images/logo/static/KLA.svg'
import Mahindra from '../../images/logo/static/Mahindra.svg'
import Salesforces from '../../images/logo/static/Salesforce.svg'
import Wells from '../../images/logo/static/Wells_Fargo.svg'
import foxmula from '../../images/logo/static/foxmula.png'
import innovaccer from '../../images/logo/static/innovaccer.png'
import kamal from '../../images/logo/static/kamal_wears.png'
import LT from '../../images/logo/static/L&T.jpg'
import mtx from '../../images/logo/static/mtx.png'
import subex from '../../images/logo/static/subex.png'
import surana from '../../images/logo/static/surana.png'
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import CustomBox from '../shared/CustomBox';
import catl from '../../images/logo/static/caterpillar22.png'

var script = document.createElement('script');

script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

function Spons() {

    return (
        <>
            <CustomBox>

                <Header /><meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="main-boxx">
                    <div className="card__collection clear-fix mitesh">
                        <div className="cards cards--three" id="photo">
                            <img src={Astra} className="img-responsive" alt="" />
                            <span className="cards--three__rect-1">
                                <span className="shadow-1"></span>
                                <p className="text">AstraZeneca</p>
                            </span>
                            <span className="cards--three__rect-2">
                                <span className="shadow-2"></span>
                            </span>
                        </div>

                        <div className="cards cards--three" id="photo">
                            <img src={Atlasian} className="img-responsive" alt="" />
                            <span className="cards--three__rect-1">
                                <span className="shadow-1"></span>
                                <p className="text">ATLASSIAN</p>
                            </span>
                            <span className="cards--three__rect-2">
                                <span className="shadow-2"></span>
                            </span>

                        </div>

                        <div className="cards cards--three" id="photo">
                            <img src={Boeing} className="img-responsive" alt="" />
                            <span className="cards--three__rect-1">
                                <span className="shadow-1"></span>
                                <p className="text">BOEING</p>
                            </span>
                            <span className="cards--three__rect-2">
                                <span className="shadow-2"></span>
                            </span>

                        </div>

                        <div className="cards cards--three" id="photo">
                            <img src={catl} className="img-responsive" alt="" />
                            <span className="cards--three__rect-1">
                                <span className="shadow-1"></span>
                                <p className="text">CATERPILLAR</p>
                            </span>
                            <span className="cards--three__rect-2">
                                <span className="shadow-2"></span>
                            </span>

                        </div>

                        <div className="cards cards--three" id="photo">
                            <img src={KLA} className="img-responsive" alt="" />
                            <span className="cards--three__rect-1">
                                <span className="shadow-1"></span>
                                <p className="text">KLA</p>
                            </span>
                            <span className="cards--three__rect-2">
                                <span className="shadow-2"></span>
                            </span>

                        </div>

                        <div className="cards cards--three" id="photo">
                            <img src={Mahindra} className="img-responsive" alt="" />
                            <span className="cards--three__rect-1">
                                <span className="shadow-1"></span>
                                <p className="text">MAHINDRA Rise</p>
                            </span>
                            <span className="cards--three__rect-2">
                                <span className="shadow-2"></span>
                            </span>

                        </div>

                        <div className="cards cards--three" id="photo">
                            <img src={Salesforces} className="img-responsive" alt="" />
                            <span className="cards--three__rect-1">
                                <span className="shadow-1"></span>
                                <p className="text">Salesforce</p>
                            </span>
                            <span className="cards--three__rect-2">
                                <span className="shadow-2"></span>
                            </span>
                        </div>

                        <div className="cards cards--three" id="photo">
                            <img src={foxmula} className="img-responsive" alt="" />
                            <span className="cards--three__rect-1">
                                <span className="shadow-1"></span>
                                <p className="text">FOXMULA</p>
                            </span>
                            <span className="cards--three__rect-2">
                                <span className="shadow-2"></span>
                            </span>

                        </div>

                        <div className="cards cards--three" id="photo">
                            <img src={innovaccer} className="img-responsive" alt="" />
                            <span className="cards--three__rect-1">
                                <span className="shadow-1"></span>
                                <p className="text">INNOVACCER</p>
                            </span>
                            <span className="cards--three__rect-2">
                                <span className="shadow-2"></span>
                            </span>

                        </div>

                        <div className="cards cards--three" id="photo">
                            <img src={kamal} className="img-responsive" alt="" />
                            <span className="cards--three__rect-1">
                                <span className="shadow-1"></span>
                                <p className="text">KAMAL wears</p>
                            </span>
                            <span className="cards--three__rect-2">
                                <span className="shadow-2"></span>
                            </span>

                        </div>

                        <div className="cards cards--three" id="photo">
                            <img src={LT} className="img-responsive" alt="" />
                            <span className="cards--three__rect-1">
                                <span className="shadow-1"></span>
                                <p className="text">L&T Construction</p>
                            </span>
                            <span className="cards--three__rect-2">
                                <span className="shadow-2"></span>
                            </span>

                        </div>

                        <div className="cards cards--three" id="photo">
                            <img src={mtx} className="img-responsive" alt="" />
                            <span className="cards--three__rect-1">
                                <span className="shadow-1"></span>
                                <p className="text">MTX</p>
                            </span>
                            <span className="cards--three__rect-2">
                                <span className="shadow-2"></span>
                            </span>

                        </div>

                        <div className="cards cards--three" id="photo">
                            <img src={subex} className="img-responsive" alt="" />
                            <span className="cards--three__rect-1">
                                <span className="shadow-1"></span>
                                <p className="text">SUBEX</p>
                            </span>
                            <span className="cards--three__rect-2">
                                <span className="shadow-2"></span>
                            </span>

                        </div>

                        <div className="cards cards--three" id="photo">
                            <img src={surana} className="img-responsive" alt="" id="surana"/>
                            <span className="cards--three__rect-1">
                                <span className="shadow-1"></span>
                                <p className="text">SURANA & SURANA</p>
                            </span>
                            <span className="cards--three__rect-2">
                                <span className="shadow-2"></span>
                            </span>

                        </div>

                        <div className="cards cards--three" id="photo">
                            <img src={Wells} className="img-responsive" alt="" />
                            <span className="cards--three__rect-1">
                                <span className="shadow-1"></span>
                                <p className="text">WELLS FARGO</p>
                            </span>
                            <span className="cards--three__rect-2">
                                <span className="shadow-2"></span>
                            </span>
                        </div>

                    </div>
                        </div>
                    <br />
                    <br />

                    <div className="tooltip">

                        <button id="flip" className="fill">Approach Us</button>
                        <span className="tooltiptext"><a href="mailto:sponsorship@shaastra.org">sponsorship@shaastra.org</a><br />Nithish Venkatesh - 7200939339<br />Anand Logesh RR - 7358232804</span>

                        {/* <div>
                        {/* <h2>Triangle</h2> 
                        <button id="flip" className="fill tooltip--triangle" data-tooltip="Hello World!">Approach Us</button>
                        <span className="tooltip"></span>
                    </div> */}
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p id="about">About Us</p><br /><br />
                    <p className="boxx">Shaastra, ever since it's conception has been growing by leaps and bounds and this wouldn't have been achieved without the support of the student community and our corporate partners. We are continuously on the look out for long-term and mutually beneficial associations with reputed organizations from around the globe. In case your organization shares and believes in Shaastra’s vision, we would love to work out an association. We always welcome ideas, queries and criticism of any kind and hence, do feel free to contact us.</p>
                    <br />
                    <br />
                <Footer />
            </CustomBox>
        </>
    )
}

export default Spons