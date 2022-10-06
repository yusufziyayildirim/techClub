import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import SendMail from './components/SendMail';
import useWindowWidth from 'react-hook-use-window-width';
import { useRef } from 'react';

function App() {
  //Get screen size
  const width = useWindowWidth();

  const scrollRef = useRef(null);


  //To scale and size div according to screen size
  const styles = {
    size: {
      width: width,
      height: width * 2.1
    },
    scale: {
      transform: `scale(${width * 0.0021})`
    }
  }

  // to scroll when clicking the link
  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* For response message */}
      <Toaster toastOptions={{ className: 'text-center' }} />

      <Header handleScroll={handleScroll} styles={styles} width={width} />
      <About styles={styles} width={width} />
      <Banner scrollRef={scrollRef} styles={styles} width={width} />
      {/* <SendMail styles={styles} width={width} /> */}
      <Contact styles={styles} width={width} />
    </>

  );
}

export default App;
