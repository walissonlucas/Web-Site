import { Carousel, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/images/color-sharp2.png';
import projImg1 from '../assets/images/My image.png';
import projImg2 from '../assets/images/My image.png';
import projImg3 from '../assets/images/My image.png';

export const Projects = () => {

   const projects = [
      {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: projImg1,
      },
      {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: projImg2,
      },
      {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: projImg3,
      },
      {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: projImg1,
      },
      {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: projImg2,
      },
   ];

  return (
     <section className="project" id="project">
         <Container>
            <Row>
               <Col>
                  <h2>Projects</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut cum veritatis obcaecati quaerat similique, cumque excepturi incidunt ut pariatur dolores necessitatibus error. Nam quod, a maiores debitis explicabo magni?</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                     <Carousel className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" variant="pills">
                        <Nav.Item>
                           <Nav.Link eventKey="first"></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="second" disabled></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="third" disabled></Nav.Link>
                        </Nav.Item>
                        <Tab.Content>
                           <Tab.Pane eventKey="first">
                              <Row>
                                 {
                                    projects.map(( project, index ) => {
                                       return (
                                          <ProjectCard 
                                             key={index}
                                             {...project}
                                          />
                                       )
                                    })
                                 }
                              </Row>
                           </Tab.Pane>
                           <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                           <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                        </Tab.Content>
                     </Carousel>
                  </Tab.Container>
               </Col>
            </Row>
         </Container>
         <img className="background-image-right" src={colorSharp2}></img>
     </section> 
   )
}
