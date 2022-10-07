import phone from '../assets/image/phone.png'
import phoneContent from '../assets/image/phoneContent.png'
import lightLogo from '../assets/image/lightLogo.webp'

const Banner = ({ styles, width, scrollRef }) => {

  return (
    <div>
      {/* Banner background image */}
      <div className='bg-banner-image absolute w-full h-screen bg-center bg-cover'> </div>
      
      <div ref={scrollRef} style={width < 475 && width * 0.0021 < 1 ? styles.scale : {}} className="max-w-[240px] relative mx-auto h-screen flex flex-col justify-center items-center" >
        <div className='relative h-[448px] w-[220px] translate-y-4 mb-6 '>
          {/* phone */}
          <img src={phone} alt="phone" className='absolute w-[220px] z-50'></img>
          {/* Phone bg*/}
          <img className='absolute h-[450px] top-0 z-1 rounded-[40px]' src={phoneContent} alt="phone bg" />
          {/* Phone bottom logo */}
          <img className='absolute bottom-10 left-1/2 -translate-x-[60px] w-32 z-50' src={lightLogo} alt="logo" />
        </div>

        {/* Banner description */}
        <div className='flex-shrink-0'>
          <h1 className='text-3xl font-bold text-[#FF8D02] text-center mb-3'> techClub</h1>
          <p className='text-white text-center'>As Orion Innovation Turkey techClub, we aim to share our technical competencies, techClub events and announcements.</p>
        </div>
      </div>
    </div>
  )
}

export default Banner