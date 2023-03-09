import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SEO1 from '../../images/SEO1.png';

function WhatIsSEO() {
    return (
      <Container fluid={true} className="what-is-band">
        <Row className="what-is-band-row">
          <Col md={6} className='top-padding cream-background'>
            <h2 className="body-copy-bold-blue">What is search engine optimization (SEO)?</h2>
            <p className="body-copy-regular-blue">SEO (Search Engine Optimization) focuses on improving the relevance and usability of a website's content to both users and search engines. This involves understanding the target audience and developing helpful, relevant content that will meet their needs, all with the goal of increasing visibility and ranking on search engines like Google.</p>
            <h2 className="body-copy-bold-blue">Why is it important?</h2>
            <p className="body-copy-regular-blue">In today's digital landscape, SEO is essential for businesses as it helps to increase online visibility and reach the target audience. It is a crucial component of a comprehensive digital strategy, enabling businesses to establish their online presence, drive organic traffic to their website, and compete in a crowded online marketplace.</p>
          </Col>
          <Col md={6} className="what-is-img-col">
            <img src={SEO1} alt='iPhone on a wooden stump table, example work for TaxJar is on the screen, two hands holding airpods down on each side of the phone' className='what-is-img'/>
          </Col>
        </Row>
      </Container>
    );
  }

export default WhatIsSEO;