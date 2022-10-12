import React, { useState } from 'react'
import CounterUpPage from './CounterUpPage';
import ScrollTrigger from 'react-scroll-trigger';
import AnimationFade from './AnimationFade';

const Box = ({ src, count, title, delay }) => {
    const [scroll, setScroll] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setScroll(true)}>
            {scroll && (
                <AnimationFade delay={delay}>
                    <div className='bg-[#0d0d0f] py-12 rounded-xl flex items-center justify-center -skew-y-6 hover:-skew-y-0 ease-out duration-500 group shadow-md shadow-[#FF8D02]/80'>
                        <div className='skew-y-6 group-hover:skew-y-0 ease-out duration-500 flex flex-col items-center font-saira'>
                            <img className='h-[85px] mb-5' src={src} alt='code' />
                            <CounterUpPage count={count}/>
                            <h4 className='text-xl leading-8 font-bold mb-2 text-center text-[#e4e4e4] '>{title}</h4>
                        </div>
                    </div>
                </AnimationFade>
            )}
        </ScrollTrigger >
    )
}

export default Box