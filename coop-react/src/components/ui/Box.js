import React from 'react'
import CounterUpPage from './CounterUpPage';

const Box = ({ src, count, title }) => {

    return (
        <div className='bg-[#0d0d0f] py-12 rounded-xl flex items-center justify-center -skew-y-6 hover:-skew-y-0 ease-out duration-500 group shadow-lg shadow-[#0d0d0f]'>
            <div className='skew-y-6 group-hover:skew-y-0 ease-out duration-500 flex flex-col items-center font-saira'>
                <img className='h-[85px] mb-5' src={src} alt='code' />
                <CounterUpPage count={count} />
                <h4 className='text-xl leading-8 font-bold text-center text-[#e4e4e4] '>{title}</h4>
            </div>
        </div>
    )
}

export default Box