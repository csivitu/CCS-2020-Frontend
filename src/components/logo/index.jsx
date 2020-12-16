import React from 'react';
import { Row } from 'react-bootstrap';

import csilogo from '../../assets/ComingSoonPage/csilogo.png';
import './logo.styles.css';

export default function Logo() {
    return (
        <Row className="text-center mt-2">
            <div className="mx-auto">
                <a href="https://csivit.com" rel="noreferrer" target="_blank">
                    <img src={csilogo} alt="CSIVIT" className="csi-logo" />
                </a>
            </div>
        </Row>
    );
}
