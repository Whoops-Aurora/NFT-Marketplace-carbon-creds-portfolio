import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic1 = "images/" + this.props.data.image1;
    const profilepic2 = "images/" + this.props.data.image2;
    const profilepic3 = "images/" + this.props.data.image3;
    const profilepic4 = "images/" + this.props.data.image4;
    const bio = this.props.data.bio;
    //const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
            <img
                className="profile-pic"
                src={"https://media.licdn.com/dms/image/D5603AQHCeXQoNwPnmw/profile-displayphoto-shrink_100_100/0/1678472249836?e=1724284800&v=beta&t=rFA32zQmqIbXXFpn_eWKweadHZ-1_9KTxGxy2IaOxFc" || profilepic1}
                alt="Adwait"
              />
              <img
                className="profile-pic"
                src={"https://media.licdn.com/dms/image/D4E03AQF5ZZ7kr0uvxg/profile-displayphoto-shrink_100_100/0/1694938907840?e=1724284800&v=beta&t=feSgeCprfbPl8MBIugto7N5CMvdWTSPU0vbcmFxWgeQ" || profilepic2}
                alt="Poorva"
              />
              <img
                className="profile-pic"
                src={"https://media.licdn.com/dms/image/D5635AQG97OiGfMJ0Sg/profile-framedphoto-shrink_400_400/0/1718630327259?e=1719237600&v=beta&t=A7dlOWi6p3hS4FxIDQBGKoz7I3A5TQrvI2PM4raFG2c" || profilepic3}
                alt="Amaan"
              />
              <img
                className="profile-pic"
                src={"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" || profilepic4}
                alt="Shubhashree"
              />
            </div>
            <div className="nine columns main-col">
              <h2>Problem Statement:</h2>
              <h4>Responsible Consumption and Conservation of Natural Resources... SDG 12.2</h4>
              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Context:</h2>
                  <p className="address">
                    <span>
                    Forests play a critical role in the Earth's ecosystem by providing habitats for wildlife, maintaining the water cycle, and acting as carbon sinks to mitigate climate change. However, deforestation and forest degradation continue at alarming rates, leading to the loss of these essential services. One of the ways to address this challenge is to encourage individuals and organizations to participate in tree planting initiatives and reward them for their contributions to carbon sequestration
                    </span>
                    <br/>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                  <h2>Solution</h2>
                    <span>
                    Develop a decentralized application <mark>(DApp)</mark> using blockchain technology to create a marketplace for tree-based NFTs (Non-Fungible Tokens). Each NFT represents a planted tree, including its picture, species, location (latitude and longitude), age, and the amount of carbon credits it holds. By leveraging blockchain, this solution ensures transparency, traceability, and security in managing and trading these NFTs.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
