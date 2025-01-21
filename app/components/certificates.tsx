import React from "react";

import Image from "next/image";
import zen from "../../public/zen.jpg";

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-16 min-h-[80vh]">
      <h1 className="text-2xl text-gray-600 font-semibold text-center mt-20 dark:text-gray-50">
        My Certificates
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-10 text-gray-600  ">
        {" "}
        <div className="card  bg-white  dark:border dark:border-white/20 dark:text-white  w-80 h-96 shadow-xl hover:scale-105 transition-hover-scale dark:bg-opacity-10">
          {" "}
          <figure className="px-5 pt-5 relative">
            <Image
              alt="aws-certificate"
              src={zen}
              width={290}
              height={250}
              priority={true}
            />{" "}
          </figure>{" "}
          <div className="card-body items-center text-center ">
            <h2 className="card-title ">AWS Foundation Course</h2>
            <p>AWS</p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="card  bg-white  dark:border dark:border-white/20 dark:text-white  w-80 h-96 shadow-xl hover:scale-105 transition-hover-scale dark:bg-opacity-10">
          {" "}
          <figure className="px-5 pt-5 relative">
            <Image
              alt="aws-certificate"
              src={zen}
              width={290}
              height={250}
              priority={true}
            />{" "}
          </figure>{" "}
          <div className="card-body items-center text-center ">
            <h2 className="card-title ">AWS Foundation Course</h2>
            <p>AWS</p>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
}
