import React from "react";
import Image from "next/image";
import Sec1_Cards from "./Sec1_Cards";

const Section1_inside1 = () => {
  return (
    <>
      <div className="relative font-serif w-full h-screen  flex justify-center top-28">
        <div className="h-[54%] w-[94%] bg-orange-50 rounded-3xl pl-8 pt-16"> 
        
          <strong className="text-5xl">Our customers</strong>

          <div className="flex flex-row item-center">
            <div className="w-1/2 pt-10 text-lg pr-20"> 
              <p>
                At WeddingPro, our customers’ success is our No. 1 priority.{" "}
              </p>
              <br />
              <p>
                From venues and caterers to photographers and wedding planners,
                discover who we work with and how partnering with The Knot and
                WeddingWire results in increased wedding bookings, rave reviews,
                and so much more!
              </p>
            </div>
            <div className="absolute z-10 right-0 top-16">
              <Image
                className="rounded-l-3xl "
                src="https://pros.weddingpro.com/wp-content/uploads/2023/10/1_hero-3.png"
                layout="intrinsic"
                objectFit="cover"
                width={750}
                height={366}
                
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
 
     <div className=" 2xl:ml-20 2xl:mr-20 max-xl:ml-8 max-xl:mr-8 max-md:ml-8 max-md:mr-8">
       <strong className="text-4xl bottom-64 font-semibold ">Discover how WeddingPro can grow your business</strong>

      <Sec1_Cards /> 
     </div>
      
      
    </>
  );
};

export default Section1_inside1;
