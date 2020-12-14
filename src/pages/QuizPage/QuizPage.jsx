import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import csilogo from '../../assets/ComingSoonPage/csilogo.png';
import timeIcon from '../../assets/QuizPage/time.png';
import './QuizPage.styles.css';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const QuizPage = () => (
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
            <Row className="d-flex justify-content-between">
                <div>
                    <h1>
                        Domain:
                        {' '}
                        <b>DESIGN</b>
                    </h1>
                </div>

                <div className="d-flex">
                    <img src={timeIcon} className="mr-3" alt="Time icon" />
                    <div className="timer-box"><h2>23:00</h2></div>

                </div>
            </Row>
            <Row className="question-container">
                <div className="question-answer">
                    <b>Question:</b>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Id volutpat mattis etiam scelerisque sagittis, enim sagittis quis.
                    Odio vivamus posuere adipiscing egestas enim maecenas mauris arcu.
                    Ut est, consequat, non morbi rhoncus. Ornare ut massa,
                    elementum sit elementum tellus urna.
                </div>
                <div className="question-answer">
                    <b>Answer:</b>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisi mi elementum eget tincidunt non duis.
                    Sem risus in integer ultricies suspendisse velit.
                    Accumsan odio nunc egestas ac. Eget non tristique mauris mattis tempor eros.
                    Justo, in duis iaculis nibh urna. Nibh rhoncus semper pretium et.
                    Nunc porta id mi eu proin fames. Fermentum, pharetra, tortor sed purus
                    ultricies. Purus id nisl ornare fringilla. Ornare non mi id risus. Sagittis,
                    urna ipsum sed at morbi feugiat faucibus maecenas nunc. Non enim amet
                </div>
            </Row>
            <Row className="d-flex justify-content-between">
                <div>
                    <Button className="quiz-button mr-2" size="lg"><b>PREVIOUS</b></Button>
                    <Button className="quiz-button" size="lg"><b>NEXT</b></Button>
                </div>

                <Button className="quiz-button" style={{ backgroundColor: '#D44529', color: 'white', border: '0' }} size="lg"><b>SUBMIT</b></Button>
            </Row>
            <Row className="d-flex justify-content-between question-button-container mt-4">
                {numbers.map((number) => (
                    <Button className="question-button" key={number}><b>{number}</b></Button>

                ))}
            </Row>
        </Container>
    </div>
);

export default QuizPage;
