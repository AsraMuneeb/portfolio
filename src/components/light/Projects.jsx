import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css'
import circle4 from '../../assets/circle4.png'
import circle from '../../assets/circle.png'
import cross3 from '../../assets/cross3.png'
import square from '../../assets/square.png'
import invent from '../../assets/inventory.mp4'
import logistics from '../../assets/logistics.mp4'
import tic from '../../assets/tic.mp4'
import clone from '../../assets/clone.mp4'
import pc from '../../assets/pc.gif'

const Projects = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('light-in-view');
                    } else {
                        entry.target.classList.remove('light-in-view');
                    }
                });
            },
            { threshold: 0.1 } 
        );

       
        const cards = document.querySelectorAll('.light-card');
        cards.forEach((card) => {
            observer.observe(card);
        });
        
        return () => observer.disconnect();
    }, []);
    return (
        <Container className='light-proj'>
            <img src={circle4} className='light-circle4' alt="" />
            <img src={circle} className='light-circle'alt="" />
            <img src={cross3} className='light-cross3'alt="" />
            <img src={square} className='light-square'alt="" />
            <Row className='light-proj-row'> 
            <Row className='light-h1-title'>
    
     <h1>Projects</h1>

     </Row>

     <div className="light-card" id='light-card1'>
        <video src={logistics} loop autoPlay muted></video>
      <div className="light-card__overlay">
        <div className="light-card__header">
          <div className="light-card__header-text">
            <h2 className="light-card__title">Logistics Management</h2>            
          </div>
        </div>
        <div className="light-card__description">
        <p>Created a responsive UI and built an admin dashboard using HTML, CSS, and Bootstrap, seamlessly integrating with Django and SQLite.</p>
        </div>
      </div>
    </div>   

    <div className="light-card" id='light-card2'>
    <video src={invent} loop autoPlay muted></video>
    <div className="light-card__overlay">
        <div className="light-card__header">
          <div className="light-card__header-text">
            <h2 className="light-card__title">Inventory Management</h2>            
          </div>
        </div>
        <div className="light-card__description">
        <p>Designed and developed the dashboard using PHP, JavaScript, HTML, CSS, and Bootstrap for seamless inventory tracking and management.</p>
        </div>
      </div>
    </div>  
    <div className="light-card" id='light-card3'>
    <video src={clone} loop autoPlay muted></video>
      <div className="light-card__overlay">
        <div className="light-card__header">
          <div className="light-card__header-text">
            <h2 className="light-card__title">Netflix Clone</h2>            
          </div>
        </div>
        <div className="light-card__description">
        <p>Developed a Netflix clone using React.js, HTML, and CSS to
                        replicate the streaming platform's user interface and
                        functionality.</p>
        </div>
      </div>
    </div>  

    <div className="light-card" id='light-card4'>
    <video src={tic} loop autoPlay muted></video>
      <div className="light-card__overlay">
        <div className="light-card__header">
          <div className="light-card__header-text">
            <h2 className="light-card__title">Tic-Tac-Toe</h2>            
          </div>
        </div>
        <div className="light-card__description">
        <p>A classic Tic-Tac-Toe game built using JavaScript, React, HTML, and CSS, featuring a clean UI with responsive interactions and dynamic game logic to track player moves and declare the winner.</p>
        </div>
      </div>
    </div>  

            </Row>

        </Container>

    )
}

export default Projects
