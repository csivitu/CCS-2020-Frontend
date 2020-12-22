/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Card, Col, Row } from 'react-bootstrap';
import './styles.css';

const dates = [21, 22, 23, 24, 25];

const SlotDateCard = (props) => {
    const { setDateWrap } = props;

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
                    <Row className="december w-100 yellow mx-auto my-4">
                        <Col>December 2020</Col>
                    </Row>
                    <Row className="dates">
                        {
                            dates.map((date) => {
                                if (new Date().getDate() > date) return <div key={nanoid()} />;

                                return (
                                    <Col className="date my-2" key={nanoid()}>
                                        <input
                                            id={date}
                                            type="radio"
                                            name="slot-date"
                                            onClick={() => setDateWrap(date)}
                                        />
                                        <label htmlFor={date} className="date-text yellow">
                                            {date}
                                        </label>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SlotDateCard;
