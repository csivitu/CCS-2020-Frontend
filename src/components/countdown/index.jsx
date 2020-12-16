import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import './styles.css';

export default function Countdown(props) {
    const { timeInSeconds, onComplete } = props;
    const [time, setTime] = useState(timeInSeconds);

    useEffect(() => {
        if (time < 0) {
            return () => {};
        }

        if (time === 0) {
            onComplete();
            return () => {};
        }

        const interval = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [time, setTime]);

    const convert = (t) => {
        const minutes = Math.floor(t / 60);
        const seconds = (t - minutes * 60).toString();
        const min = minutes.toString();

        return `${min.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    };

    return (
        <div className="countdown d-flex justify-content-center align-items-center py-2 px-3">
            {convert(time)}
        </div>
    );
}

Countdown.defaultProps = {
    onComplete: () => {},
};

Countdown.propTypes = {
    onComplete: propTypes.func,
    timeInSeconds: propTypes.number.isRequired,
};
