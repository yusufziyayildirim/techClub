import React from 'react'
import { AnimationFade } from './ui/Animation'
import Scroll from './ui/ScrollTrigger';
import Box from './ui/Box'
import github from '../assets/icons/github.png'
import instagram from '../assets/icons/instagram.png'
import youtube from '../assets/icons/youtube.png'
import medium from '../assets/icons/medium.png'


const Features = ({ styles, width }) => {

    return (
        <div className='bg-about-image bg-cover bg-center'>
            <div style={width < 475 && width * 0.0021 < 1 ? styles.scale : {}} className="!max-w-full relative mx-auto px-3 xs:h-screen flex flex-col justify-center items-center 2xl:scale-125">
                {/* Title */}
                <Scroll>
                    <AnimationFade delay={1}>
                        <div className='-translate-y-10'>
                            <h1 className="text-5xl font-bold text-[#FF8D02] mb-6 xs:mt-6 text-center">Why techClub</h1>
                            <p className='text-center max-w-2xl font-saira text-black'>Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero.</p>
                        </div>
                    </AnimationFade>
                </Scroll>

                <div className='w-full lg:max-w-5xl grid grid-cols-1 xs:grid-cols-2 lg:!grid-cols-4 gap-y-10 gap-x-8 mt-16 text-white'>
                    <Scroll>
                        <AnimationFade delay={1}>
                            <Box title="Repositories" count={30} src={github} />
                        </AnimationFade>
                    </Scroll>
                    <Scroll>
                        <AnimationFade delay={1.3}>
                            <Box title="Blog" count={60} src={medium} />
                        </AnimationFade>
                    </Scroll>
                    <Scroll>

                        <AnimationFade delay={1.6}>
                            <Box title="Followers" count={600} src={instagram} />
                        </AnimationFade>
                    </Scroll>
                    <Scroll>

                        <AnimationFade delay={1.9}>
                            <Box title="Minute" count={1000} src={youtube} />
                        </AnimationFade>
                    </Scroll>
                </div>
            </div>
        </div>
    )
}

export default Features