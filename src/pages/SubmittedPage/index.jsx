/* eslint-disable max-len */
import React from 'react';
import { Row, Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import csilogo from '../../assets/LandingPage/csilogo.png';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import './styles.css';

const SubmittedPage = () => {
    const history = useHistory();
    const handleContinue = () => {
        history.push('/domains');
    };
    return (
        <>
            <Header />
            <div className="all">
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
                        <h2 className="mb-3">Your responses have been submitted</h2>
                        <h3>Stay tuned to get further updates</h3>
                    </Row>
                    <Row className="text-center d-flex justify-content-center align-items-center flex-column">
                        <Button
                            className="submit-button px-3"
                            style={{
                                width: '10rem',
                                height: '3rem',
                                fontSize: '1.5rem',
                            }}
                            onClick={handleContinue}
                        >
                            CONTINUE
                        </Button>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default SubmittedPage;
