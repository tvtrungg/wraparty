"use client";
import HomePage from "@/components/HomePage";
import { Carousel, Tooltip } from "antd";
import usePage from "./usePage";
import "./globals.css";

const titlePage = ["Home", "Part 1", "Part 2", "Part 3", "Part 4"];

const renderTitleTooltip = (title: string) => {
  return <span className="text-neon-red text-lg">{title}</span>;
};

export default function Home() {
  const { currentPage, sliderRef, handleWheel, beforeChange } = usePage();

  return (
    <main onWheel={handleWheel}>
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
        <div className="w-screen h-screen bg-black text-white">part 1</div>
        <div className="w-screen h-screen bg-black text-white">part 2</div>
        <div className="w-screen h-screen bg-black text-white">part 3</div>
        <div className="w-screen h-screen bg-black text-white">part 4</div>
      </Carousel>
    </main>
  );
}
