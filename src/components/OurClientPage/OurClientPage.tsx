import { logoClientLink } from "@/app/data";
import "./OurClientPage.css";
import { Carousel } from "antd";

const NUMBER_LOGO_IN_ROW = 6;

const getListLogo = () => {
  const listLogo = [];
  for (let i = 0; i < logoClientLink.length; i += NUMBER_LOGO_IN_ROW) {
    listLogo.push(logoClientLink.slice(i, i + NUMBER_LOGO_IN_ROW));
  }
  return listLogo;
};

function OurClientPage() {
  const listLogo = getListLogo();
  return (
    <div className="w-screen h-screen primary-color-bg flex justify-center items-center flex-col">
      <div className="text-neon-red text-5xl">Our Clients</div>
      <div className="w-4/5 h-4/5">
        {listLogo.map((logos) => {
          return (
            <div
              key={logos[0]}
              className="w-full flex justify-center items-center slide-row"
            >
              {logos.map((logo) => {
                return (
                  <div key={logo} className="w-1/6 ml-2 mt-3">
                    <img src={logo} alt="logo" className="" />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurClientPage;
