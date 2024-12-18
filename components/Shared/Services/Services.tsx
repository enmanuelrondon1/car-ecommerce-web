import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  FaCameraRetro,
  FaGit,
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaTag,
} from "react-icons/fa";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "The customer himself is a lot of money to be chased, adipisicing.",
    aosDelay: "0",
  },
  {
    name: "Great Deals",
    icon: (
      <FaShoppingCart className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Find the best deals on our platform, consectetur.",
    aosDelay: "100",
  },
  {
    name: "Exclusive Offers",
    icon: (
      <FaStar className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Unlock exclusive offers tailored just for you, adipisicing elit.",
    aosDelay: "200",
  },
  {
    name: "Customer Favorites",
    icon: (
      <FaHeart className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Discover what our customers love the most, sed do eiusmod tempor.",
    aosDelay: "300",
  },
  {
    name: "Limited Time Discounts",
    icon: (
      <FaTag className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Don't miss out on our limited time discounts, ut labore et dolore.",
    aosDelay: "400",
  },
  {
    name: "Top Rated",
    icon: (
      <FaGit className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Explore the top-rated items by our customers, labore.",
    aosDelay: "400",
  },
];
export const Services = () => {
  const [showMore, setShowMore] = useState(3);

  const handleShowMore = () => {
    setShowMore(showMore + 3);
  };
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif "
            >
              Why Choose Us?
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {skillsData.slice(0, showMore).map((skills, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={skills.aosDelay}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg "
              >
                <div className="grid place-items-center">{skills.icon}</div>
                <h1 className="text-2xl font-bold">{skills.name}</h1>
                <p>{skills.description}</p>
                <a
                  href={skills.link}
                  className="inline-block mx-4 text-lg font-semibold py-3 text-primary group-hover:text-black duration-300 "
                >
                  Learn more
                </a>
                <Button
                  className="bg-primary text-white font-semibold px-6 py-2 rounded-full hover:bg-primary-dark transition z-20 mt-3 mx-5"
                  onClick={handleShowMore}
                >
                  Show More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
