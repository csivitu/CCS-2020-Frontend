import React from 'react';
import { Container, Row } from 'react-bootstrap';
import csilogo from '../../assets/ComingSoonPage/csilogo.png';

const DiscordPage = () => (
    <div className="all">
        <Container>
            <Row className="text-center">
                <div className="mt-5 mx-auto">
                    <a
                        href="https://csivit.com"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={csilogo} alt="CSIVIT" className="csi-logo" />
                    </a>
                </div>
            </Row>
            <Row className="text-center">
                <div className="mx-auto mt-5">
                    <p className="core-div"><b style={{ fontSize: '7rem' }}>CORE COMMITTEE SELECTIONS</b></p>
                </div>
            </Row>
            <Row className="align-items-center">
                <div className="mx-auto text-center display-3 mt-5">
                    <p className="time-div d-flex justify-content-between">
                        Your ROUND 2 Interview
                        <br />
                        DATE: 20th December 2020
                        <br />
                        Time: 11AM - 12PM
                    </p>
                </div>
            </Row>
        </Container>
    </div>
);

export default DiscordPage;
