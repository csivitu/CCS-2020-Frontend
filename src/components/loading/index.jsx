import React from 'react';
import { Row, Container } from 'react-bootstrap';
import loadinggif from '../../assets/loading.gif';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

import './styles.css';

const Loading = () => (
    <>
        <Header />
        <div className="all">
            <Container className="h-100">
                <Row className="text-center d-flex justify-content-center align-items-center w-100 h-100">
                    <img src={loadinggif} className="text-center loader" alt="LOADING..." />
                </Row>
            </Container>
        </div>
        <Footer />
    </>
);

export default Loading;
