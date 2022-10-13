import darkLogo from '../assets/image/darkLogo.png'
import { AnimationFade } from './ui/Animation'
import Scroll from './ui/ScrollTrigger';

const About = ({ styles, width }) => {

    return (
        <div className='bg-about-image bg-cover bg-center'>
            <div style={width < 475 && width * 0.0021 < 1 ? styles.scale : {}} className="px-3 xs:px-0 lg:!px-40 2xl:!px-96 relative mx-auto py-8 h-screen flex flex-col justify-around 2xl:scale-110 2xl:justify-center 2xl:gap-y-16">
                {/* Title */}
                <Scroll>
                    <AnimationFade delay={1.3}>
                        <h1 className="text-5xl font-bold text-[#FF8D02] mb-2">About</h1>
                    </AnimationFade>
                </Scroll>

                <p className='mb-3'>
                    NetRD Bilgi Teknolojileri ve Telekomünikasyon A.S, is now part of Orion Innovation Group. Orion is a leading digital transformation and product development services firm. Headquartered in Edison, NJ, we have a global team of 6,000+ associates, with engineers in 13 major delivery centers across North America, Europe, Asia and Latin America.

                    For over 25 years, Orion has been solving complex business problems for our clients. Our transformative business solutions are rooted in digital strategy, experience design, and engineering, empowering our clients to operate with agility at scale.

                    Our mission is to serve as an agile and trusted partner for business transformation initiatives, providing deep emerging technology, experience design, and domain expertise.

                    Our business has more than tripled over the last three years. We have grown aggressively both organically and inorganically, adding new clients, complementary skills, domain expertise, and strengthening our global footprint.
                </p>

                {/* Logo */}
                <Scroll >
                    <AnimationFade delay={2.5}>
                        <div className='w-full z-10 h-10'>
                            <img src={darkLogo} alt="logo" className='w-56 float-right' />
                        </div>
                    </AnimationFade>
                </Scroll>
            </div>
        </div>
    )
}

export default About