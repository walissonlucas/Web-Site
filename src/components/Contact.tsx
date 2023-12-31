import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../assets/images/contact_personal.svg';

export const Contact = () => {

   const formInitialDetails = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
   }

   const [formDetails, setFormDetails] = useState(formInitialDetails);
   const [buttonText, setButtonText] = useState('Send');
   const [status, setStatus] = useState({});
   const onFormUptade = (category: any, value: any) => {
      setFormDetails({
         ...formDetails,
         [category]: value
      })
   }

  return (
    <section className="contact" id="connect">
      <Container>
         <Row className="align-items-center">
            <Col md={6}>
               <img src={contactImg} alt="Contact Us" />
            </Col>
            <Col md={6}>
               <h2>Get In Touch</h2>
               <form>
                  <Row>
                     <Col sm={6} className="px-1">
                        <input 
                        type="text" 
                        value={formDetails.firstName} 
                        placeholder="First Name"
                        onChange={(e) => onFormUptade('firstName', e.target.value)}
                        />
                     </Col>
                  </Row>
               </form>
            </Col>
         </Row>
      </Container>
    </section>
  )
}
