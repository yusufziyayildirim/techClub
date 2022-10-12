import React from 'react'
import { useState } from 'react';
import AnimationFade from './ui/AnimationFade'
import ScrollTrigger from 'react-scroll-trigger';
import Box from './ui/Box'

const Features = ({ styles, width }) => {
    const [scroll, setScroll] = useState(false);

    return (
        <div className='bg-[#191A1C] overflow-hidden'>
            <div className='bg-about-image absolute w-full h-[1600px] xs:h-screen bg-center bg-cover'> </div>

            {/* Features content */}
            <div style={width < 475 && width * 0.0021 < 1 ? styles.scale : {}} className="!max-w-full relative mx-auto px-3 xs:h-screen flex flex-col justify-center items-center 2xl:scale-125">
                {/* Title */}
                <ScrollTrigger onEnter={() => setScroll(true)}>
                    {scroll && (
                        <AnimationFade delay={1}>
                            <div>
                                <h1 className="text-5xl font-bold text-[#FF8D02] mb-6 xs:mt-6 text-center">Why techClub</h1>
                                <p className='text-center max-w-2xl font-saira text-black'>Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero.</p>
                            </div>
                        </AnimationFade>
                    )}
                </ScrollTrigger >

                <div className='lg:max-w-5xl grid content-center grid-cols-1 xs:grid-cols-2 lg:!grid-cols-4 gap-y-10 2xl:gap-y-12 gap-x-8 mt-16 text-white w-full'>
                    <Box delay={1} title="Project Completed" count={90} src='https://itscodebox.com/codebox/img/icons/feature-icon-1.png' />
                    <Box delay={1.3} title="Satisfied Clients" count={160} src='https://itscodebox.com/codebox/img/icons/feature-icon-2.png' />
                    <Box delay={1.6} title="Expert Teams" count={60} src='https://itscodebox.com/codebox/img/icons/feature-icon-3.png' />
                    <Box delay={1.9} title="Win Awards" count={40} src='https://itscodebox.com/codebox/img/icons/feature-icon-3.png' />
                </div>
            </div>

        </div>
    )
}

export default Features