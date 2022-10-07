import phoneIcon from '../assets/icons/phoneIcon.png'
import envelope from '../assets/icons/envelope.png'
import laptop from '../assets/icons/laptop.png'
import location from '../assets/icons/location.png'


const Contact = ({ styles, width }) => {
  return (
    <div className='h-screen relative flex items-center justify-center overflow-hidden'>
      {/* Contact background image */}
      <div className='bg-header-image absolute w-full h-full bg-center bg-cover' />

      {/* Contact content */}
      <div className={`bg-[#090909] flex flex-col items-center justify-center !max-h-screen !max-w-lg  mx-auto z-50 text-white opacity-90 `} style={styles.size}>
        <div style={width < 475 && width * 0.0021 < 1 ? styles.scale : {}} className='flex flex-col xs:px-2 items-center justify-center gap-y-8'>
          <h1 className="text-6xl font-bold text-[#FF8D02]">Contact Us</h1>
          <ul className="flex flex-col px-14 gap-y-6">
            <li className="flex items-center">
              <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center mr-8 flex-shrink-0">
                <img src={phoneIcon} className="w-5" alt="phone" />
              </div>
              <p className="text-xl flex-shrink-0">
                +90 (216) 522 21 00
              </p>
            </li>
            <li className="flex items-center">
              <div className="h-14 w-14 rounded-full flex-shrink-0 bg-white flex items-center justify-center mr-8">
                <img src={envelope} className="w-6" alt="envelope" />
              </div>
              <a href='mailto:' className="text-xl flex-shrink-0">
                info@NetRD.com.tr
              </a>
            </li>
            <li className="flex items-center">
              <div className="h-14 w-14 rounded-full flex-shrink-0 bg-white flex items-center justify-center mr-8">
                <img src={laptop} className="w-8" alt="laptop" />
              </div>
              <a href='https://netrd.orioninc.com.tr/' target="_blank" rel="noreferrer" className="text-xl flex-shrink-0">
                www.netrd.com.tr
              </a>
            </li>
            <li className="flex items-center">
              <div className="h-14 w-14 rounded-full flex-shrink-0 -translate-y-4 bg-white flex items-center justify-center mr-8">
                <img src={location} className="w-8" alt="location" />
              </div>
              <p className="text-xl ">
                Yenisehir Mah. Osmanli Bul. A Blok No:11A/30
                <br />
                Pendik/İSTANBUL
              </p>
            </li>
          </ul>

          {/* seperator */}
          <div className='h-[.15rem] bg-white w-[99%]'></div>

          {/* Footer */}
          <ul className='flex flex-col items-center text-[14px] xs:px-16'>
            <li><a href='https://netrd.orioninc.com.tr/kisisel-verilerin-korunmasi-kanunu-hakkinda-bilgilendirme.html' className='underline hover:text-[#FF8D02] transition-colors' target="_blank" rel="noreferrer">Kişisel Verilerin Korunmasına İlişkin Bildirim </a></li>
            <li><a href='https://netrd.orioninc.com.tr/Bilgi-Toplumu-Hizmetleri.html' className='underline hover:text-[#FF8D02] transition-colors' target="_blank" rel="noreferrer">Bilgi Toplumu Hizmetleri</a></li>
            <li><a href='https://netrd.orioninc.com.tr/Bilgi_Guvenligi_Politikasi.pdf' className='underline hover:text-[#FF8D02] transition-colors' target="_blank" rel="noreferrer">Bilgi Güvenliği Politikası</a></li>
            <li className='text-[14px] text-center mt-2 font-bold'>NetRD Bilgi Teknolojileri ve Telekomünikasyon bir Orion Innovation şirketidir. Tüm hakları saklıdır ©️ 2022</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact