import React from 'react';
import { Row, Container, Button } from 'react-bootstrap';
import csilogo from '../../assets/LandingPage/csilogo.png';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import './styles.css';

const SelectedPage = () => (
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
                    <h1 className="w-100 yellow">CORE COMMITTEE SELECTIONS</h1>
                </Row>
                <Row className="text-center d-flex flex-column">
                    <div className="mb-3">
                        <h3 className="w-100">
                            Your
                            {' '}
                            <b style={{ color: 'orangered' }}>ROUND 2</b>
                            {' '}
                            Interview is Scheduled At
                        </h3>
                    </div>
                    <div className="mb-5">
                        <h3 className="w-100">
                            <b className="yellow">DATE</b>
                            : 20th DECEMBER 2020
                        </h3>
                        <h3 className="w-100">
                            <b className="yellow">TIME</b>
                            : 11 AM - 12 PM
                        </h3>
                    </div>
                </Row>
                <Row className="text-center pb-3">
                    <h2 className="w-100 mb-4">Join us on Discord for your Interview</h2>
                    <a href="csivit.com" className="m-auto"><Button className="discord-button yellow px-4 py-3">DISCORD LINK</Button></a>
                </Row>
            </Container>
        </div>
        <Footer />
    </>
);

export default SelectedPage;
