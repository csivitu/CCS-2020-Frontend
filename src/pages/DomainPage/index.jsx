import React from 'react';
import { Container, Row } from 'react-bootstrap';
import csilogo from '../../assets/ComingSoonPage/csilogo.png';
import './styles.css';
import dataBundle from './data';
import DomainCard from '../../components/card/card.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

function createCard(data) {
    return (
        <DomainCard key={data.id} domain={data.domain} imgURL={data.imgURL} />
    );
}

const HomePage = () => (
    <>
        <Header />
        <div className="all">
            <Container>
                <Row className="text-center">
                    <div className="mt-3 mx-auto">
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
                <Row className="domains">
                    <div className="mx-auto mt-3">
                        <b>Choose your Domain</b>
                    </div>
                </Row>
            </Container>
            <Row className="d-flex justify-content-between cards mx-auto">
                <div className="mx-auto mt-5">
                    <Row>{dataBundle.map(createCard)}</Row>
                </div>
            </Row>
        </div>
        <Footer />
    </>
);

export default HomePage;
