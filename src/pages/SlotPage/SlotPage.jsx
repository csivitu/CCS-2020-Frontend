import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Logo from '../../components/logo/index';
import SlotCard from '../../components/slotcard/card';
import './SlotPage.styles.css';

const SlotPage = () => (
    <>
        <Header />
        <div className="all">
            <Container>
                <Logo />
                <Row className="text-center mt-5">
                    <div className="mx-auto card-congrats">
                        <h1 className="yellow"><strong>Congratulations</strong></h1>
                        <br />
                        <h3>
                            You have been selected for
                            {' '}
                            <span className="span-round">Round 2</span>
                        </h3>
                        <h3>Select the Date and Time for your Interview Round</h3>
                        <br />
                    </div>

                </Row>
                <Row className="justify-content-around">
                    <SlotCard title="Choose DATE" />
                    <SlotCard title="Choose TIME" />
                </Row>
                <Row className="text-center">
                    <div className="mx-auto mb-3">
                        <Button className="slot-button">SUBMIT</Button>

                    </div>
                </Row>
            </Container>

        </div>
        <Footer />
    </>
);

export default SlotPage;
