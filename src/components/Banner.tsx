import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";
import foto from '../assets/images/My image.png';

export const Banner = () => {
   const [loopNum, setLoopNum] = useState(0);
   const [isDeleting, setIsDeleting] = useState(false);
   const toRotate = ["Web Developer"];
   const [text, setText] = useState('');
   const [delta, setDelta] = useState(300 - Math.random() * 100);
   const period = 2000;

   useEffect(() => {
      const ticker = setInterval(() => {
         tick();
      }, delta)

      return () => {clearInterval(ticker)};
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [text])

   const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
         setDelta(prevDelta => prevDelta / 2)
      }
      if (!isDeleting && updatedText === fullText) {
         setIsDeleting(true);
         setDelta(period);
      } else if(isDeleting && updatedText === '') {
         setIsDeleting(false);
         setLoopNum(loopNum + 1);
         setDelta(500);
      }
   }

  return (
    <section className="banner" id="home">   
      <Container>
         <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
               <span className="tagline">
                  Welcome to my Portfolio
               </span>
               <h1>{`Web Developer`}<span className="wrap"></span></h1>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident inventore asperiores quam, fuga nihil mollitia nobis facere eius ipsum quasi doloribus! Ad, ea. Veniam similique voluptatibus eius quaerat molestiae expedita.</p>
               <button onClick={() => console.log('connect')}>Download CV <ArrowDownCircle size={35}/></button>
            </Col>
            <Col xs={12} md={6} xl={5}>
               <img src={foto} alt="Header Img" />
            </Col>
         </Row>
      </Container>
    </section>
  )
}
