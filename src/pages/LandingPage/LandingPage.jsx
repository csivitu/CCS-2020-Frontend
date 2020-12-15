import React from 'react';
import {
    Container, Row, Col, Button,
} from 'react-bootstrap';
import './LandingPage.styles.css';
import Logo from '../../components/logo';
import illustration from '../../assets/LandingPage/illustration.svg';

const LandingPage = () => (
    <Container fluid className="d-flex flex-column justify-content-between all">
        <Logo />
        <Row className="middle d-flex">
            <Col sm={6} className="d-flex justify-content-center align-items-center text-center">
                <div className="core-div text-left">
                    CORE
                    <br />
                    COMMITTEE
                    <br />
                    SELECTIONS
                </div>

            </Col>
            <Col sm={6} className="d-flex justify-content-center flex-column px-4">
                <div className="text-center">
                    <div className="recruiting text-left mx-auto">
                        <h1 className="mb-3 red"><strong>We are Recruiting</strong></h1>
                        <h4 className="content mb-4">

                            Be a part of CSI where skilled designers, developers and tech
                            enthusiasts engage in a lot of projects and hackathons,
                            to help push technology forward.

                        </h4>
                        <Button size="lg" className="register">REGISTER</Button>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className="justify-content-md-center mb-2">
            <h2 className="mx-auto red"><b>ROUND 1 is NOW LIVE.</b></h2>
        </Row>
        <img className="bottom-right" src={illustration} alt="Illustration" />
    </Container>
);

export default LandingPage;
