import { motion } from "framer-motion";
import { Car, Users, Award, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import PulsatingButton from "@/components/ui/pulsating-button";

export function PulsatingButtonDemo() {
  return <PulsatingButton>Driving Dreams to Reality</PulsatingButton>;
}


export default function AboutCarSales() {
  return (
    <div className=" dark:bg-dark mt-4 bg-slate-100 ">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center "
        style={{
          backgroundImage: "url('/toyota.jpg')",
          // backgroundSize: "300px",
        }}
      >
        <div className=" absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-3xl font-bold  hover:text-white text-center"
          >
            
            <PulsatingButtonDemo />
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 data-aos="zoom-in" className="text-3xl font-bold mb-4">
            About Our Car Sales
          </h2>
          <p data-aos="fade-up" className="text-gray-600">
            At DriveWell Motors, we have been turning car dreams into reality
            since 1995. Our passion for automobiles and commitment to customer
            satisfaction have made us the go-to destination for car enthusiasts
            and first-time buyers alike. We pride ourselves on offering a wide
            selection of quality vehicles, transparent pricing, and unparalleled
            customer service.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div
          data-aos="zoom-in"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: Car, title: "Cars Sold", value: "10,000+" },
            { icon: Users, title: "Happy Customers", value: "9,500+" },
            { icon: Award, title: "Awards Won", value: "50+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-gray-100 p-6 rounded-lg text-center"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold text-center mb-8"
          >
            Our Values
          </h2>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Quality Assurance",
                description:
                  "Every vehicle undergoes a rigorous inspection process to ensure top-notch quality.",
              },
              {
                title: "Customer First",
                description:
                  "We prioritize our customers' needs and provide personalized service to exceed expectations.",
              },
              {
                title: "Transparency",
                description:
                  "We believe in clear communication and honest pricing, with no hidden fees or surprises.",
              },
              {
                title: "Continuous Improvement",
                description:
                  "We constantly evolve our processes and inventory to meet changing market demands.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 data-aos="fade-up" className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Car?
          </h2>
          <p data-aos="fade-up" className="text-gray-600 mb-8">
            Visit our showroom or give us a call to start your journey towards
            the perfect vehicle.
          </p>
          <div className="flex justify-center gap-2">
            <Button
              data-aos="zoom-i"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full  justify-between flex-wrap items-center gap-5"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Contact Us Now
            </Button>
         
          </div>
        </motion.div>
      </div>
    </div>
  );
}
