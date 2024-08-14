import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Mi Primer Portafolio Web",
      description: "Diseñado en html, css, javascript y bootstrap",
      imgUrl: projImg1,
      link: "https://main--williams-estrada.netlify.app/#educacion"
    },
    {
      title: "Software Hoja De Servicio SSPC",
      description: "Deseñado con java desing y MySql",
      imgUrl: projImg2,
      link: "https://github.com/williams-estrada/williams-estrada.github.ioSanjuan"
    },
    {
      title: "Encriptador De Texto Del Programa One Oracle",
      description: "Deseñadp cpn html y javascript",
      imgUrl: projImg3,
      link: "https://williams-estrada.github.io/williams-estrada.github.ioCodificador/"
    },
    {
      title: "Gestor de Auditorias DIPRIS",
      description: "Diseñado con Laravel 10, Html, Css, JavaScript y Bootstrap 5",
      imgUrl: projImg4,
      link: "https://github.com/williams-estrada/Gestor-De-Auditorias-Dipris"
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>En esta sección, pueden visualizar los proyectos que he realizado, tanto académicos como profesionales. Estos incluyen trabajos de programación y efectos visuales, desarrollados durante mi formación y experiencia laboral.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Col key={index} sm={6} md={4}>
                                <ProjectCard
                                  {...project}
                                />
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
