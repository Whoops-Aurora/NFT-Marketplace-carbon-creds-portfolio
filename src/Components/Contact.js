import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;
    const message = this.props.data.contactmessage;
    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <div class="header2">
              <h2 style={{ color: 'white' }}>Conclusion</h2>
              <p style={{ color: 'white' }}>
              The Carbon Credit Marketplace DApp represents a significant step towards achieving responsible consumption and the conservation of natural resources, aligning with SDG Goal 12: Responsible Consumption and Production. By leveraging the power of blockchain technology, this platform provides a transparent, secure, and efficient way to promote tree planting and carbon credit trading
              </p>
              <h2 style={{ color: 'white' }}>Key takeaways:</h2>
              <p style={{ color: 'white' }}>
                <ol>
                  <li><strong style={{ textDecoration: 'underline' }}>Environmental Impact</strong>: The DApp incentivizes individuals and organizations to plant trees and participate actively in combating climate change. Each tree planted contributes to carbon sequestration, biodiversity conservation, and ecosystem restoration</li>
                  <li><strong style={{ textDecoration: 'underline' }}>Economic Benefits</strong>: By creating a marketplace for tree NFTs and carbon credits, the platform offers economic incentives for users to engage in sustainable practices. This approach not only rewards tree planters but also provides a means for individuals and companies to offset their carbon footprint effectively.</li>
                  <li><strong style={{ textDecoration: 'underline' }}>Transparency and Trust</strong>: Blockchain technology ensures that all transactions related to tree planting, carbon credit assignment, and trading are recorded immutably. This transparency builds trust among users, as they can verify the authenticity and impact of their contributions</li>
                  <li><strong style={{ textDecoration: 'underline' }}>Community Engagement</strong>: The DApp fosters a community of environmentally conscious users who are motivated to make a positive impact on the planet. This community-driven approach enhances collective action towards sustainability goals</li>
                  <li><strong style={{ textDecoration: 'underline' }}>Scalability and Flexibility</strong>: The platform is designed to scale, accommodating a growing number of users and transactions. Additionally, it is flexible enough to incorporate future enhancements, such as integrating more tree species, expanding to other forms of natural resource conservation, and implementing advanced carbon credit calculation methods</li>
                </ol>
              </p>
              </div>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Future Directions</h4>
                <p className="address">
                 <ol>
                 <li><strong style={{textDecoration: 'bold'}}>Global Expansion</strong>: Extend the platform's reach to include users from around the world, promoting global participation in tree planting and carbon credit trading</li>
                 <li><strong style={{textDecoration: 'bold'}}>Partnerships</strong>: Collaborate with environmental organizations, governments, and corporate entities to enhance the platform's impact and credibility</li>
                 <li><strong style={{textDecoration: 'bold'}}>Advanced Features</strong>: Incorporate new features such as AI-driven tree growth monitoring, automated carbon credit adjustments, and gamification elements to increase user engagement</li>
                 </ol>
                </p>
              </div>

              <div className="widget widget_tweets">
                <h4 className="widget-title">Project by students of <br/><strong style={{textDecoration: 'underline' ,textDecorationColor: 'Highlight'}}>KLE TECHNOLOGICAL UNIVERSITY</strong></h4>
                <ul id="twitter">
                  <li>
                    <span>
                      We Would like to thank our guide Manjula Pawar and HoD of CSE Dr. Vijayalakshmi M Mam for their constant support and guidance...<br/>
                      <a href="https://www.kletech.ac.in/">KLE TECHNOLOGICAL UNIVERSITY Website</a>
                    </span>
                  </li>
                  <li>
                  </li>
                </ul>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
