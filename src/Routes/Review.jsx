import React from "react";
import Review1 from "../Assets/review1.jpg";
import Review2 from "../Assets/review2.jpg";
import Review3 from "../Assets/review3.jpg";

function Review() {
  return (
    <div className="md:h-[620px] bg-[#f1ef21]">
      <h2 className="text-center text-5xl py-[20px] font-bold">Reviewers</h2>
      <div className="max-w-[1240px] py-[10px] mx-auto md:flex md:flex-row flex-col justify-between ">
        <div className="md:w-[400px] w-[70%] mx-auto my-[50px] md:h-[400px] bg-white hover:scale-105 duration-500 text-center py-[50px]">
          <img src={Review1} alt="" className="w-[250px] h-[250px] mx-auto" />
          <div className="py-[20px] text-red-500 text-xl">
            <i className="fas fa-star "></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className="md:w-[400px] w-[70%] mx-auto my-[50px] md:h-[400px] bg-white hover:scale-105 duration-500 text-center py-[50px]">
          <img src={Review2} alt="" className="w-[250px] h-[250px] mx-auto" />
          <div className="py-[20px] text-red-500 text-xl">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className="md:w-[400px] w-[70%] mx-auto my-[50px] md:h-[400px]  bg-white hover:scale-105 duration-500 text-center py-[50px]">
          <img src={Review3} alt="" className="w-[250px] h-[250px] mx-auto" />
          <div className="py-[20px] text-red-500 text-xl">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
