"use client";
import HomePage from "@/components/HomePage";
import AboutPage from "@/components/AboutPage";
import OurClientPage from "@/components/OurClientPage";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

export default function Home() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, delay: 0 });
  return (
    <main ref={scrollRef} className="app snap-y">
      <HomePage />
      <AboutPage />
      <OurClientPage />
    </main>
  );
}
