/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './styles.css';

const renderTimes = (arr) => arr.map((time, i) => (
    <option className="w-100 yellow text-center option my-3" value={i}>
        {time}
    </option>
));

const SlotTimeCard = () => {
    const times = [
        '11 AM - 12 PM',
        '2 PM - 3 PM',
        '3 PM - 4 PM',
        '4 PM - 5 PM',
        '5 PM - 6 PM',
        '6 PM - 7 PM',
        '7 PM - 8 PM',
    ];
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
                        Choose TIME
                    </Card.Title>
                    <Row className="times-div w-100 m-auto h-100">
                        <select
                            name="times"
                            id="times"
                            className="w-100 h-75"
                            multiple
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
