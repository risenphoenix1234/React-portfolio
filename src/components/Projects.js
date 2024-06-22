import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  // const projects = [
  //   {
  //     title: "Spotify-Clone",
  //     description:
  //       "Spotify clone built using ReactJS and Tailwind CSS. This app allows users to play music, and seamlessly navigate between songs with next and previous track controls.",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg1,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //   },
  //   // {
  //   title: "Business Startup",
  //   description: "Design & Development",
  //   imgUrl: projImg1,
  // },
  // {
  //   title: "Business Startup",
  //   description: "Design & Development",
  //   imgUrl: projImg2,
  // },
  // {
  //   title: "Business Startup",
  //   description: "Design & Development",
  //   imgUrl: projImg3,
  // },
  // ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects.</h2>
                  <p>
                    Following projects showcases my skills and experience
                    through real-world examples of my work. Each project is
                    briefly described with links to code repositories and live
                    demos in it. It reflects my ability to solve complex
                    problems, work with different technologies, and manage
                    projects effectively.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Pojects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Network</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div class="work-experience">
                          <div class="jobs-container">
                            <div class="job job1">
                              <img
                                src="/images/carrent.png"
                                alt="Company 1 Logo"
                              />
                              <div class="job-details">
                                <h3>Crypto Price Tracker</h3>
                                <ul class="custom-h6">
                                  <li>
                                    Crypto Price Tracker built using ReactJS and
                                    the CoinGecko API. This app allows users to
                                    track the real-time prices of various
                                    cryptocurrencies. It provides up-to-date
                                    information on market trends, price changes,
                                    and detailed statistics for different
                                    cryptocurrencies, enabling users to make
                                    informed investment decisions.
                                  </li>
                                </ul>
                                <div class="colorful">
                                  <span>#react</span>
                                  <span>#tailwind</span>
                                </div>
                              </div>
                            </div>
                            <div class="job job2">
                              <img
                                src="/images/tripguide.png"
                                alt="Company 2 Logo"
                              />
                              <div class="job-details">
                                <h3>Wordpress Developer</h3>
                                <h4>IP-Lady Healthcare</h4>
                                <ul class="custom-h6">
                                  <li>
                                    Creating and customizing themes and plugins
                                    for iPlady's WordPress websites to enhance
                                    functionality and appearance.
                                  </li>
                                  <li>
                                    Regularly updating WordPress core, themes,
                                    and plugins, troubleshooting issues, and
                                    optimizing website performance to ensure
                                    iPlady's sites are secure, efficient, and
                                    user-friendly.
                                  </li>

                                  <li>
                                    Managing iPlady's website content,
                                    implementing SEO best practices, and
                                    collaborating with the marketing team to
                                    improve search engine rankings and drive
                                    organic traffic to the company's sites.
                                  </li>
                                </ul>
                                <div class="colorful">
                                  <span>#react</span>
                                  <span>#tailwind</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div class="work-experience">
                          <h7 class="exp">WHAT I HAVE DONE SO FAR</h7>
                          <h2>Work Experience</h2>
                          <div class="jobs-container">
                            <div class="job job1">
                              <img
                                src="/images/meta.png"
                                alt="Company 1 Logo"
                              />
                              <div class="job-details">
                                <h3>React.js Developer</h3>
                                <h4>DispatchaHq</h4>
                                <ul class="custom-h6">
                                  <li>
                                    Building and managing web applications with
                                    React.js and related technologies.
                                  </li>
                                  <li>
                                    Working alongside designers, product
                                    managers, and other developers to develop
                                    high-quality products.
                                  </li>

                                  <li>
                                    Ensuring responsive design and cross-browser
                                    compatibility.
                                  </li>
                                </ul>
                                March 2023 - December 2023
                              </div>
                            </div>
                            <div class="job job2">
                              <img
                                src="/images/tripguide.png"
                                alt="Company 2 Logo"
                              />
                              <div class="job-details">
                                <h3>Wordpress Developer</h3>
                                <h4>IP-Lady Healthcare</h4>
                                <ul class="custom-h6">
                                  <li>
                                    Creating and customizing themes and plugins
                                    for iPlady's WordPress websites to enhance
                                    functionality and appearance.
                                  </li>
                                  <li>
                                    Regularly updating WordPress core, themes,
                                    and plugins, troubleshooting issues, and
                                    optimizing website performance to ensure
                                    iPlady's sites are secure, efficient, and
                                    user-friendly.
                                  </li>

                                  <li>
                                    Managing iPlady's website content,
                                    implementing SEO best practices, and
                                    collaborating with the marketing team to
                                    improve search engine rankings and drive
                                    organic traffic to the company's sites.
                                  </li>
                                </ul>
                                <h6>Jan 2023 - Present</h6>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <div></div> */}

                        <div class="work-experience">
                          <div class="jobs-container">
                            <div class="job job1">
                              <img
                                src="/images/shopify.png"
                                alt="Company 1 Logo"
                              />
                              <div class="job-details">
                                <h3>Graphic Designer</h3>
                                <h4>Alivee.co</h4>
                                <ul class="custom-h6">
                                  <li>
                                    Designing and producing visual content such
                                    as logos, banners, infographics, and
                                    marketing materials that align with Alivee's
                                    brand identity and objectives.
                                  </li>
                                  <li>
                                    Enhancing and maintaining Alivee's brand
                                    identity through consistent design elements,
                                    ensuring a cohesive and professional look
                                    across all platforms.
                                  </li>

                                  <li>
                                    Working with the marketing team to develop
                                    graphics for advertising campaigns, social
                                    media posts, and promotional materials,
                                    enhancing the overall effectiveness of
                                    Alivee's marketing efforts.
                                  </li>
                                </ul>
                                <h6>Jan 2022 - Present</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div class="social-media">
                          <h2>Reach out to me on social media</h2>
                          <div class="social-icons">
                            <a
                              href="https://www.instagram.com/hr_atk_"
                              target="_blank"
                            >
                              <i class="fab fa-instagram"></i>
                            </a>
                            <a
                              href="https://wa.me/2347062503012?text=Hi%20Dev%20Harun,%20I%20am%20from%20your%20portfolio%20my%20WhatsApp%20number%20is%20+2347062503012"
                              target="_blank"
                            >
                              <i class="fab fa-whatsapp"></i>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/suleiman-haruna-13a22a217/"
                              target="_blank"
                            >
                              <i class="fab fa-linkedin"></i>
                            </a>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
