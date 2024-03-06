import React from "react";
import Prod1 from "../Assets/prod1.jpeg";
import Prod2 from "../Assets/prod2.jpeg";
import Prod3 from "../Assets/prod3.jpeg";

function Product() {
  return (
    <div className="md:h-[620px] bg-[#f1ef21]">
      <h2 className="text-center text-5xl md:py-[20px]  font-bold">
        Our Product
      </h2>
      <div className="max-w-[1240px] md:py-[10px] mx-auto md:flex md:flex-row flex-col justify-between ">
        <div className="md:w-[400px] w-[70%] mx-auto my-[50px] md:h-[400px] md:h-[400px] bg-white hover:scale-105 duration-500 text-center py-[50px]">
          <img src={Prod1} alt="" className="md:w-[250px] md:h-[250px] mx-auto" />
          <h4 className="py-[20px] text-2xl font-bold">Price:-2$</h4>
        </div>
        <div className="md:w-[400px] w-[70%] mx-auto my-[50px] md:h-[400px] bg-white hover:scale-105 duration-500 text-center py-[50px]">
          <img src={Prod2} alt="" className="md:w-[250px]  md:h-[250px]  mx-auto" />
          <h4 className="py-[20px] text-2xl font-bold">Price:-3$</h4>
        </div>
        <div className="md:w-[400px] w-[70%] mx-auto my-[50px] md:h-[400px] bg-white hover:scale-105 duration-500 text-center py-[50px]">
          <img src={Prod3} alt="" className="md:w-[250px] md:h-[250px] mx-auto" />
          <h4 className="py-[20px] text-2xl font-bold">Price:-1$</h4>
        </div>
      </div>
    </div>
  );
}

export default Product;
