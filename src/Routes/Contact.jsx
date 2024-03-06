import React from "react";

function Contact() {
  return (
    <div className="h-[620px] bg-[#f1ef21]">
      <h2 className="text-center text-5xl py-[30px] font-bold">Contact Us</h2>
      <div className="w-[450px]  h-[450px] bg-black py-[80px] mx-auto">
        <form className="block">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-[400px] mx-6 my-[20px]"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[400px] mx-6 my-[20px]"
          />
          <input
            type="number"
            placeholder="Enter your number"
            className="w-[400px] mx-6 my-[20px]"
          />
          <input
            type="age"
            placeholder="Enter your age"
            className="w-[400px] mx-6 my-[20px]"
          />
          <button className="bg-white mx-[150px] px-[50px] py-[5px] rounded font-bold">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
