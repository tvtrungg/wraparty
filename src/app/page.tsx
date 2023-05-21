"use client";
import HomePage from "@/components/HomePage";
import AboutPage from "@/components/AboutPage";
import "./globals.css";

export default function Home() {
  return (
    <main className="app">
      <HomePage />
      <AboutPage />
    </main>
  );
}
