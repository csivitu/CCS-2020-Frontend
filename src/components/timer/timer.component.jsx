import React from 'react';
import './timer.styles.css';

const Timer = () => {
    const countDownDate = new Date('Dec 19, 2020 00:00:00').getTime();

    const x = setInterval(() => {
        const now = new Date().getTime();

        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('demo').innerHTML = `${days}d ${hours}h ${
            minutes}m ${seconds}s `;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById('demo').innerHTML = 'EXPIRED';
        }
    }, 1000);
    return (
        <div className="timer-container">
            <h1><b>Round 1</b></h1>
            <div className="timer">
                <p id="demo" />
            </div>
        </div>

    );
};

export default Timer;
