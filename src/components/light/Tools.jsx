
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logoBoot from '../../assets/logo-boot.png';
import logoCss from '../../assets/logo-css.png';
import logoHtml from '../../assets/logo-html.gif';
import logoJs from '../../assets/logo-js.png';
import logoPython from '../../assets/logo-python.gif';
import logoReact from '../../assets/logo-react.png';
import logoSql from '../../assets/logo-sql.png';
import pc1 from '../../assets/pc1.png';
import wind from '../../assets/wind.png';
import Bar from './Bar.jsx'
import circle1 from '../../assets/circle1.png';
import sqr from '../../assets/sqr.png';
import cross2 from '../../assets/cross2.png';
import circle2 from '../../assets/circle2.png';

import './Tools.css'

const Tools = () => {
  return (
      <Container className='light-main'>
        <img src={circle1} className='light-circle1' alt="" />
        <img src={sqr} className='light-sqr' alt="" />
        <img src={cross2} className='light-cross2' alt="" />
        <img src={circle2} className='light-circle2' alt="" />
        <Row className='light-title'><h1>Technical <br />Skills</h1></Row>
        <Row className='light-row1'>
          <Col className='light-col2'>
            <Bar strImage={logoHtml} skillName='HTML' prog={70}></Bar>
            <Bar strImage={logoCss} skillName='CSS' prog={70}></Bar>
            <Bar strImage={logoJs} skillName='javaScript' prog={70}></Bar>
            <Bar strImage={logoReact} skillName='React' prog={60}></Bar>
            <Bar strImage={logoBoot} skillName='Bootstrap' prog={50}></Bar>
            <Bar strImage={logoPython} skillName='Python' prog={80}></Bar>
            <Bar strImage={logoSql} skillName='SQL' prog={70}></Bar>
            <Bar strImage={logoSql} skillName='Figma' prog={50}></Bar>
          </Col>
          <Col className='light-col1'> 
          <div className="light-frame1"></div>
          <img src={pc1} className='light-pc' alt="" />
          <div className="light-image3"><img src={wind} className='light-wind' alt="" /></div>
          </Col>
        </Row>
      </Container>

  )
}

export default Tools
