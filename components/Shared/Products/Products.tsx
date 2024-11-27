import Image from "next/image";
import { products } from "../../data/product";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  features: string[];
}

export const Products = () => {
  const [showMore, setShowMore] = useState(3);

  const handleShowMore = () => {
    setShowMore(showMore + 3);
  };

  const handleClick = async (product: Product) => {
    // console.log(products);
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    const session = await res.json();
    console.log(session);
    window.location = session.url;
  };

  return (
    <>
      <div className="container mx-auto px-8 py-16 text-3xl">
        <h1 className="text-center font-bold text-4xl">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {products.slice(0, showMore).map((product) => (
            <div
              key={product.id}
              className=" shadow-md rounded-lg p-4 m-4 flex flex-col"
            >
              {/* <p className="text-gray-700">{product.description}</p> */}
              <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>

              <Image
                src={product.image}
                alt="Product"
                className="w-full h-auto rounded-t-lg aspect-[3/2] "
                width={150}
                height={150}
              />
              <p className="mt-4 mb-4 font-bold text-xl">
                Price: ${product.price}
              </p>
              <div className="flex flex-row justify-center items-center">
                <button
                  className="text-2xl   group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-16 w-full border text-left p-3 text-gray-50  font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur"
                  onClick={() => handleClick(product as any)}
                >
                  Buy
                </button>
              </div>
              <Button
                className="bg-primary text-white font-semibold px-6 py-2 rounded-full hover:bg-primary-dark transition z-20 mt-3"
                onClick={handleShowMore}
              >
                Show More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
