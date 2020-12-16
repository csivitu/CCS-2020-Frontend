/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import csilogo from '../../assets/ComingSoonPage/csilogo.png';
import timeIcon from '../../assets/QuizPage/time.png';
import Countdown from '../../components/countdown';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import './QuizPage.styles.css';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const QuizPage = () => (
    <>
        <Header />
        <div className="all">
            <Container className="d-flex flex-column justify-content-around">
                <Row className="text-center">
                    <div className="mt-2 mb-5 mx-auto">
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
                <Row className="d-flex justify-content-between align-items-center flex-xs-column">
                    <div className="domain">
                        <h1>
                            Domain:
                            {' '}
                            <b>DESIGN</b>
                        </h1>
                    </div>

                    <div className="d-flex justify-content-around">
                        <img
                            src={timeIcon}
                            className="mr-3 timer-icon"
                            alt="Timer"
                        />
                        <Countdown
                            timeInSeconds={6000}
                            onComplete={() => alert('TIME KHATAM HOGAYA SORRY')}
                        />
                    </div>
                </Row>
                <Row>
                    <div className="question mt-3 px-5 py-5">
                        <div className="orange-question-div" />
                        <b className=" heading question-heading">Question:</b>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Id volutpat mattis etiam scelerisque sagittis, enim
                        sagittis quis. Odio vivamus posuere adipiscing egestas
                        enim maecenas mauris arcu. Ut est, consequat, non morbi
                        rhoncus. Ornare ut massa, elementum sit elementum tellus
                        urna.
                    </div>
                </Row>
                <Row>
                    <div className="answer my-3 px-5 py-5 w-100">
                        <b className=" heading answer-heading">Answer:</b>
                        <br />
                        <textarea
                            name="answer"
                            className="answer-area w-100"
                            id=""
                            cols="30"
                            rows="10"
                            autoFocus
                        />
                    </div>
                </Row>
                <Row className="d-flex justify-content-between">
                    <div>
                        <Button className="quiz-button mr-2 px-3" size="lg">
                            <b>PREVIOUS</b>
                        </Button>
                        <Button className="quiz-button px-3" size="lg">
                            <b>NEXT</b>
                        </Button>
                    </div>

                    <Button className="submit-button px-3" size="lg">
                        <b>SUBMIT</b>
                    </Button>
                </Row>
                <Row className="d-flex question-button-container justify-content-around py-4">
                    <div className="question-numbers">
                        {numbers.map((number) => (
                            <Button
                                className="question-button mx-2"
                                key={number}
                            >
                                <b>{number}</b>
                            </Button>
                        ))}
                    </div>
                </Row>
            </Container>
        </div>
        <Footer />
    </>
);

export default QuizPage;
