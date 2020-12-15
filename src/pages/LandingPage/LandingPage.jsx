import React from 'react';
import {
    Container, Row, Col, Button,
} from 'react-bootstrap';
import './LandingPage.styles.css';
import csilogo from '../../assets/ComingSoonPage/csilogo.png';
import illustration from '../../assets/LandingPage/illustration.svg';

const LandingPage = () => (
    <div className="all">
        <Container fluid className="h-100 d-flex flex-column justify-content-around">
            <Row className="text-center">
                <div className="mt-5 mx-auto">
                    <a href="https://csivit.com" rel="noreferrer" target="_blank">
                        <img src={csilogo} alt="CSIVIT" className="csi-logo" />
                    </a>
                </div>
            </Row>
            <Row className="middle d-flex">
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <div className="core-div">
                        CORE
                        <br />
                        COMMITTEE
                        <br />
                        SELECTIONS
                    </div>

                </Col>
                <Col md={6} className="d-flex align-items-center px-4">
                    <div className="m-auto">
                        <div className="recruiting">
                            <h1 className="mb-3"><strong>We are Recruiting</strong></h1>
                            <h4 className="content mb-4">

                                Be a part of CSI where skilled designers, developers and tech
                                enthusiasts engage in a lot of projects and hackathons,
                                to help push technology forward.

                            </h4>
                        </div>

                        <Button size="lg" className="register">REGISTER</Button>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center mb-5">
                <h1 className="mx-auto"><b>ROUND 1 is NOW LIVE.</b></h1>
            </Row>
            <img className="bottom-right" src={illustration} alt="Illustration" />
        </Container>

    </div>
);

export default LandingPage;
