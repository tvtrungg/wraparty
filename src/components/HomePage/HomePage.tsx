import useHomePage from './useHomePage';


function HomePage() {
  const { handleForwardToLink } = useHomePage();

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <video autoPlay muted loop className="absolute top-0 left-0 right-0">
        <source src="./assets/videos/intro.mp4" type="video/mp4" />
      </video>

      <div className='absolute top-0 left-0 w-full h-full bg-[#000000d5]'></div>

      {/* Slogan */}
      <div className='w-full absolute bottom-[30%] left-0'>
        <h1 className='text-white text-center text-5xl font-VarelaRound'>WE PRODUCE GREAT STORY.</h1>
        <h1 className='text-white text-center text-5xl font-VarelaRound'>WITH GOOD PRICE </h1>
      </div>

      {/* Button */}
      <div className='absolute bottom-[15%] left-[50%] -translate-x-1/2'>
        <button onClick={handleForwardToLink} className='btn_neon neon_red mx-4'>SHOWREEL</button>
        <button className='btn_neon neon_cyan mx-4'>CONTACT US</button>
      </div>

    </div>
  );
}

export default HomePage;
