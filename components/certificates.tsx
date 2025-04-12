import React from "react";

import Image from "next/image";
import zen from "@/public/zen.jpg";
import aws from "@/public/aws.png";

export default function Certificates() {
  return (
    <section id="certificates" className="flex flex-col justify-center items-center min-h-[100vh]">
      <h1 className="text-2xl text-gray-600 font-semibold text-center mt-20 dark:text-gray-50">
        Certificates
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-10 text-gray-600  ">
        {" "}
        <div className="card  bg-white  dark:border dark:border-white/20 dark:text-white  w-80 h-96 shadow-xl hover:scale-105 transition-hover-scale dark:bg-opacity-10">
          {" "}
          <figure className="px-5 pt-5 relative">
            <Image
              alt="aws-certificate"
              src={aws}
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
        {/* <div className="card  bg-white  dark:border dark:border-white/20 dark:text-white  w-80 h-96 shadow-xl hover:scale-105 transition-hover-scale dark:bg-opacity-10">
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
        </div>{" "} */}
      </div>
    </section>
  );
}
