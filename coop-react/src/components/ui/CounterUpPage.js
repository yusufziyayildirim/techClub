import React from 'react';
import CountUp from 'react-countup';

const CounterUpPage = ({ count }) => {
    return (
        <h1 className='font-bold text-4xl leading-[55px] text-[#e4e4e4]'>
            <CountUp start={0} end={count} duration={2} delay={0} />
            <sup>+</sup>
        </h1>
    )
}

export default CounterUpPage