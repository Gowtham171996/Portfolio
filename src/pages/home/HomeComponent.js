import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

import { languagecertifications } from "../../portfolio";
import { certifications } from "../../portfolio";
import Certifications from "../../containers/certifications/Certifications";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        {languagecertifications.languagecertifications.length > 0 ? (
          <Certifications
            theme={this.props.theme}
            certificate={{
              certifications: languagecertifications.languagecertifications,
            }}
          />
        ) : null}
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
