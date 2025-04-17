import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting, contactPageData } from "../../portfolio";
import { Fade } from "react-reveal";

const addressSection = contactPageData.addressSection;

export default function Greeting(props) {
  const theme = props.theme;
  const myHomeSetUpStyles = {
    borderRadius: 50,
    padding: 20,
  };
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                {/* <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                /> */}

                <table>
                  <tr>
                    <td>
                      <p
                        className="contact-header-detail-text subTitle"
                        style={{ color: theme.secondaryText }}
                      >
                        <h1
                          className="address-heading-text"
                          style={{ color: theme.text }}
                        >
                          {" "}
                          {addressSection["title"]}
                        </h1>
                        {addressSection["subtitle"]}
                      </p>
                    </td>
                    <td>
                      <Button
                        text="📄 See my resume"
                        newTab={true}
                        href={greeting.resumeLink}
                        theme={theme}
                        className="portfolio-repo-btn"
                      />
                    </td>
                  </tr>
                </table>
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              src={require(`../../assets/images/homepageimage.webp`)}
              alt={"HomePageImage"}
              style={myHomeSetUpStyles}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
