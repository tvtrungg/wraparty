"use client";
import HomePage from "@/components/HomePage";
import AboutPage from "@/components/AboutPage";
import OurClientPage from "@/components/OurClientPage";
import { Carousel, Tooltip } from "antd";
import "./globals.css";
import usePage from "./usePage";

const titlePage = ["Home", "About", "Our Client"];

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
              className={`w-3 h-3 ml-4 rounded-full hover:cursor-pointer ${
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
