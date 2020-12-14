/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';

const DomainCard = (props) => (
    <Card style={{
        width: '40rem', height: '50rem', padding: '5rem', backgroundColor: '#0A1138', borderRadius: 22,
    }}
    >
        <Card.Img variant="top" style={{ width: '90%', height: '90%' }} src={props.imgURL} />
        <Card.Body>
            <Card.Title className="text-center" style={{ color: '#F2A62C' }}><h2>{props.domain}</h2></Card.Title>
        </Card.Body>
    </Card>
);

export default DomainCard;
