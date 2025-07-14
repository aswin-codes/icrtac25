import React, { useEffect, useRef } from 'react';
import I1 from '../../assets/vishwanathan.png';
import I2 from '../../assets/sankar.png';
import I3 from '../../assets/sekar.png';
import I4 from '../../assets/selvam.png';
import I5 from '../../assets/sandhya.png';
import I6 from '../../assets/kadhambari.png';
import I7 from '../../assets/kanchana.png';
import I8 from '../../assets/thyagarajan.png';
import I9 from '../../assets/manoharan.png';
import I10 from '../../assets/spt.png';
import I11 from '../../assets/vaidehi.png';
import I12 from '../../assets/kalyani.png';
import I13 from '../../assets/natesan.png';
import ScrollReveal from 'scrollreveal';

const patronsData = [
    { id: 1, name: "Dr. G. Viswanathan", title: "Chancellor, VIT", image: I1 },
    { id: 2, name: "Mr. Sankar Viswanathan", title: "Vice-President, VIT", image: I2 },
    { id: 3, name: "Dr. Sekar Viswanathan", title: "Vice-President, VIT", image: I3 },
    { id: 4, name: "Dr. G V Selvam", title: "Vice-President, VIT", image: I4 },
    { id: 5, name: "Dr. Sandhya Pentareddy", title: "Executive Director, VIT", image: I5 },
    { id: 6, name: "Ms. Kadhambari S. Viswanathan", title: "Assistant Vice President, VIT", image: I6 },
    { id: 7, name: "Dr. V. S. Kanchana Bhaaskaran", title: "Vice-Chancellor, VIT", image: I7 },
    { id: 8, name: "Dr. Thyagarajan T", title: "Pro-Vice Chancellor, VIT", image: I8 },
    { id: 9, name: "Dr. P.K.Manoharan", title: "Additional Registrar, VIT", image: I9 },
    { id: 10, name: "Dr. S.P. Thyagarajan", title: "Distinguished Professor & Advisor to Chancellor, VIT", image: I10 },
    // { id: 11, name: "Dr. Vaidehi Vijayakumar", title: "Professor of Eminence, VIT", image: I11 },
    // { id: 12, name: "Dr. Kalyani A", title: "Advisor, VIT", image: I12 },
    // { id: 13, name: "Mr. Natesan Subramanian", title: "Advisor, VIT", image: I13 },
];

const Patrons = () => {
    const patronsRef = useRef(null);

    useEffect(() => {
        // Initialize ScrollReveal
        ScrollReveal().reveal('.animated', {
            delay: 200,
            distance: '50px',
            duration: 1000,
            origin: 'bottom',
            easing: 'ease',
            interval: 200
        });
    }, []);
    return (
        <section className='' id='patrons'>
            <div ref={patronsRef} className="flex justify-center items-center px-16 py-20  max-md:px-5 w-full max-w-[1440px] mx-auto">
                <div className="flex flex-col items-center  max-w-full w-[1070px] max-md:mt-10">
                    <div     className="text-3xl font-bold text-center text-purple-800">
                        Chief Patron
                    </div>
                    <div className="relative mt-16 animated max-md:mt-10 transition-transform transform hover:scale-105 overflow-hidden">
                        <img
                            loading="lazy"
                            src={patronsData[0].image}
                            className="max-w-full aspect-[0.85] w-[249px] max-h-[400px] max-md:max-h-[300px] object-cover transition-transform transform hover:scale-105 overflow-hidden"
                            alt={patronsData[0].name}
                        />
                    </div>
                    <div className="mt-3.5 text-xl font-bold text-center text-black">
                        {patronsData[0].name}
                    </div>
                    <div className="mt-3 text-lg text-center text-black">{patronsData[0].title}</div>
                    <div className="mt-28 text-3xl font-bold text-center text-purple-800 max-md:mt-10">
                        Patrons
                    </div>
                    <div className="grid grid-cols-3 gap-5 mt-10 max-md:grid-cols-1">
                        {patronsData.slice(1).map((patron) => (
                            <div key={patron.id} className="flex animated flex-col items-center text-center text-black">
                                <div className="relative t overflow-hidden">
                                    <img
                                        loading="lazy"
                                        src={patron.image}
                                        className="w-full aspect-[0.85] max-h-[400px] max-md:max-h-[300px] object-cover transition-transform transform hover:scale-105 overflow-hidden"
                                        alt={patron.name}
                                    />
                                </div>
                                <div className="mt-3.5 text-xl font-bold">{patron.name}</div>
                                <div className="mt-3 text-lg">{patron.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Patrons;
