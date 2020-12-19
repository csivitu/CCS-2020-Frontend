/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './styles.css';

const SlotDateCard = (props) => {
    const { setDate } = props;

    return (
        <Col
            xs={12}
            sm={6}
            lg={3}
            className="d-flex justify-content-center align-items-center"
        >
            <Card className="slot-card-div text-center">
                <Card.Body>
                    <Card.Title className="text-center card-slot-title">
                        Choose Date
                    </Card.Title>
                    <Row className="december w-100 yellow mx-auto my-4"><Col>December 2020</Col></Row>
                    <Row className="dates">
                        <Col className="date my-2">
                            <input
                                id="20"
                                type="radio"
                                name="slot-date"
                                onClick={() => setDate(20)}
                            />
                            <label htmlFor="20" className="date-text yellow">
                                20
                            </label>
                        </Col>
                        <Col className="date my-2">
                            <input
                                id="21"
                                type="radio"
                                name="slot-date"
                                onClick={() => setDate(21)}
                            />
                            <label htmlFor="21" className="date-text yellow">
                                21
                            </label>
                        </Col>
                        <Col className="date my-2">
                            <input
                                id="22"
                                type="radio"
                                name="slot-date"
                                onClick={() => setDate(22)}
                            />
                            <label htmlFor="22" className="date-text yellow">
                                22
                            </label>
                        </Col>
                        <Col className="date my-2">
                            <input
                                id="23"
                                type="radio"
                                name="slot-date"
                                onClick={() => setDate(23)}
                            />
                            <label htmlFor="23" className="date-text yellow">
                                23
                            </label>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SlotDateCard;
