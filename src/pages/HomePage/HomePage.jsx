import React from 'react';
import { Container, Row } from 'react-bootstrap';
import csilogo from '../../assets/ComingSoonPage/csilogo.png';
import './HomePage.styles.css';
import dataBundle from './data';
import DomainCard from '../../components/card/card';
import Timer from '../../components/timer/timer';

function createCard(data) {
    return (

        <DomainCard
            key={data.id}
            domain={data.domain}
            imgURL={data.imgURL}
        />
    );
}

const HomePage = () => (
    <div className="all">
        <Container>
            <Row className="text-center">
                <div className="mt-5 mx-auto">
                    <a href="https://csivit.com" rel="noreferrer" target="_blank">
                        <img src={csilogo} alt="CSIVIT" className="csi-logo" />
                    </a>
                </div>
                <Timer />
            </Row>
            <Row className="domains">
                <div className="m-auto">
                    <b>Choose your Domain</b>
                </div>
            </Row>
        </Container>
        <Row className="d-flex justify-content-between cards">
            {dataBundle.map(createCard)}
        </Row>
    </div>

);

export default HomePage;
