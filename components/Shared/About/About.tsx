import Image from "next/image";
import Car from "../../../public/car1.png";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <Image
              src={Car}
              alt="car"
              className="sm:scale-125 sm:-translate-x-11 max-h-[400px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] "
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6 mx-4 sm:mx-0">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                Save trips and money
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                aliquam cumque tenetur quibusdam officiis soluta dicta. Eum enim
                quisquam facere.
              </p>
              <p data-aos="fade-up" >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                quidem quo, ad dolore nesciunt temporibus voluptate enim. Esse.
              </p>
              <Button data-aos="fade-up" className="button-online">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
