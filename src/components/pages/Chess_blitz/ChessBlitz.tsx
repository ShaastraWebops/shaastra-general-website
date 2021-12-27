import React from "react";
import "../../../styles/Chess.css";
import Footer from "../../shared/Footer";
import CustomBox from "../../shared/CustomBox";
import { useColorModeValue } from "@chakra-ui/color-mode";

function ChessBlitz() {
  const theme = useColorModeValue("white", "black");
  return (
    <CustomBox>
      <div className="ChessBlitz">
        <div className="ChessBlitz_landing">
          <div className="contentBox">
            <h1>CHESS BLITZ</h1>
            <h2>SHAASTRA 2022</h2>
            <p>
              This year, Shaastra, IIT Madras, is hosting the Online Blitz Open
              Chess Championship! Last year's competition drew over 450 players
              from all over the world, including several notable grand masters.
              While we continue to fight the pandemic, we've chosen to hold the
              event online again this year. The competition offers a total prize
              pool of INR 85000, as well as various prizes. Don't miss out on
              your chance to play in the year's largest online blitz tournament!
            </p>
            <button>Register now</button>
          </div>
        </div>
        <div className="ChessBlitz_Overview">
          <div className="contentBox">
            <div className="card">
              <h4>Prize Money</h4>
              <h2>
                85k <span>+ Chess Premium Memberships</span>
              </h2>
            </div>
            <div className="card">
              <h4>Registration Fee</h4>
              <h2>INR 200</h2>
            </div>
            <div className="card">
              <h4>Event Date</h4>
              <h2>
                16th <span>January 2022</span>
              </h2>
            </div>
            <div className="card">
              <h4>Event Time</h4>
              <h2>4 PM - 7 PM</h2>
            </div>
            <div className="card">
              <h4>Format</h4>
              <h2>
                3 min + 1 sec <span>12 rounds, Swiss tournament</span>
              </h2>
            </div>
            <div className="card">
              <h4>Platform</h4>
              <h2>Chess.com</h2>
            </div>
          </div>
        </div>
        <div className="ChessBlitz_PrizeDistribution">
          <h2>Prize Distribution</h2>
          <div className="main_category">
            <h4>Main Category : Rs 57950</h4>
            <div className="cardBox">
              <div className="card">
                <h4>1st</h4>
                <h3>Rs 20000</h3>
              </div>
              <div className="card">
                <h4>2nd</h4>
                <h3>Rs 15000</h3>
              </div>
              <div className="card">
                <h4>3rd</h4>
                <h3>Rs 10000</h3>
              </div>
              <div className="card">
                <h4>4th</h4>
                <h3>Rs 5000</h3>
              </div>
              <div className="card">
                <h4>5th</h4>
                <h3>Rs 3000</h3>
              </div>
              <div className="card">
                <h4>6th</h4>
                <h3>Rs 1500</h3>
              </div>
              <div className="card">
                <h4>7th - 11th</h4>
                <h3>Rs 1250</h3>
              </div>
              <div className="card">
                <h4>12th - 16th</h4>
                <h3>Rs 1000</h3>
              </div>
              <div className="card">
                <h4>17th - 21st</h4>
                <h3>Rs 750</h3>
              </div>
              <div className="card">
                <h4>22th - 25th</h4>
                <h3>Rs 500</h3>
              </div>
            </div>
          </div>
          <div className="rated_category">
            <h4>Rated Categories : Rs 9000</h4>
            <div className="twrapper">
              <table>
                <tr>
                  <td>Rank</td>
                  <td>Unrated</td>
                  <td>Below 1400</td>
                  <td>1400 - 1600</td>
                  <td>1600 - 1800</td>
                </tr>
                <tr>
                  <td>1st</td>
                  <td>1000</td>
                  <td>1000</td>
                  <td>1000</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>750</td>
                  <td>750</td>
                  <td>750</td>
                  <td>750</td>
                </tr>
                <tr>
                  <td>3rd</td>
                  <td>500</td>
                  <td>500</td>
                  <td>500</td>
                  <td>500</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="rated_category">
            <h4>Age Categories : </h4>
            <div className="twrapper">
              <table>
                <tr>
                  <td>Rank</td>
                  <td>U - 16</td>
                  <td>U - 14</td>
                  <td>U - 12</td>
                  <td>U - 10</td>
                </tr>
                <tr>
                  <td>1st</td>
                  <td>Chess Subscription</td>
                  <td>Chess Subscription</td>
                  <td>Chess Subscription</td>
                  <td>Chess Subscription</td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>Chess Subscription</td>
                  <td>Chess Subscription</td>
                  <td>Chess Subscription</td>
                  <td>Chess Subscription</td>
                </tr>
                <tr>
                  <td>3rd</td>
                  <td>Chess Subscription</td>
                  <td>Chess Subscription</td>
                  <td>Chess Subscription</td>
                  <td>Chess Subscription</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="rated_category">
            <h4>Other Categories : 4500</h4>
            <div className="twrapper">
              <table>
                <tr>
                  <td>Rank</td>
                  <td>Best Woman</td>
                  <td>Best Veteran</td>
                  <td>Best IITM</td>
                </tr>
                <tr>
                  <td>1st</td>
                  <td>1000</td>
                  <td>1000</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>750</td>
                  <td>750</td>
                  <td>Chess Subscription</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <Footer
          designed={[{ name: "Rohit", mail: "cs19b038@smail.iitm.ac.in" }]}
        />
      </div>
    </CustomBox>
  );
}

export default ChessBlitz;
