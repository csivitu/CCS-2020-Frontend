/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container, Row } from 'react-bootstrap';
import {
    updateQuestionState,
    updateAnswer,
    updateSavedStatus,
    sendResponsesAsync,
    startQuizAsync,
} from '../../redux/quiz/quizSlice';
import { endAttempt } from '../../redux/user/userSlice';
import csilogo from '../../assets/ComingSoonPage/csilogo.png';
import timeIcon from '../../assets/QuizPage/time.png';
import Countdown from '../../components/countdown';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import './QuizPage.styles.css';
import ThankYouPage from '../ThankYouPage/ThankYouPage';

// create your forceUpdate hook
function useForceUpdate() {
    // eslint-disable-next-line no-unused-vars
    const [value, setValue] = useState(0); // integer state
    return () => setValue((valueTemp) => valueTemp + 1); // update the state to force render
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const QuizPage = ({ domain }) => {
    const forceUpdate = useForceUpdate();
    const dispatch = useDispatch();
    const currentQuestion = useSelector((state) => state.quiz.currentQuestion);
    const answer = useSelector((state) => state.quiz.answer);
    const isLoading = useSelector((state) => state.quiz.isLoading);

    const hideNext = () => {
        if (currentQuestion === 10) {
            return 'd-none';
        }
        return '';
    };

    const hidePrevious = () => {
        if (currentQuestion === 1) {
            return 'd-none';
        }
        return '';
    };

    const handleNext = () => {
        dispatch(updateQuestionState(currentQuestion + 1));
    };

    const handlePrevious = () => {
        dispatch(updateQuestionState(currentQuestion - 1));
    };

    const handleQuestionButton = (number) => {
        dispatch(updateQuestionState(number));
    };

    const saveAnswers = () => {
        const responses = useSelector((state) => state.quiz.responses);
        dispatch(sendResponsesAsync({ responses, domain }));
    };

    let timeout;

    const handleAnswer = () => {
        const questions = useSelector((state) => state.quiz.questions);
        if (!questions) return;

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            saveAnswers();
        }, 2000);

        dispatch(updateSavedStatus(false));
        const ques = questions[currentQuestion - 1];
        ques.response = answer;
        forceUpdate();
    };

    const handleChange = (e) => {
        dispatch(updateAnswer(e.target.value));
        handleAnswer();
    };

    const handleSubmit = () => {
        saveAnswers();
        dispatch(endAttempt());
    };

    const viewStatus = (number) => {
        if (number === currentQuestion) return 'current';
        if (answer !== '') return 'attempted';
        return '';
    };

    useEffect(() => {
        console.log('REACHED HERE ', domain);
        dispatch(startQuizAsync({ domain: 'management' })).then(console.log);
    }, []);

    const errorMsg = useSelector((state) => state.quiz.errorMsg);
    const domainInProg = useSelector((state) => state.quiz.domainInProg);
    const questions = useSelector((state) => state.quiz.questions);

    if (isLoading) {
        return (
            <>
                <Header />
                <div className="all">
                    <Container>
                        <Row className="text-center d-flex w-100">
                            <h1 className="yellow">LOADING...</h1>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </>
        );
    }

    if (errorMsg === 'anotherDomainInProgress') {
        return (
            <h1>
                {`Another domain in progress ${domainInProg}`}
                {' '}
            </h1>
        );
    }

    if (errorMsg === 'quizAlreadyAttempted') {
        return <ThankYouPage />;
    }

    return (
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
                            <h2>
                                Domain:
                                {' '}
                                <b>{domain}</b>
                            </h2>
                        </div>

                        <div className="d-flex justify-content-around">
                            <img
                                src={timeIcon}
                                className="mr-3 timer-icon"
                                alt="Timer"
                            />
                            <Countdown
                                timeInSeconds={600}
                                onComplete={() => alert('TIME KHATAM HOGAYA SORRY')}
                            />
                        </div>
                    </Row>
                    <Row>
                        <div className="question mt-3 px-5 py-5">
                            <div className="orange-question-div" />
                            <b className=" heading question-heading">
                                {`Question ${currentQuestion}:`}
                            </b>
                            <br />
                            {questions[currentQuestion - 1].question}
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
                                onChange={handleChange}
                                autoFocus
                            />
                        </div>
                    </Row>
                    <Row className="d-flex justify-content-between">
                        <div>
                            <Button
                                className={`quiz-button mr-2 px-3 ${hidePrevious()}`}
                                size="lg"
                                onClick={handlePrevious}
                            >
                                <b>PREVIOUS</b>
                            </Button>
                            <Button
                                className={`quiz-button px-3 ${hideNext()}`}
                                size="lg"
                                onClick={handleNext}
                            >
                                <b>NEXT</b>
                            </Button>
                        </div>

                        <Button
                            className="submit-button px-3"
                            size="lg"
                            onClick={handleSubmit}
                        >
                            <b>SUBMIT</b>
                        </Button>
                    </Row>
                    <Row className="d-flex question-button-container justify-content-around py-4">
                        <div className="question-numbers">
                            {numbers.map((number) => (
                                <Button
                                    className={`question-button mx-2 ${viewStatus(
                                        number,
                                    )}`}
                                    key={number}
                                    onClick={() => handleQuestionButton(number)}
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
};

export default QuizPage;
