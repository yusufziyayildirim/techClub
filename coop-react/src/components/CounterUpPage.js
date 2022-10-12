import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CounterUpPage = ({ count }) => {
    const [counteron, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)}>
            <h1 className='font-bold text-4xl leading-[55px] text-[#e4e4e4]'>
                {counteron && (<CountUp start={0} end={count} duration={2} delay={0} />)}
                <sup>+</sup>
            </h1>
        </ScrollTrigger>
    )
}

export default CounterUpPage