import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CounterUpPage = ({ Count }) => {
    const [counteron, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <h1>
                {counteron && (<CountUp start={0} end={Count} duration={10} delay={0} />)}
            </h1>
        </ScrollTrigger>
    )
}

export default CounterUpPage