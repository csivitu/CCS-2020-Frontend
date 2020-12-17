/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './card.styles.css';

const SlotCard = (props) => (
    <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center align-items-center">
        <Card className="card-div text-center">
            <Card.Body>
                <Card.Title className="text-center card-slot-title">
                    {props.title}
                </Card.Title>
            </Card.Body>
        </Card>
    </Col>
);

export default SlotCard;
