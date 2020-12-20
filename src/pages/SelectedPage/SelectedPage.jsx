import React from 'react';
import { Row, Container, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import csilogo from '../../assets/LandingPage/csilogo.png';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import './styles.css';

const SelectedPage = () => {
    const slot = useSelector((state) => state.user.slot);
    const discordLink = useSelector((state) => state.user.discordLink);

    if (!slot) {
        return <Redirect to="/slot" />;
    }

    return (
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
                                :
                                {' '}
                                {slot.split(', ')[0].replace(/dec/ig, 'december').toUpperCase()}
                            </h3>
                            <h3 className="w-100">
                                <b className="yellow">TIME</b>
                                :
                                {' '}
                                {slot.split(', ')[1]}
                            </h3>
                        </div>
                    </Row>
                    <Row className="text-center pb-3">
                        <h2 className="w-100 mb-4">Join us on Discord for your interview.</h2>
                        <h3 className="w-100 mb-4">
                            Here&apos;s the invite link:
                            {' '}
                            <a href={discordLink} className="yellow">{discordLink}</a>
                        </h3>
                        <h5 className="mx-auto w-100 text-center mb-4">
                            Note: Only 1 discord account can use this link to join the server.
                        </h5>
                        <a
                            href={discordLink}
                            className="m-auto"
                        >
                            <Button className="discord-button yellow px-4 py-3">DISCORD LINK</Button>
                        </a>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default SelectedPage;
