import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import VIT from '../../assets/vit1.png';
import UPM from "../../assets/upm.png";
import UI from "../../assets/ui.png";
import BIS from "../../assets/bis.png";
import Springer from "../../assets/springer.png";
import Logo from "../../assets/logo.png";

const About = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `./icrtac_brochure.pdf`; // Path to the PDF file
        link.download = 'icrtac_brochure.pdf'; // Name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            reset: false,
            opacity: 0,
        });

        const revealConfig = [
            { className: '.about-content', delay: 200 },
            { className: '.objectives-content', delay: 400 },
            { className: '.tracks-content', delay: 600 },
            { className: '.about-vit-content', delay: 800 },
            { className: '.publishing-content', delay: 1000 },
            { className: '.dates-content', delay: 1200 },
            { className: '.brochure-content', delay: 1400 },
        ];

        revealConfig.forEach(config => {
            sr.reveal(config.className, { delay: config.delay });
        });
    }, []);

    const handleRedirect = (url) => window.open(url);

    return (
        <section id="about" className='bg-purple-100'>
            <div className='px-5 sm:px-5 lg:px-10 py-5 sm:py-10 w-full max-w-[1440px] mx-auto'>
                <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>About VIT</h1>
                <hr className='h-[2px] bg-purple-700' />
                <div className='flex flex-col lg:flex-row gap-5  about-vit-content'>
                    <div className='p-1 basis-2/3'>
                        <p className='mt-3'>
                            VIT Chennai is a globally engaged, competitive research enriched campus, strategically located in a city that is one of the biggest automotive and IT hubs in Tamil Nadu. Its motto is to respond by rearing students to major industrial, social, economic, and environmental demands and challenges of cosmopolitan cities in India and the world in general. This eight-year-old campus offers undergraduate, postgraduate, and research programmes and draws smart students from every state in India through a highly competitive examination. <span className='font-bold cursor-pointer' onClick={() => handleRedirect('https://chennai.vit.ac.in/')}>Read more...</span>
                        </p>
                    </div>
                    <div className='basis-1/3 flex items-center justify-center'>
                        <img src={VIT} alt='VIT' className='mt-3 w-full object-cover' />
                    </div>
                </div>
                <h1 className='text-xl sm:text-2xl font-semibold text-purple-800 mt-5  about-vit-content'>About Association Partners</h1>
                <hr className='h-[2px] bg-purple-700' />
                <div className='flex flex-col gap-5  about-vit-content'>
                    <div className='flex-1'>
                        <div className='mt-4'>
                            <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>Universiti Putra Malaysia (UPM)</h1>
                            <hr className='h-[2px] bg-purple-700' />
                            <div className='flex  flex-col lg:flex-row gap-10'>
                                <p className='mt-2 basis-2/3'>
                                    UPM is the only university that leads in the field of agriculture, which is not limited to food crops, including animal husbandry, veterinary medicine, and forestry, in addition to exploring disciplines that are relevant to the needs of society and the country. Faculty of Computer Science and Information Technology is located next to the lake located at UPM's Main Gate. This faculty consists of four departments namely the Department of Computer Science, Department of Multimedia, Department of Software Engineering and Information System, and the Department of Communication Technology and Network. Faculty of Computer Science and Information Technology is the first faculty to introduce "Green IT".<span className='font-bold cursor-pointer' onClick={() => handleRedirect('https://www.upm.edu.my/?L=en')}> Read more...</span>
                                </p>
                                <div ><img src={UPM} className='h-28 object-contain mx-auto mt-3 basis-1/3' alt='UPM Logo' />
                                    <p className="text-mred italic text-sm mx-auto">Faculty of Computer Science and Information Technology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='mt-4  about-vit-content'>
                            <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>Bureau of Indian Standards (BIS)</h1>
                            <hr className='h-[2px] bg-purple-700' />
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <p className='mt-2 basis-2/3'>
                                    BIS is the National Standard Body of India established under the BIS Act 2016 for the harmonious development of the activities of standardization, marking, and quality certification of goods and for matters connected therewith or incidental thereto. BIS has been providing traceability and tangibility benefits to the national economy in a number of ways by providing safe reliable quality goods; minimizing health hazards to consumers; promoting exports and import substitutes; control over proliferation of varieties etc. through standardization, certification, and testing.<span className='font-bold cursor-pointer' onClick={() => handleRedirect('https://www.bis.gov.in/')}> Read more...</span>
                                </p>
                                <img src={BIS} className='h-28 object-contain mx-auto mt-3 basis-1/3' alt='BIS Logo' />
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='mt-4  about-vit-content'>
                            <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>Ui Path</h1>
                            <hr className='h-[2px] bg-purple-700' />
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <p className='mt-2 basis-2/3'>
                                    Automation and AI offer unprecedented opportunities to innovate. UiPath enables our customers to tap into this power with our industry-leading AI-powered enterprise automation technology. We are committed to promoting and maintaining an ethical workplace, protecting our customers data, managing risks, and building ongoing stakeholder value through the practice of good governance and oversight.<span className='font-bold cursor-pointer' onClick={() => handleRedirect('https://www.uipath.com/')}> Read more...</span>
                                </p>
                                <img src={UI} className='h-24 object-contain mx-auto mt-3 flex items-center justify-center basis-1/3' alt='UI Path Logo' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-5 sm:px-5 lg:px-10 py-5 sm:py-0 flex flex-col lg:flex-row gap-5 w-full max-w-[1440px] mx-auto'>
                <div className='flex-1'>
                    <div className='p-1 about-content'>
                        <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>About the Conference</h1>
                        <hr className='h-[2px] bg-purple-700' />
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <p className='mt-2 basis-2/3'>
                                The 7th International Conference on Recent Trends in Advanced Computing (ICRTAC'24), scheduled for November 14th and 15th, 2024, at the Vellore Institute of Technology (VIT) Chennai, India, is centered on the theme "Automating Sustainability: Bridging SDG Goals with Recent Trends in Advanced Computing." This event is dedicated to harnessing advanced computing technologies to tackle the United Nations' Sustainable Development Goals (SDGs), aiming for global progress in ending poverty and ensuring environmental protection by 2030. With a comprehensive agenda covering areas such as Blockchain, Cryptocurrency, 5G/6G Wireless, Drones, AI/ML, Quantum Computing, AR/VR, Digital Twin, Smart Cities, Fog/Edge Computing, Cyber security, automation, and Industry 4.0, the conference seeks to pioneer advanced algorithmic approaches surpassing classical techniques. It serves as an interdisciplinary platform for researchers, practitioners, and educators to deliberate on innovations in advanced computing, propose sustainable solutions to real-world challenges, explore novel automation methods, and integrate cutting-edge technologies with Robotic Process Automation to align SDG goals with recent trends in advanced computing, underscoring the imperative of automating sustainability for global development. In partnership, UPM, BIS, and UiPath converge to champion sustainable development through their expertise in agricultural sciences, standardization, quality certification, and AI-powered enterprise automation, with a shared commitment to driving impactful solutions and fostering innovation on a global scale.
                            </p>
                            <img src={Logo} className='h-64 object-contain flex items-center justify-center mx-auto mt-3 basis-1/3' alt='ICRTAC Logo' />
                        </div>
                    </div>
                    <div className='p-1 mt-10 objectives-content'>
                        <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>Objectives</h1>
                        <hr className='h-[2px] bg-purple-700' />
                        <ul className='list-disc list-inside mt-3'>
                            <li>Explore the potential applications of advanced techniques in computing to provide innovative solutions</li>
                            <li>Provide an interdisciplinary platform for researchers, practitioners, and educators to discuss contemporary innovations in advanced computing and suggest sustainable solutions to real world problems</li>
                            <li>Investigate novel methods in automation and intelligent techniques, integrating cutting-edge computing technologies with the use of Intelligent Process Automation</li>
                            <li>Bridge SDG goals and Indian Standards with recent trends in advanced computing, emphasizing the importance of automating sustainability for global development</li>
                        </ul>
                    </div>
                    <div className='p-1 mt-10 tracks-content'>
                        <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>Tracks</h1>
                        <p className='text-base'>The seventh edition of ICRTAC'24 invites submissions of original unpublished technical papers on the following topics, but not limited to:</p>
                        <hr className='h-[2px] bg-purple-700' />
                        <p className='font-bold mt-1'>Artificial Intelligence:</p>
                        <ol className='list-decimal list-inside '>
                            <li>Natural Language Processing & LLM</li>
                            <li>Generative AI</li>
                            <li>Creative AI</li>
                            <li>Machine Learning & Hybrid Systems</li>
                        </ol>
                        <p className='font-bold mt-1'>Automation:</p>
                        <ol className='list-decimal list-inside '>
                            <li>Robotic Process Automation
</li>
                            <li>Cognitive Automation</li>
                            <li>Cyber Security Automation</li>
                            <li>Intelligent Document, Image & Video processing</li>
                        </ol>
                        <p className='font-bold mt-1'>Emerging Technologies:</p>
                        <ol className='list-decimal list-inside '>
                            <li>Digital Twin Technologies
</li>
                            <li>Drones and Robotic Technology</li>
                            <li>Blockchain Technology & Cryptocurrency</li>
                            <li>5G and 6G Wireless Technology</li>
                            <li>Augmented Reality and Virtual Reality</li>
                            <li>Quantum Computing in STEM</li>
                        </ol>
                        <p className='font-bold mt-1'> BIS standards for SDG based Applications:</p>
                        <ol className='list-decimal list-inside '>
                            <li>Smart Cities
</li>
                            <li>Health care</li>
                            <li> Climate Change</li>
                        </ol>
                    </div>
                    <div className='p-1 publishing-content mt-4'>
                        <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>Publishing & Indexing</h1>
                        <hr className='h-[2px] bg-purple-700' />
                        <p className='mt-3'>
                        <b className='font-bold'>ICRTAC24 is planned to publish the proceedings  with Springer in their Communications in Computer and Information Science series (final approval pending) </b>. All accepted and presented papers will be published by CCIS subject to meeting Springer's scope and quality requirements.<b className='font-bold'> Springer CCIS series is indexed in SCOPUS.</b>
                        </p>
                        <div className='mt-3 flex lg:flex-row flex-col justify-around items-center my-2 gap-4'>
                            <img src={Springer} alt='Springer Publications' className='object-contain h-10 sm:h-16' />
                        </div>
                    </div>
                    <section id="previous" className='p-1 publishing-content mt-4'>
                        <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>Previous Proceedings</h1>
                        <hr className='h-[2px] bg-purple-700' />
                        <div className="flex my-10 flex-wrap gap-5 justify-center">

                            <button

                                onClick={() => handleRedirect('https://ieeexplore.ieee.org/xpl/conhome/8672423/proceeding')}
                                className={`font-semibold text-lg bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500 border border-purple-800 rounded-md transition-all duration-200 ease-in-out px-4 py-2`}
                            >
                                ICRTAC'18 <br/> <span className='text-sm'>First edition</span>
                            </button>
                            <button

                                onClick={() => handleRedirect('https://www.proceedings.com/content/053/053716webtoc.pdf')}
                                className={`font-semibold text-lg bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500 border border-purple-800 rounded-md transition-all duration-200 ease-in-out px-4 py-2`}
                            >
                                ICRTAC'19 <br/> <span className='text-sm'>Second edition</span>
                            </button>
                            <button

                                onClick={() => handleRedirect('https://link.springer.com/book/10.1007/978-981-16-6448-9')}
                                className={`font-semibold text-lg bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500 border border-purple-800 rounded-md transition-all duration-200 ease-in-out px-4 py-2`}
                            >
                                ICRTAC'20 <br/> <span className='text-sm'>Third edition</span>
                            </button>
                            <button

                                onClick={() => handleRedirect('https://link.springer.com/book/10.1007/978-981-19-7169-3')}
                                className={`font-semibold text-lg bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500 border border-purple-800 rounded-md transition-all duration-200 ease-in-out px-4 py-2`}
                            >
                                ICRTAC'21 <br/> <span className='text-sm'>Fourth edition</span>
                            </button>
                            <button

                                onClick={() => handleRedirect('https://ieeexplore.ieee.org/xpl/conhome/10480719/proceeding')}
                                className={`font-semibold text-lg bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500 border border-purple-800 rounded-md transition-all duration-200 ease-in-out px-4 py-2`}
                            >
                                ICRTAC'23 <br/> <span className='text-sm'>Sixth edition</span>
                            </button>


                        </div>
                    </section>
                    <div className='p-1 mt-10 brochure-content mb-10'>
                        <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>Brochure</h1>
                        <hr className='h-[2px] bg-purple-700' />
                        <div className='flex justify-center'>
                            <button onClick={() => handleDownload()} className='px-10 py-3 text-xl rounded-md my-3 bg-purple-800 border border-purple-800 font-semibold text-white hover:bg-purple-50 hover:text-purple-800 duration-200 transition-all ease-in-out'>Download now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
