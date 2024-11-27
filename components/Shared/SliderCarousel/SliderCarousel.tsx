import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Image {
  id: number;
  marca: string;
  precio: number;
  image: string;
}


const images: Image[] = [
  {
    id: 1,
    marca: "CORVETTE",
    precio: 20000,
    image: "https://i.ibb.co/PGCrr8h/corvette-9007354-1280.jpg",
  },

  {
    id: 2,
    marca: "LABORGINI",
    precio: 25000,
    image: "https://i.ibb.co/yf92hsX/lamborgini-4565343-1280.jpg",
  },

  {
    id: 3,
    marca: "FERRARI",
    precio: 23000,
    image: "https://i.ibb.co/JzL5CPX/ferrari-3090880-1280.jpg",
  },

  {
    id: 4,
    marca: "TESLA",
    precio: 22000,
    image: "https://i.ibb.co/KGvdYSp/tesla-6889042-1280.jpg",
  },

  {
    id: 5,
    marca: "CHEVROLET",
    precio: 21000,
    image: "https://i.ibb.co/g98Vy0P/chevrolet-7623076-1280.jpg",
  },
];

export const SliderCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handleClick = async (image: Image) => {
    const product = {
      name: image.marca, // Aquí puedes unificar si 'name' es igual a 'marca'
      marca: image.marca,
      image: image.image,
      price: image.precio, // Stripe requiere el precio en centavos
    };
  
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!res.ok) throw new Error(`Error: ${res.statusText}`);
  
      const session = await res.json();
      console.log("Sesión creada:", session);
  
      // Redirigir al checkout de Stripe
      window.location.href = session.url;
    } catch (error) {
      console.error("Error al crear sesión de Stripe:", error);
    }
  };
  

  return (
    <div className="relative w-full h-[32rem] overflow-hidden mt-8 container mx-auto">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Texto superpuesto */}
          <h1 className="absolute bottom-16 left-0 right-0 text-center font-bold text-4xl text-primary bg-opacity-70 bg-white hover:bg-primary hover:text-white p-2 rounded-md shadow-lg">
            {image.marca}
          </h1>

          {/* Imagen */}
          <Image
            src={image.image}
            alt={`Imagen de ${image.marca}`}
            width={600}
            height={600}
            objectFit="cover"
            className="w-full h-full rounded-xl border-2 border-gray-300 bg-gray-200 "
          />

          {/* Precio y Botón */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-4">
            <p className="font-semibold text-lg text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg shadow-md">
              ${image.precio}
            </p>
            <Button
              className="bg-primary text-white font-semibold px-6 py-2 rounded-full hover:bg-primary-dark transition z-20"
              onClick={() => handleClick(image)}
            >
              Buy
            </Button>
          </div>
        </div>
      ))}

      {/* Controles de navegación */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md transition"
          onClick={handlePrevious}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md transition"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// TODO: OTRA FORMA DE HACERLO
// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import car1 from "../../../public/car4.jpg";
// import car2 from "../../../public/car7.jpg";
// import car3 from "../../../public/car8.jpg";
// import car4 from "../../../public/car9.jpg";

// import Image from "next/image";

// import { StaticImageData } from "next/image";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: StaticImageData;
//   features: string[];
// }

// const cars = [
//   {
//     id: 1,
//     name: "Tesla Model S",
//     price: 79.99,
//     image: "https://i.ibb.co/Jpgbphw/propertie4.jpg",
//     features: ["Electric", "Autopilot", "0-60 mph in 3.1s"],
//   },
//   {
//     id: 2,
//     name: "BMW M3 Competition",
//     price: 72.8,
//     image: car2,
//     features: ["503 HP", "Twin-Turbo", "0-60 mph in 3.8s"],
//   },
//   {
//     id: 3,
//     name: "Porsche 911 GT3",
//     price: 161.1,
//     image: car3,
//     features: ["502 HP", "Naturally Aspirated", "0-60 mph in 3.2s"],
//   },
//   {
//     id: 4,
//     name: "Mercedes-AMG GT R",
//     price: 162.9,
//     image: car4,
//     features: ["577 HP", "Handcrafted V8", "0-60 mph in 3.5s"],
//   },
// ];

// export const SliderCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
//   };

//   const handleClick = async (product: Product) => {
//     console.log(product);
//     const res = await fetch("/api/checkout", {
//       method: "POST",
//       body: JSON.stringify(product),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const session = await res.json();
//     window.location = session.url;
//     console.log(session);
//   };

//   return (
//     <>
//       <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl shadow-2xl mt-8 mb-16 bg-white">
//         <AnimatePresence initial={false} custom={currentIndex}>
//           <motion.div
//             key={currentIndex}
//             custom={currentIndex}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="relative w-full h-[600px]"
//           >
//             <Image
//               src={cars[currentIndex].image}
//               alt={cars[currentIndex].name}
//               className="absolute inset-0 w-full h-full object-cover"
//               width={700}
//               height={700}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//             <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//               <h2 className="text-4xl font-bold mb-2">
//                 {cars[currentIndex].name}
//               </h2>
//               <p className="text-2xl font-semibold mb-4">
//                 {cars[currentIndex].price}
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {cars[currentIndex].features.map((feature, index) => (
//                   <Badge
//                     key={index}
//                     variant="secondary"
//                     className="bg-white/20 text-white"
//                   >
//                     {feature}
//                   </Badge>
//                 ))}
//               </div>
//               <Button
//               onClick={() => handleClick(cars[currentIndex] as any)}
//               >Schedule a Test Drive</Button>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         <Button
//           variant="ghost"
//           size="icon"
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
//           onClick={prevSlide}
//           aria-label="Previous car"
//         >
//           <ChevronLeft className="h-6 w-6" />
//         </Button>

//         <Button
//           variant="ghost"
//           size="icon"
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
//           onClick={nextSlide}
//           aria-label="Next car"
//         >
//           <ChevronRight className="h-6 w-6" />
//         </Button>

//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {cars.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full ${
//                 index === currentIndex ? "bg-white" : "bg-white/50"
//               }`}
//               onClick={() => setCurrentIndex(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };
