import React from "react";
import Founder from "../Assets/founder.jpeg";
function About() {
  return (
    <div className="md:h-[620px] bg-[#f1ef21]">
      <h2 className="text-center text-5xl py-[20px] font-bold">About Us</h2>
      <div className="max-w-[1240px] flex flex-col mx-[80px] text-center  md:flex-row py-[20px]  justify-between">
        <div className="md:w-[45%]">
          <h3 className="text-4xl font-bold md:py-[10px] py-[20px] text-white">Founder</h3>
          <img src={Founder} alt="" className="w-[100%] rounded-xl" />
        </div>
        <div className="md:w-[45%]">
          <h3 className="text-4xl font-bold md:py-[10px] py-[20px] text-white">Wikipedia</h3>
          <p className="text-base font-bold">
            Patanjali Ayurved is an Indian multinational conglomerate holding
            company,based in Haridwar.It was founded by Ramdev and Balkrishna in
            2006.Its office is in Delhi, with manufacturing units and
            headquarters in the industrial area of Haridwar.The company
            manufactures cosmetics, ayurvedic medicine,personal care and food
            products.The CEO of the company,with a 94-percent share hold,is
            Balkrishna.Ramdev represents the company and makes strategic
            decisions.Ramdev and Balkrishna established Patanjali Ayurved in
            2006.Balkrishna owns 94 percent of the company, and the remainder is
            dispersed among other individuals.It was valued at ₹3,000 crore
            (equivalent to ₹43 billion or US$540 million in 2023).Patanjali
            estimated its annual turnover for the 2016–17 fiscal year at ₹10,216
            crore (US$1.3 billion). According to a report by India Infoline
            (IIFL), at least 13 listed companies would be affected by
            Patanjali's success; they included Hindustan Unilever, Colgate,
            Dabur, ITC, and Godrej Consumer Products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
