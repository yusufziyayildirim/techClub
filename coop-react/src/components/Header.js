import github from '../assets/icons/github.png'
import instagram from '../assets/icons/instagram.png'
import youtube from '../assets/icons/youtube.png'
import medium from '../assets/icons/medium.png'
import twitter from '../assets/icons/twitter.png'
import lightLogo from '../assets/image/lightLogo.webp'

const Header = ({ styles, width, handleScroll }) => {
    return (
        <div className='h-screen relative flex items-center justify-center overflow-hidden'>
            {/* Header background image */}
            <div className='bg-header-image absolute w-full h-full bg-center bg-cover' />

            {/* Header Content */}
            <div className={`bg-[#090909] flex items-center justify-center !max-h-screen !max-w-lg mx-auto z-50 text-white opacity-90 `} style={styles.size}>
                <div style={width < 475 && width * 0.0021 < 1 ? styles.scale : {}} className='flex flex-col w-screen px-2 items-center justify-center gap-y-6'>
                    {/* Logo */}
                    <img className='w-64 ' src={lightLogo} alt="logo" />

                    {/* seperator */}
                    <div className='h-[.15rem] bg-white w-full'></div>

                    <p className='text-4xl'>Follow us on <span onClick={handleScroll} className='text-[#FF8D02] cursor-pointer'>techClub</span></p>

                    {/* Social icons */}
                    <ul className='inline-grid w-full content-center grid-cols-3 gap-4 place-items-center'>
                        <li className='flex justify-center'>
                            <a href='https://medium.com/orion-innovation-turkey' className='rounded-full' target="_blank" rel="noreferrer">
                                <div className='bg-[#2e2e2e] opacity-90 h-20 w-20 rounded-full flex items-center justify-center group'>
                                    <img className='w-9 group-hover:scale-105 transition-all duration-500' src={medium} alt="medium" />
                                </div>
                            </a>
                        </li>
                        <li className='flex justify-center'>
                            <a href='https://github.com/OrionInnovationTRTech' className='rounded-full' target="_blank" rel="noreferrer">
                                <div className='bg-[#2e2e2e] h-20 w-20 rounded-full flex items-center justify-center group '>
                                    <img className='w-9 group-hover:scale-105 transition-all duration-500' src={github} alt="github" />
                                </div>
                            </a>
                        </li>
                        <li className='flex justify-center'>
                            <a href='https://www.youtube.com/channel/UCuNKEx2xnOrAWMSHGtGZEUw' className='rounded-full' target="_blank" rel="noreferrer">
                                <div className='bg-[#2e2e2e] h-20 w-20 rounded-full flex items-center justify-center group '>
                                    <img className='w-9 group-hover:scale-105 transition-all duration-500' src={youtube} alt="youtube" />
                                </div>
                            </a>
                        </li>
                        <div className='w-[75%] flex col-span-3 justify-around'>
                            <li className='flex justify-center'>
                                <a href='https://www.instagram.com/oriontr.tech/' className='rounded-full' target="_blank" rel="noreferrer">
                                    <div className='bg-[#2e2e2e] h-20 w-20 rounded-full flex items-center justify-center group '>
                                        <img className='w-9 group-hover:scale-105 transition-all duration-500' src={instagram} alt="instagram" />
                                    </div>
                                </a>
                            </li>
                            <li className='flex justify-center'>
                                <a href='https://twitter.com/oriontr_tech' className='rounded-full' target="_blank" rel="noreferrer">
                                    <div className='bg-[#2e2e2e] h-20 w-20 rounded-full flex items-center justify-center group '>
                                        <img className='w-9 group-hover:scale-105 transition-all duration-300' src={twitter} alt="twitter" />
                                    </div>
                                </a>
                            </li>
                        </div>
                    </ul>

                    {/* seperator */}
                    <div className='h-[.15rem] bg-white w-full'></div>
                </div>
            </div>
        </div>
    )
}

export default Header