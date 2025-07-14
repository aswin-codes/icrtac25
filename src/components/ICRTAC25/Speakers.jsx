import React from "react";
import I1 from "../../assets/shamala.jpg";
import I2 from "../../assets/vasudevan.jpg";
import I3 from "../../assets/sumitra.png";
import I4 from "../../assets/sudarsun.jpg";
import I5 from "../../assets/bhavani.jpg";
import I6 from "../../assets/RJ.jpg";
import I7 from "../../assets/anisha.jpg";
import I8 from "../../assets/abhijith.jpg"
import I9 from "../../assets/murali.jpg";
import I10 from "../../assets/gayatri.jpg"
import I11 from "../../assets/jayac.png"

const SpeakerCard = ({ image, name, details, special }) => {
  return (
    <div className="bg-purple-100 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start gap-4">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover"
      />
      <div className="text-center md:text-left">
        {special && <p className="text-lg font-semibold text-purple-600">{special}</p>}
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm">{details}</p>
      </div>
    </div>
  );
};

const Speakers = () => {
  return (
    <section
      id="speakers"
      class="flex justify-center items-center px-16 py-20 max-md:px-5"
    >
      <div class="flex flex-col  w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
        <h1 className="text-xl sm:text-2xl text-purple-800 font-bold">
          Keynote Speakers
        </h1>
        <div className="h-24 flex justify-center items-center">
          To be announced
        </div>
      </div>
    </section>
  );
};

export default Speakers;
