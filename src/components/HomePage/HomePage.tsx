const HomePage = function HomePage() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <video autoPlay muted loop className="absolute top-0 left-0 right-0">
        <source src="./assets/videos/intro.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePage;
