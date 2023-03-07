import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles.css';
import Corie from '../Corie.png';

function AboutBand() {
    return (
      <Container fluid={true}>
        <Row className='quad-band-row'>
          <Col md={6} className='top-padding dark-blue-background'>
            <h2 className='body-copy-bold-cream'>Our story</h2>
            <p className='body-copy-cream'>Wallen-Douglas Digital was founded by a seasoned digital marketing and design professional with over a decade of experience in the SaaS and big tech industries.</p>
            <p className='body-copy-cream'>Driven by a passion for building and optimizing web properties, the founder opened Wallen-Douglas Digital in 2022 with the goal of providing top-notch digital marketing services to businesses of all sizes.</p>
            <p className='body-copy-cream'>With a wealth of knowledge and experience, Wallen-Douglas Digital is committed to helping businesses reach their full potential online and achieve their goals.</p>
          </Col>
          <Col md={6} className='top-padding light-blue-background'>
            <h2 className='body-copy-bold-red'>Our approach</h2>
            <p className='body-copy-red'>Wallen-Douglas Digital is a full-service digital marketing agency specializing in digital strategy & SEO.</p>
            <p className='body-copy-red'>We partner with clients to align their online efforts with their business goals, creating a roadmap for success. With a strong emphasis on user experience, we create websites that are intuitive and easy to use, providing a seamless experience for visitors. </p>
            <p className='body-copy-red'>By combining digital strategy and UX design, Wallen-Douglas Digital delivers a comprehensive approach to web optimization that drives results and helps businesses succeed online.</p>
          </Col>
        </Row>
        <Row className='quad-band-row'>
        <Col md={6} className='quad-band-img-col'>
            <img src={Corie} alt='Photo of Founder & CEO' className='quad-band-img'/>
          </Col>
          <Col md={6} className='top-padding cream-background'>
            <h2 className='body-copy-bold-blue fifty-top-margin'>Corie Wallen-Douglas</h2>
            <p className='body-copy-regular-blue'>Meet Corie Wallen-Douglas, a seasoned marketing and design professional with over a decade of experience in the industry. Corie's passion for improving website results has driven their success throughout their career, and has culminated in the founding of Wallen-Douglas Digital. </p>
            <p className='body-copy-regular-blue'>With a wealth of knowledge and experience in marketing, design, and optimization, Corie is dedicated to helping businesses achieve their goals and reach their full potential online.</p>
          </Col>
        </Row>  
      </Container>
    );
  }

export default AboutBand;