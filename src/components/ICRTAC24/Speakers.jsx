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
        <div className=" flex justify-center items-center">
          <div className="grid gap-4">
            <SpeakerCard
              image={I9}
              special={"Inaugural Chief Guest"}
              name={"Mr. Muralidharan V M,"}
              details={
                <p>
                  Chairman, Ethiraj College for Women,
                  <br /> Chief Operang Officer, Bahwan CyberTek Group
                </p>
              }
            />
            <SpeakerCard
              image={I11}
              special={"Guest of Honor  & Keynote Speaker"}
              name={"Mr. Jayachandran K R,"}
              details={
                <p>
                  Senior Vice-President
                  <br />C5i AI Labs
                  <br />
                  <br />
                  <b>Title:</b> The Dawn of Agentic AI: Shaping Tomorrow's Automation
                </p>
              }
            />
            <SpeakerCard
              image={I10}
              special={"Valedictory Chief Guest"}
              name={"Ms. Gayatri Balakrishnan,"}
              details={
                <p>
                  Director, Software Engineering,
                  <br /> Visa Inc., Bangalore
                </p>
              }
            />

            <SpeakerCard
              image={I1}
              name={"Prof. Dato' Dr. Shamala K. Subramaniam, "}
              details={
                <p>
                  Professor & Dean
                  <br /> Department of Communication Technology and Network,
                  <br /> Faculty of Computer Science and Information Technology,
                  <br /> Universiti Putra Malaysia, Malaysia{" "}
                  <br />
                  <br />
                  <b>Title:</b> The Art and Science of Sculpturing Intelligence into the Ecosystem of Network Tiers
                </p>
              }
            />
            <SpeakerCard
              image={I5}
              name={"Ms. Bhavani G, "}
              details={
                <p>
                  Scientist-F/Senior Director & Head
                  <br /> Chennai Branch Office
                  <br />
                  Bureau of Indian Standards{" "}
                </p>
              }
            />
            <SpeakerCard
              image={I6}
              name={"Mr. Rino John S, "}
              details={
                <p>
                  Scientist-D/Joint Director,
                  <br />Coimbatore Branch Office,
                  <br />Bureau of Indian Standards
                  <br />
                  <br />
                  <b>Title:</b> Exploring Research and Development Opportunities in the<br /> Standards Development Activities of the Bureau of Indian Standards (BIS)
                </p>
              }
            />
            <SpeakerCard
              image={I4}
              name={"Dr. Sudarsun S,"}
              details={
                <p>
                  Chief Scientific Officer and Co-Founder
                  <br /> of Buddi.AI, Chennai, Tamilnadu
                  <br />
                  <br />
                  <b>Title:</b> AI for Healthcare - Opportunities with Clinical
                  Language Understanding
                </p>
              }
            />
            <SpeakerCard
              image={I2}
              name={"Dr. Shriram K Vasudevan, "}
              details={
                <p>
                  FIE, FIETE, SMIEEE
                  <br />
                  Intel Certified Instructor
                  <br />
                  NASSCOM External Maker Expert (XME)
                  <br />
                  Former ACM Distinguished Speaker
                  <br />
                  Intel Champion IoT Innovator
                  <br />
                  NVIDIA DLI Instructor
                  <br />
                  Tech Leader, AI &amp; IoT Innovator, Intel
                  <br />
                  <br />
                  <b>Title:</b> The AI PC - let's unleash the complete AI
                  Potential
                </p>
              }
            />
            <SpeakerCard
              image={I7}
              name={"Ms. Anisha Udayakumar, "}
              details={
                <p>
                  AI Software Evangelist at Intel
                  <br />
                  <br />
                  <b>Title:</b> The AI PC - let's unleash the complete AI
                  Potential
                </p>
              }
            />
            <SpeakerCard
              image={I3}
              name={"Dr. Sumitra S, "}
              details={
                <p>
                  Associate Professor
                  <br />
                  Department of Mathematics
                  <br />
                  Indian Institute of Space Science and Technology
                  <br />
                  Thiruvanandhapuram
                  <br />
                  Kerala
                  <br />
                  <br />
                  <b>Title: </b> Exploring Multi-Task Learning and Multi-View Learning:  Strategies  <br /> for Enhanced Model Performance

                </p>
              }
            />
            <SpeakerCard
              image={I8}
              name={"Mr. Abhijit Sreenivas, "}
              details={
                <p>
                  Senior Program Manager - UiPath Academic Alliance
                  <br />Program | Asia Pacific & Japan
                  <br />
                  <br />
                  <b>Title: </b>Empowering the Future: Building a Workforce <br />Ready for the Age of Automation
                </p>
              }
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
