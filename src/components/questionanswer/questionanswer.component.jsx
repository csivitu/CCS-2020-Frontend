import React from 'react';
import { Row } from 'react-bootstrap';

import './questionanswer.styles.css';

const QuestionAnswer = () => (
    <Row className="question-container">
        <div className="question-answer">
            <b>Question:</b>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id volutpat
            mattis etiam scelerisque sagittis, enim sagittis quis. Odio vivamus
            posuere adipiscing egestas enim maecenas mauris arcu. Ut est,
            consequat, non morbi rhoncus. Ornare ut massa, elementum sit
            elementum tellus urna.
        </div>
        <div className="question-answer">
            <b>Answer:</b>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi mi
            elementum eget tincidunt non duis. Sem risus in integer ultricies
            suspendisse velit. Accumsan odio nunc egestas ac. Eget non tristique
            mauris mattis tempor eros. Justo, in duis iaculis nibh urna. Nibh
            rhoncus semper pretium et. Nunc porta id mi eu proin fames.
            Fermentum, pharetra, tortor sed purus ultricies. Purus id nisl
            ornare fringilla. Ornare non mi id risus. Sagittis, urna ipsum sed
            at morbi feugiat faucibus maecenas nunc. Non enim amet
        </div>
    </Row>
);

export default QuestionAnswer;
