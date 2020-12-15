import React from 'react';
import {
    Container, Row, Col, Button,
} from 'react-bootstrap';
import './LandingPage.styles.css';
import Logo from '../../components/logo';
import illustration from '../../assets/LandingPage/illustration.svg';

const LandingPage = () => (
    <div className="all">
        <Container fluid className="h-100 d-flex flex-column justify-content-around">
            <Logo />
            <Row className="middle d-flex">
                <Col md={6} className="d-flex justify-content-center align-items-center text-center">
                    <div className="core-div text-left">
                        CORE
                        <br />
                        COMMITTEE
                        <br />
                        SELECTIONS
                    </div>

                </Col>
                <Col md={6} className="d-flex justify-content-center flex-column px-4">
                    <div className="text-center w-75">
                        <div className="recruiting text-left">
                            <h1 className="mb-3 red"><strong>We are Recruiting</strong></h1>
                            <h4 className="content mb-4">

                                Be a part of CSI where skilled designers, developers and tech
                                enthusiasts engage in a lot of projects and hackathons,
                                to help push technology forward.

                            </h4>
                        </div>
                    </div>
                    <Button size="lg" className="register">REGISTER</Button>
                </Col>
            </Row>
            <Row className="justify-content-md-center mb-2">
                <h2 className="mx-auto red"><b>ROUND 1 is NOW LIVE.</b></h2>
            </Row>
            <img className="bottom-right" src={illustration} alt="Illustration" />
        </Container>

    </div>
);

export default LandingPage;
