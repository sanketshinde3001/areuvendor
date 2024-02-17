import React from "react";
import Image from "next/image";
import Sec1_Cards from "./Sec1_Cards";

const Section1_inside1 = () => {
  return (
    <>
      <div className="font-serif w-full  flex justify-center items-center">
        <div className="relative h-[500px] w-[94%] flex justify-center items-center gap-10 bg-orange-50 rounded-3xl pl-8 mt-10 mb-20 pr-8 max-lg:h-[500px]  max-lg:pl-5 max-lg:pr-5 max-md:h-[700px] max-md:flex max-md:flex-col max-md:pl-4 max-md:pr-4">
          <div className="flex w-full flex-col items-start  gap-10 max-sm:flex-col max-sm:gap-10 ">
            <strong className="text-5xl max-sm:text-4xl ">Our customers</strong>

            <div className="w-full  text-lg max-sm:w-full max-sm:pr-0">
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
          </div>
          <div className=" flex justify-center items-center max-md:flex max-md:items-center z-10 right-0 w-full max-sm:w-full">
            <Image
              className="rounded-3xl "
              src="https://pros.weddingpro.com/wp-content/uploads/2023/10/1_hero-3.png"
              objectFit="cover"
              width={750}
              height={366}

              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              // alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="2xl:ml-20 2xl:mr-20 max-xl:ml-8 max-xl:mr-8 max-md:ml-8 max-md:mr-8">
        <strong className="text-4xl bottom-64 font-semibold pt-30   ">
          Discover how WeddingPro can grow your business
        </strong>

        <Sec1_Cards />
      </div>
    </>
  );
};

export default Section1_inside1;
