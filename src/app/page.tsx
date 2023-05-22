"use client";
import HomePage from "@/components/HomePage";
import AboutPage from "@/components/AboutPage";
import OurClientPage from "@/components/OurClientPage";
import { Carousel, Tooltip } from "antd";
import usePage from "./usePage";

const titlePage = ["Home", "About", "Our Clients"];

const renderTitleTooltip = (title: string) => {
  return <span className="text-neon-red text-lg">{title}</span>;
};

export default function Home() {
  const { currentPage, sliderRef, handleWheel, beforeChange } = usePage();
  return (
    <main className="app" onWheel={handleWheel}>
      <Carousel
        ref={sliderRef}
        vertical
        infinite={false}
        dots
        customPaging={(index: number) => (
          <Tooltip
            placement="right"
            title={renderTitleTooltip(titlePage[index])}
            color="transparent"
            overlayStyle={{ backgroundColor: "transparent", boxShadow: "none" }}
            overlayInnerStyle={{
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <div
              key={index}
              className={`lg:w-3 lg:h-3 md:w-3 md:h-3  xs:w-2 xs:h-2 ml-4 rounded-full hover:cursor-pointer ${
                currentPage === index ? "neon-red" : "bg-white/50"
              }`}
            />
          </Tooltip>
        )}
        beforeChange={beforeChange}
      >
        <HomePage />
        <AboutPage />
        <OurClientPage />
      </Carousel>
    </main>
  );
}
