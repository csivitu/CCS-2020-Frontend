import React from 'react';
import {
    Container, Row, Col, Button,
} from 'react-bootstrap';
import './HomePage.styles.css';
import csilogo from '../../assets/ComingSoonPage/csilogo.png';

const HomePage = () => (
    <>

        <Container fluid>

            <Row className="text-center">
                <div className="mt-5 mx-auto">
                    <a href="https://csivit.com" rel="noreferrer" target="_blank">
                        <img src={csilogo} alt="CSIVIT" className="csi-logo" />
                    </a>
                </div>
            </Row>
            <Row className="middle">
                <Col className="text-div justify-content-center">
                    CORE
                    <br />
                    COMMITTE
                    {' '}
                    <br />
                    SELECTIONS
                    {' '}
                    <br />
                </Col>
                <Col className="justify-content-left">
                    <div>
                        <div className="text-div">
                            <h1><b>We are Recruiting</b></h1>
                            <h4 className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                <br />
                                {' '}
                                elit.
                                Justo dolor sed etiam sit.
                                Integer scelerisque eu,
                                {' '}
                                <br />
                                tellus velit hac auctor tempor eget.
                                Volutpat
                                <br />
                                {' '}
                                egestas nunc, dolor, massa convallis
                            </h4>
                        </div>

                        <Button size="lg" className="register">REGISTER</Button>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center bottom">
                <h1><b>ROUND 1 is NOW LIVE.</b></h1>
            </Row>

        </Container>

    </>
);

export default HomePage;
