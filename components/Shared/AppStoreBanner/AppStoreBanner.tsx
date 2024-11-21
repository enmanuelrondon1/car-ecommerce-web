import React from "react";

const logos = [
  { src: "https://www.auraui.com/logos/logo.svg", alt: "Another Logo" },
  { src: "https://www.auraui.com/logos/logo2.svg", alt: "Another Logo 2" },
  { src: "https://www.auraui.com/logos/logo1.svg", alt: "Another Logo 1" },
  { src: "https://www.auraui.com/logos/logo4.svg", alt: "Another Logo 4" },
  { src: "https://www.auraui.com/logos/kirak.png", alt: "Kirak logo" },
  { src: "https://www.auraui.com/logos/logo10.png", alt: "Another logo" },
  { src: "https://www.auraui.com/logo-dark.png", alt: "Auraui Dark logo" },
  { src: "https://www.auraui.com/logos/microsoft.png", alt: "Microsoft logo" },
];

export const AppStoreBanner = () => {
  return (
    <section className="py-12 bg-purple-300 dark:bg-gray-700 sm:py-16 lg:py-20 xl:py-24 mb-5">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center sm:text-left">
            <p data-aos="fade-up" className="text-base font-normal text-white sm:text-lg">
              Pay sure you're using the right app
            </p>
            <h2 data-aos="fade-up" className="mt-4 text-3xl font-normal text-white sm:mt-6 sm:text-4xl lg:text-5xl">
              Choose the best app for your needs and download it now.
            </h2>
          </div>

          <hr className="mt-8 border-gray-800 sm:mt-12" />

          <div data-aos="zoom-in" className="grid grid-cols-2 gap-8 mt-8 sm:grid-cols-4 sm:gap-12 sm:mt-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                className="object-contain h-8 max-w-full sm:h-10 w-44"
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


