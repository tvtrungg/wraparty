"use client";
import HomePage from "@/components/HomePage";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useRef } from "react";

export default function Home() {
  const sliderRef = useRef<CarouselRef>(null);

  return (
    <main
      onWheel={(e) => {
        if (e.ctrlKey) {
          e.preventDefault();
          return;
        }
        if (e.deltaY > 0) {
          sliderRef.current?.next();
        } else {
          sliderRef.current?.prev();
        }
      }}
    >
      <Carousel ref={sliderRef} vertical infinite={false}>
        <HomePage />
        <div>1</div>
      </Carousel>
    </main>
  );
}
