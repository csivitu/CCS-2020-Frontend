import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Logo from '../../components/logo/index';
import SlotDateCard from '../../components/slotdatecard';
import SlotTimeCard from '../../components/slottimecard';
import Loading from '../../components/loading';
import {
    setSlotTime,
    setDiscordLink,
} from '../../redux/user/userSlice';
import './SlotPage.styles.css';

const instance = Axios.create({
    baseURL: 'https://slot-booking-system.csivit.com/',
    headers: {
        Authorization: localStorage.getItem('token'),
    },
});

const SlotPage = () => {
    const regNo = useSelector((state) => state.user.regNo);
    const history = useHistory();
    const dispatch = useDispatch();
    const [date, setDate] = useState('');
    const [slot, setSlot] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const round2 = useSelector((state) => state.user.round2);

    if (!round2) {
        return <Redirect to="/" />;
    }

    const handleSubmit = () => {
        console.log(regNo);

        if (!slot || !date) {
            setError(true);
            return;
        }

        instance.post('/', {
            day: `${date} dec 2020`,
            slot,
        })
            .then(({ data }) => {
                if (data.status === 'success') {
                    dispatch(setSlotTime(`${date} dec 2020, ${slot}`));
                    dispatch(setDiscordLink(data.inviteLink));
                    history.push('/selections');
                }
            });
    };

    useEffect(() => {
        instance.get('/')
            .then((data) => {
                setLoading(false);

                if (!data.data.data) {
                    return;
                }
                dispatch(setSlotTime(`${data.data.data.day}, ${data.data.data.slot}`));
                dispatch(setDiscordLink(data.data.data.inviteLink));
                history.push('/selections');
            });
    });

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Header />
            <div className="all">
                <Container>
                    <Logo />
                    <Row className="text-center mt-5">
                        <div className="mx-auto card-congrats">
                            <h1 className="yellow"><strong>Congratulations</strong></h1>
                            <br />
                            <h3>
                                You have been selected for
                                {' '}
                                <span className="span-round">Round 2</span>
                            </h3>
                            <h3>Select the Date and Time for your Interview Round</h3>
                            <br />
                        </div>

                    </Row>
                    <Row className="justify-content-around">
                        <SlotDateCard setDate={setDate} />
                        <SlotTimeCard setSlot={setSlot} />
                    </Row>
                    <Row className="text-center">
                        <div className="mx-auto mb-3">
                            <Button
                                className="submit-button px-3"
                                style={{ width: '10rem', height: '3rem', fontSize: '1.5rem' }}
                                onClick={handleSubmit}
                            >
                                SUBMIT
                            </Button>
                        </div>
                    </Row>
                    {
                        error && (
                            <Row className="text-center">
                                <div
                                    className="mx-auto mb-3 text-danger"
                                    style={{
                                        fontSize: '1.4rem',
                                    }}
                                >
                                    You must select a date and time to reserve your slot!
                                </div>
                            </Row>
                        )
                    }
                </Container>

            </div>
            <Footer />
        </>
    );
};

export default SlotPage;
