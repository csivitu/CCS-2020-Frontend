/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import { updateCurrentDomain } from '../../redux/user/userSlice';
import './card.styles.css';

const DomainCard = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <Col
            xs={12}
            sm={6}
            lg={3}
            className="d-flex justify-content-center align-items-center"
        >
            <Card
                className="card text-center"
                onClick={() => {
                    dispatch(updateCurrentDomain(props.domain));
                    history.push({
                        pathname: '/quiz',
                    });
                }}
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
