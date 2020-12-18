import React from 'react';
import {
    Container, Row, Col, Button,
} from 'react-bootstrap';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './LandingPage.styles.css';
import Logo from '../../components/logo';
import illustration from '../../assets/LandingPage/illustration.svg';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
// import Timer from '../../components/timer';

const LandingPage = (props) => {
    const history = useHistory();
    const { loggedIn, notAllowed, verified } = props;
    return (
        <>
            <Header />
            <Container
                fluid
                className="d-flex flex-column justify-content-between all"
            >
                <Logo />
                <Row className="middle d-flex">
                    <Col
                        sm={6}
                        className="d-flex justify-content-center align-items-center text-center"
                    >
                        <div className="core-div text-left">
                            <strong>
                                CORE
                                <br />
                                COMMITTEE
                                <br />
                                SELECTIONS
                            </strong>
                        </div>
                    </Col>
                    <Col
                        sm={6}
                        className="d-flex justify-content-center flex-column px-4"
                    >
                        <div className="text-center">
                            <div className="recruiting text-left mx-auto">
                                <h1 className="mb-3 yellow">
                                    <strong>We are Recruiting</strong>
                                </h1>
                                <h4 className="content mb-4">
                                    Be a part of CSI where skilled designers,
                                    developers and tech enthusiasts engage in a
                                    lot of projects and hackathons, to help push
                                    technology forward.
                                </h4>
                                {loggedIn || (
                                    <Button
                                        size="lg"
                                        className="register"
                                        onClick={() => history.push('/login')}
                                    >
                                        REGISTER
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-2">
                    <h2 className="mx-auto yellow text-center">
                        <b>
                            {(() => {
                                if (!verified) {
                                    return 'Please verify your email to continue.';
                                }
                                const r = () => {
                                    if (loggedIn) {
                                        history.push('/domains');
                                    }
                                    return '';
                                };
                                return notAllowed
                                    ? 'Registration failed! CCS by CSI-VIT is only for freshers.'
                                    : r();
                            })()}
                        </b>
                    </h2>
                </Row>
                <img
                    className="bottom-right"
                    src={illustration}
                    alt="Illustration"
                />
            </Container>
            <Footer />
        </>
    );
};

LandingPage.propTypes = {
    loggedIn: propTypes.bool,
    notAllowed: propTypes.bool,
    verified: propTypes.bool,
};

LandingPage.defaultProps = {
    loggedIn: false,
    notAllowed: false,
    verified: true,
};

export default LandingPage;
