import { nanoid } from '@reduxjs/toolkit';
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './styles.css';

const SlotTimeCard = (props) => {
    const { setSlot, time } = props;
    const date = useSelector((state) => state.slot.date);

    const times = [
        '11 AM - 12 PM',
        '2 PM - 3 PM',
        '3 PM - 4 PM',
        '4 PM - 5 PM',
        '5 PM - 6 PM',
        '6 PM - 7 PM',
        '7 PM - 8 PM',
    ];

    const renderTimes = (arr) => {
        let start = 0;
        if (date && date === 20) {
            start = 3;
        }
        return arr.slice(start).map((t) => (
            <option
                className="w-100 yellow text-center option my-3"
                value={time}
                key={nanoid()}
                selected={time === t}
            >
                {t}
            </option>
        ));
    };

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
                        Choose Time
                    </Card.Title>
                    <Row className="times-div w-100 m-auto h-100">
                        <select
                            name="times"
                            id="times"
                            className="w-100 h-75"
                            multiple
                            onChange={(e) => setSlot(e.target.value)}
                        >
                            {renderTimes(times)}
                        </select>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SlotTimeCard;
