import image1 from "../../../public/car.png";
import image2 from "../../../public/banner-car.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import * as React from "react";
import { useTheme } from "next-themes";

type Theme = "light" | "dark";

export const Hero = () => {
  const { setTheme } = useTheme();
  const [theme, setThemeState] = React.useState<Theme>("light");

  const handleThemeChange = (
    e: React.MouseEvent<HTMLButtonElement | HTMLImageElement>
  ) => {
    e.preventDefault();
    setThemeState((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      setTheme(newTheme); // Actualiza el contexto global
      return newTheme;
    });
  };

  return (
    <>
      <div className="dark:bg-black dark:text-white duration-300 container mx-auto px-8 py-16 ">
        <div className="container min-h-[620px] flex ">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center ">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="order-1 sm:order-2 "
            >
              <div className="relative w-full max-w-2xl aspect-video">
                {theme === "light" ? (
                  <Image
                    src={image2}
                    alt="Car in light theme"
                    className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
                    onClick={handleThemeChange} // Corrige la función aquí
                  />
                ) : (
                  <Image
                    src={image1}
                    alt="ar in dark theme"
                    className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
                    onClick={handleThemeChange} // Corrige la función aquí
                  />
                )}
              </div>
            </div>
            <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
              <p
                data-aos="fade-up"
                className="text-primary text-2xl font-serif "
              >
                Effortless
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="600"
                className="diseño text-5xl lg:text-7xl font-semibold font-serif "
              >
                Car rental
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="1000"
                className="text-justify"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto quasi vero reiciendis animi ad.
              </p>
              <Button
                data-aos="fade-up"
                data-aos-delay="1500"
                className="rounded-xl bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black "
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
