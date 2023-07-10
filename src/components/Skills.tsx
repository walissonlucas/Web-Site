import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/images/color-sharp.png";
import icon1 from '../assets/images/angular-icon.svg';
import icon2 from '../assets/images/react-logo.svg';
import icon3 from '../assets/images/nodejs-icon.svg';
import icon4 from '../assets/images/css-3.svg';
import icon5 from '../assets/images/html-.svg';
import icon6 from '../assets/images/js-.svg';
import icon7 from '../assets/images/typescript-icon.svg';
import icon8 from '../assets/images/python-.svg';

export const Skills = () => {
   const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
      <section className="skill" id="skills">
         <Container>
            <Row>
               <Col>
                  <div className="skill-bx">
                     <h2>
                        Skills
                     </h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam mollitia recusandae explicabo quisquam inventore ipsam? Unde quis animi quam veniam aliquid atque eius, maiores expedita repellat in deleniti earum?</p>
                     <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                           <img src={icon1} alt="Image" />
                           <h5>Web Development</h5>
                        </div>
                        <div className="item">
                           <img src={icon2} alt="Image" />
                           <h5>Web Development</h5>
                        </div>
                        <div className="item">
                           <img src={icon3} alt="Image" />
                           <h5>Web Development</h5>
                        </div>
                        <div className="item">
                           <img src={icon4} alt="Image" />
                           <h5>Web Development</h5>
                        </div>
                        <div className="item">
                           <img src={icon5} alt="Image" />
                           <h5>Web Development</h5>
                        </div>
                        <div className="item">
                           <img src={icon6} alt="Image" />
                           <h5>Web Development</h5>
                        </div>
                        <div className="item">
                           <img src={icon7} alt="Image" />
                           <h5>Web Development</h5>
                        </div>
                        <div className="item">
                           <img src={icon8} alt="Image" />
                           <h5>Web Development</h5>
                        </div>
                     </Carousel>
                  </div>
               </Col>
            </Row>
         </Container>
         <img className="background-image-left" src={colorSharp} />
      </section>
    )
}
