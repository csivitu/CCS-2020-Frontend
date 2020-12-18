/* eslint-disable max-len */
import React from 'react';
import { Row, Container, Button } from 'react-bootstrap';
import csilogo from '../../assets/LandingPage/csilogo.png';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
// import './styles.css';

const RulesPage = () => (
    <>
        <Header />
        <div className="all">
            <Container className="d-flex flex-column justify-content-around h-100">
                <Row className="text-center">
                    <div className="mt-2 mb-5 mx-auto">
                        <a
                            href="https://csivit.com"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src={csilogo} alt="CSIVIT" className="csi-logo" />
                        </a>
                    </div>
                </Row>
                <Row className="text-center mb-5">
                    <h1 className="w-100 yellow">GUIDELINES</h1>
                </Row>
                <Row className="d-flex flex-column">
                    <div className="mb-2">
                        <h5>1. Once the Round 1 for a domain starts, the timer for 30 minutes keeps running in the background even if the page is closed.</h5>
                    </div>
                    <div className="mb-3">
                        <h5>2. The Round 1 for two different domains cannot be attempted simultaneously.</h5>
                    </div>
                    <div className="mb-3">
                        <h5>3. In case of any issues with the website try refreshing the page.</h5>
                    </div>
                    <div className="mb-3">
                        <h5>4. If refreshing the page does not solve the issue, then feel free to contact us at any of our social media handles.</h5>
                    </div>
                    <div className="mb-3">
                        <h5>
                            5. To know more about our reqruitment proces
                            {' '}
                            <a href="https://chat.whatsapp.com/Cwh9VDjGeWC5wRf84CwwID" target="_blank" rel="noreferrer" className="yellow">Join Here</a>
                            .
                        </h5>
                    </div>
                </Row>
                <Row className="text-center pb-3">
                    <a href="/domains" className="m-auto"><Button className="discord-button yellow px-4 py-3">GET STARTED</Button></a>
                </Row>
            </Container>
        </div>
        <Footer />
    </>
);

export default RulesPage;
