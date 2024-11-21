"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import car1 from "../../../public/car4.jpg";
import car2 from "../../../public/car7.jpg";
import car3 from "../../../public/car8.jpg";
import car4 from "../../../public/car9.jpg";

import Image from 'next/image'


const cars = [
  {
    id: 1,
    name: "Tesla Model S",
    price: "$79,990",
    image: car1,
    features: ["Electric", "Autopilot", "0-60 mph in 3.1s"],
  },
  {
    id: 2,
    name: "BMW M3 Competition",
    price: "$72,800",
    image: car2,
    features: ["503 HP", "Twin-Turbo", "0-60 mph in 3.8s"],
  },
  {
    id: 3,
    name: "Porsche 911 GT3",
    price: "$161,100",
    image: car3,
    features: ["502 HP", "Naturally Aspirated", "0-60 mph in 3.2s"],
  },
  {
    id: 4,
    name: "Mercedes-AMG GT R",
    price: "$162,900",
    image: car4,
    features: ["577 HP", "Handcrafted V8", "0-60 mph in 3.5s"],
  },

]

export const SliderCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length)
  }

  return (
    <>
   
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl shadow-2xl mt-8 mb-16 bg-white">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[600px]"
        >
          <Image
            src={cars[currentIndex].image}
            alt={cars[currentIndex].name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-4xl font-bold mb-2">{cars[currentIndex].name}</h2>
            <p className="text-2xl font-semibold mb-4">{cars[currentIndex].price}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {cars[currentIndex].features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="bg-white/20 text-white">
                  {feature}
                </Badge>
              ))}
            </div>
            <Button className="bg-white text-black hover:bg-gray-200">
              Schedule a Test Drive
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
        onClick={prevSlide}
        aria-label="Previous car"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
        onClick={nextSlide}
        aria-label="Next car"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {cars.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </>

  )
}