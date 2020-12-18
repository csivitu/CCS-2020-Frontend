/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import './card.styles.css';

const DomainCard = (props) => {
    const history = useHistory();
    return (
        <Col
            xs={12}
            sm={6}
            lg={3}
            className="d-flex justify-content-center align-items-center"
        >
            <Card
                className="card text-center"
                onClick={() => history.push({
                    pathname: '/quiz',
                    state: { domain: props.domain },
                })}
            >
                <Card.Img variant="top" src={props.imgURL} className="card-image" />
                <Card.Body>
                    <Card.Title className="text-center card-title">
                        {props.domain}
                    </Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DomainCard;
