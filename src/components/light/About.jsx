import React from 'react'
import './About.css'
import { Container, Row, Col } from 'react-bootstrap';
import web from '../../assets/web.mp4'
import arrow1 from '../../assets/arrow.png'
import cross from '../../assets/cross.png'
import prop4 from '../../assets/prop4.png'
import circles from '../../assets/circles.png'
import waves1 from '../../assets/waves1.png'
import profile3 from '../../assets/profile3.jpg'




const About = () => {
  return (
    <Container id="light-about" className="light-about-section py-5">
      <img src={arrow1} className='light-prop1' alt="" />
      <img src={circles} className='light-prop3' alt="" />
      <img src={prop4} className='light-prop4' alt="" />
      <img src={cross} className='light-prop2' alt="" />
      <img src={waves1} className='light-prop5' alt="" />
      <video className='light-web' src={web} alt="" loop autoPlay muted/>
      <Row className='light-row-about'>
      <h2>About <br />Me</h2> 
      <Col className='light-vid' >
          {/* <video src={profile} loop autoPlay muted></video> */}
            <img src={profile3} alt="" />
            <div className="light-frame"></div>
        </Col>
        <Col className='light-about-content'>
          <p>
            I am a passionate web developer skilled in both front-end and back-end technologies.
            My expertise lies in creating immersive digital experiences that seamlessly merge creativity with functionality.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default About
