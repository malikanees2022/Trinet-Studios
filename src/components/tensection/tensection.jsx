import React from "react";
import Logo from "../../assets/logo2.png";
import Side1 from "../../assets/side1.png";
import Side2 from "../../assets/side2.png";
const Tensection = () => {
  return (
    <div className="bg-white mt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
        <div className="lg:h-[800px] md:h-[600px] hidden md:block">
          <img src={Side1} alt="" className="h-full w-full" />
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className="md:h-60 md:w-72 h-40 w-60 mx-auto">
            <img src={Logo} alt="" className="h-full w-full" />
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-5xl md:text-3xl font-bold mt-4 text-center px-4 sm:px-4 md:px-1">
            {" "}
            Elevate Your Brand with TriNet Studios
          </h1>
          <p className="text-center mt-4 px-4 sm:px-4 md:px-1">
            Ready to redefine your brand experience? Let’s collaborate and
            create something extraordinary together. Contact TriNet Studios
            today to embark on a journey of unparalleled creativity and success.
            Your brand deserves the spotlight – let us help you claim it!
          </p>
        </div>
        <div className="lg:h-[800px] md:h-[600px] hidden md:block">
          <img src={Side2} alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Tensection;
