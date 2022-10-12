import React, { useState } from 'react'
import CounterUpPage from './CounterUpPage'

const Features = ({ styles, width }) => {

    const [visible, setVisible] = useState(false);

    return (
        <div className='bg-[#191A1C] overflow-hidden'>
            <div className='bg-about-image absolute w-full h-screen bg-center bg-cover'> </div>

            {/* Counter content */}
            <div style={width < 475 && width * 0.0021 < 1 ? styles.scale : {}} className="!max-w-full relative mx-auto px-3 xs:h-screen flex flex-col justify-center items-center">
                {/* Title */}
                <div>
                    <h1 className="text-5xl font-bold text-[#FF8D02] mb-6 xs:mt-6 text-center">Why techClub</h1>
                    <p className='text-center max-w-2xl font-saira text-black'>Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero.</p>   
                </div>
                <div className='lg:max-w-5xl grid content-center grid-cols-1 xs:grid-cols-2 lg:!grid-cols-4 gap-y-10 2xl:gap-y-12 gap-x-8 mt-16 text-white w-full'>
                    <div className='bg-[#0d0d0f] py-12 rounded-xl flex items-center justify-center -skew-y-6 hover:-skew-y-0 ease-out duration-500 group shadow-md shadow-[#FF8D02]/80'>
                        <div className='skew-y-6 group-hover:skew-y-0 ease-out duration-500 flex flex-col items-center font-saira'>
                            <img className='h-[85px] mb-5' src='https://itscodebox.com/codebox/img/icons/feature-icon-1.png' alt='code' />
                            <CounterUpPage count={160} />
                            <h4 className='text-xl leading-8 font-bold mb-2 text-center text-[#e4e4e4] '>Project Completed</h4>
                        </div>
                    </div>
                    <div className='bg-[#0d0d0f] py-12 rounded-xl flex items-center justify-center -skew-y-6 hover:-skew-y-0 ease-out duration-500 group shadow-md shadow-[#FF8D02]/80'>
                        <div className='skew-y-6 group-hover:skew-y-0 ease-out duration-500 flex flex-col items-center font-saira'>
                            <img className='h-[85px] mb-5' src='https://itscodebox.com/codebox/img/icons/feature-icon-2.png' alt='code' />
                            <CounterUpPage count={200} />
                            <h4 className='text-xl leading-8 font-bold mb-2 text-center text-[#e4e4e4]'>Satisfied Clients</h4>
                        </div>
                    </div>
                    <div className='bg-[#0d0d0f] py-12 rounded-xl flex items-center justify-center -skew-y-6 hover:-skew-y-0 ease-out duration-500 group shadow-md shadow-[#FF8D02]/80'>
                        <div className='skew-y-6 group-hover:skew-y-0 ease-out duration-500 flex flex-col items-center font-saira'>
                            <img className='h-[85px] mb-5' src='https://itscodebox.com/codebox/img/icons/feature-icon-3.png' alt='code' />
                            <CounterUpPage count={400} />
                            <h4 className='text-xl leading-8 font-bold mb-2 text-center text-[#e4e4e4]'>Expert Teams</h4>
                        </div>
                    </div>
                    <div className='bg-[#0d0d0f] py-12 rounded-xl flex items-center justify-center -skew-y-6 hover:-skew-y-0 ease-out duration-500 group shadow-md shadow-[#FF8D02]/80'>
                        <div className='skew-y-6 group-hover:skew-y-0 ease-out duration-500 flex flex-col items-center font-saira'>
                            <img className='h-[85px] mb-5' src='https://itscodebox.com/codebox/img/icons/feature-icon-4.png' alt='code' />
                            <CounterUpPage count={90} />
                            <h4 className='text-xl leading-8 font-bold mb-2 text-center text-[#e4e4e4]'>Win Awards</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features