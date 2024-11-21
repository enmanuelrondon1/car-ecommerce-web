import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

// Define common styles
const style = {
  commonInputStyles:
    "block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500",
  commonButtonStyles:
    "inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md focus:outline-none bg-orange-500 hove:bg-orange-600",
  commonSectionStyles: "py-10 sm:py-16 lg:py-24",
  commonContainerStyles: "max-w-6xl px-4 mx-auto sm:px-6 lg:px-8",
  commonTitleStyles:
    "text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl",
  commonTextStyles:
    "max-w-xl mx-auto mt-4 text-base leading-relaxed text-white",
};

const StarRating = () => (
  <div className="flex items-center">
    {[...Array(5)].map((_, index) => (
      <FaStar key={index} className="w-6 h-6 text-yellow-400" />
    ))}
  </div>
);

const Testimonial = () => (
  <div>
    <StarRating />
    <blockquote className="mt-6">
      <p className="text-lg leading-relaxed text-white">
        Rental cars are a great way to travel. EnmanuelWeb is a great website to
        rent cars. It is easy to use and has a lot of information. I highly
        recommend it.
      </p>
    </blockquote>
    <div className="flex items-center mt-8">
      <div className="w-12 h-12 relative rounded-full overflow-hidden">
        <Image
          src="/website/enmanuel-foto.jpeg"
          alt="Babu Bhaiya"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="ml-4">
        <p className="text-base font-semibold text-white">Enmanuel Web</p>
        <p className="mt-px text-sm text-gray-400">UI Developer</p>
      </div>
    </div>
  </div>
);

const Form = () => {
  const commonInputStyles =
    "block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none dark:focus:ring-orange-500 focus:ring-orange-500 focus:border-orange-500 caret-orange-500";
  const commonButtonStyles =
    "inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md focus:outline-none hover:bg-orange-600 focus:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:bg-orange-600 cursor-pointer";

  return (
    <div
      data-aos="fade-up"
      aos-delay="500"
      aos-duration="1000"
      className="overflow-hidden bg-white rounded-md"
    >
      <div className="p-6 sm:p-10">
        <h3 className="text-3xl font-semibold text-black">Get a free quote</h3>
        <p className="mt-4 text-base text-gray-600">
          Fill all details about your Project
        </p>
        <form action="#" method="POST" className="mt-4">
          <div className="space-y-6">
            {["Your name", "Email address", "Project brief"].map(
              (label, index) =>
                label === "Project brief" ? (
                  <textarea
                    key={index}
                    name={label}
                    id={label}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    className={`${commonInputStyles} resize-y`}
                    rows={4}
                  />
                ) : (
                  <input
                    key={index}
                    type="text"
                    name={label}
                    id={label}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    className={commonInputStyles}
                  />
                )
            )}
            <div>
              <div className={commonButtonStyles}>Get Free Quote</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section
      className={`bg-gray-400 dark:bg-gray-900 ${style.commonSectionStyles} `}
    >
      <div className={style.commonContainerStyles}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          <div className="flex flex-col justify-between lg:py-5">
            <div>
              <h2 data-aos="fade-up" className={style.commonTitleStyles}>
                It&apos;s time to build something exciting!
              </h2>
              <p data-aos="fade-up" className={style.commonTextStyles}>
                We are a car rental company that offers a wide range of vehicles
                for rent. Our goal is to provide customers with a hassle-free
                and convenient rental experience.
              </p>
            </div>
            <div data-aos="zoom-in" className="hidden md:mt-auto md:block">
              <Testimonial />
            </div>
          </div>
          <div data-aos="fade-up" className="lg:pl-12">
            <Form />
          </div>
          <div data-aos="fade-up" className="md:hidden">
            <Testimonial />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
