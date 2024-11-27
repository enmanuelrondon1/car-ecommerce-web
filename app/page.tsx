"use client";
import { About } from "@/components/Shared/About";
import AboutCarSales from "@/components/Shared/AboutCarSales/AboutCarSales";
import { SliderCarousel } from "@/components/Shared/SliderCarousel";
import ChatWidget from "@/components/Shared/ChatWidget/ChatWidget";
import { Hero } from "@/components/Shared/Hero";
import { Navbar } from "@/components/Shared/Navbar";
import { Services } from "@/components/Shared/Services";
import { useEffect } from "react";
import { FrontPage } from "@/components/Shared/FrontPage";
import { Testimonial } from "@/components/Shared/Testimonial";
import { AppStoreBanner } from "@/components/Shared/AppStoreBanner";
import Contact from "@/components/Shared/Contact/Contact";
import { Footer } from "@/components/Shared/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { Products } from "@/components/Shared/Products";
import { SliderBrands } from "@/components/SliderBrands";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden ">
      <Navbar />
      <FrontPage />
      <SliderBrands />
      <Hero />
      <About />
      <AboutCarSales />
      <Services />
      <ChatWidget />
      <SliderCarousel />
      <Products />
      <Testimonial />
      <AppStoreBanner />
      <Contact />
      <Footer />
    </div>
  );
}
