
import useHomePage from './useHomePage';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

function HomePage() {
  const { handleForwardToLink } = useHomePage();
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <video autoPlay muted loop className="absolute top-0 left-0 right-0 h-full w-full object-cover">
        <source src="./assets/videos/intro.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-[#000000cc]'></div>

      {/* Header */}
      <div className="w-full p-5 px-36 flex items-center justify-between">
        <div className="logo flex z-10">
          <Image
            src="/assets/images/owl.png"
            alt="Wraparty Logo"
            width={80}
            height={5}
            className="w-[17%] own-logo"
          />
          <Image
            src="/assets/images/wraparty.png"
            alt="Wraparty Logo"
            width={200}
            height={5}
            className="w-[45%] h-[45%]"
          />
        </div>
        <button onClick={handleForwardToLink} className='mx-4 my-2.5 lg:py-2 lg:px-7 xs:py-1 xs:px-4 btn_neon neon_red z-10'>SHOWREEL</button>
      </div>

      {/* Slogan */}
      <div className='slogan-text w-full '>
        <div className="verticalFlip">
          <div className="slogan-1 absolute bottom-[30%] left-0 right-0 text-center">
            <h1 className='lg:text-5xl md:text-4xl sm:text-4xl 2xs:text-3xl xs:text-xl text-neon-red'>WE PRODUCE GREAT STORY</h1>
            <h1 className='lg:text-5xl md:text-4xl sm:text-4xl 2xs:text-3xl xs:text-xl text-neon-blue'>. WITH GOOD PRICE.</h1>
          </div>

          <div className="slogan-2 absolute bottom-[30%] left-0 right-0 text-center">
            <span className='lg:text-5xl md:text-4xl sm:text-4xl 2xs:text-3xl xs:text-xl text-neon-red'>/WRAP/</span> <span className='lg:text-5xl md:text-4xl sm:text-4xl 2xs:text-3xl xs:text-xl text-neon-blue'>/PARTY/</span>
            <h1 className='lg:text-5xl md:text-4xl sm:text-4xl 2xs:text-3xl xs:text-xl my-2 italic'>noun.</h1>
            <h1 className='lg:text-5xl md:text-4xl sm:text-4xl 2xs:text-3xl xs:text-xl'>[A party… ] The cherished moment when all teams gather</h1>
            <h1 className='lg:text-5xl md:text-4xl sm:text-4xl 2xs:text-3xl xs:text-xl'>and celebrate the completion of the filming</h1>
          </div>

          <div className="slogan-3 absolute bottom-[30%] left-0 right-0 text-center">
            <h1 className='lg:text-5xl md:text-4xl sm:text-4xl 2xs:text-3xl xs:text-xl text-neon-red'>Sufficient production solution</h1>
            <h1 className='lg:text-5xl md:text-4xl sm:text-4xl 2xs:text-3xl xs:text-xl text-neon-blue'>& operation partner.</h1>
          </div>

          <div className="slogan-4 absolute bottom-[30%] left-0 right-0 text-center">
            <h1 className='lg:text-5xl md:text-4xl sm:text-4xl 2xs:text-3xl xs:text-xl'>To bring your creative ideas into live action</h1>
            <h1 className='lg:text-5xl md:text-4xl sm:text-4xl 2xs:text-3xl xs:text-xl'>, <span className='text-neon-red'>the dream</span> <span className='text-neon-blue'>come true</span></h1>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
