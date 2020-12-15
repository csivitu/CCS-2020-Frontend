import React from 'react';
import {
    Container, Row, Col, Button,
} from 'react-bootstrap';
import './LandingPage.styles.css';
import csilogo from '../../assets/ComingSoonPage/csilogo.png';
import illustration from '../../assets/LandingPage/illustration.svg';

const LandingPage = () => (
    <div className="all">
        <Container>
            <Row className="text-center">
                <div className="mt-5 mx-auto">
                    <a href="https://csivit.com" rel="noreferrer" target="_blank">
                        <img src={csilogo} alt="CSIVIT" className="csi-logo" />
                    </a>
                </div>
            </Row>
            <Row className="middle d-flex">
                <Col className="text-div d-flex justify-content-center align-items-center">
                    CORE
                    <br />
                    COMMITTEE
                    <br />
                    SELECTIONS
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <div>
                        <div className="recruiting d-flex-column justify-content-space-around">
                            <h1><b>We are Recruiting</b></h1>
                            <h4 className="content">

                                Be a part of CSI where skilled designers, developers and tech
                                <br />
                                enthusiasts engage in a lot of projects and hackathons,
                                <br />
                                to help push technology forward.

                            </h4>
                        </div>

                        <Button size="lg" className="register">REGISTER</Button>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center bottom">
                <h1 className="mx-auto"><b>ROUND 1 is NOW LIVE.</b></h1>
            </Row>
            <img className="bottom-right" src={illustration} alt="Illustration" />
        </Container>

    </div>
);

export default LandingPage;
