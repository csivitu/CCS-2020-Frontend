import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
// import './timer.styles.css';

export default function Timer(props) {
    const { timeInDateFormat, onComplete } = props;
    const [time, setTime] = useState(timeInDateFormat - +new Date());

    useEffect(() => {
        if (time < 0) {
            return () => {};
        }

        if (time === 0) {
            onComplete();
            return () => {};
        }

        const interval = setInterval(() => {
            setTime(time - 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, [time, setTime]);

    const convert = (t) => {
        const days = Math.floor(t / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
            (t - days * 24 * 60 * 60 * 1000) / (60 * 60 * 1000),
        );
        const minutes = Math.floor(
            (t - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000)
                / (60 * 1000),
        );
        const seconds = Math.floor(
            (t
                - days * 24 * 60 * 60 * 1000
                - hours * 60 * 60 * 1000
                - minutes * 60 * 1000)
                / 1000,
        );
        const d = days.toString().padStart(2, '0');
        const h = hours.toString().padStart(2, '0');
        const m = minutes.toString().padStart(2, '0');
        const s = seconds.toString().padStart(2, '0');
        return `${d} d : ${h} h : ${m} m : ${s} s`;
    };

    return <>{convert(time)}</>;
}

Timer.defaultProps = {
    onComplete: () => {},
};

Timer.propTypes = {
    onComplete: propTypes.func,
    timeInDateFormat: propTypes.number.isRequired,
};
