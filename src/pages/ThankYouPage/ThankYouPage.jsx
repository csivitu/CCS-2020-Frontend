/* eslint-disable max-len */
import React from 'react';
import { Row, Container } from 'react-bootstrap';
import csilogo from '../../assets/LandingPage/csilogo.png';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import './styles.css';

const ThankYouPage = () => (
    <>
        <Header />
        <div className="all" style={{ height: 'calc(100vh - 120px)' }}>
            <Container className="d-flex flex-column justify-content-around h-100">
                <Row className="text-center">
                    <div className="mb-5 mx-auto">
                        <a
                            href="https://csivit.com"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img
                                src={csilogo}
                                alt="CSIVIT"
                                className="csi-logo"
                            />
                        </a>
                    </div>
                </Row>
                <Row className="text-center mb-5">
                    <h1 className="w-100 yellow">CORE COMMITTEE SELECTIONS</h1>
                </Row>
                <Row className="text-center d-flex flex-column">
                    <h2 className="mb-3">Recruitments have ended</h2>
                    <h3>Thank you for your submissions</h3>
                </Row>
                <Row className="text-center d-flex flex-column">
                    <h5>
                        Stay tuned on our social media handles for further
                        updates
                    </h5>
                </Row>
            </Container>
        </div>
        <Footer />
    </>
);

export default ThankYouPage;
