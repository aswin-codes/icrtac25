import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Cal from '../../assets/calendar.png';
import Clo from '../../assets/clock.png';
import VIT from '../../assets/vit.jpg';
import VITL from '../../assets/vit.png';
import UI from '../../assets/ui.png';
import UPM from '../../assets/upm.png';
import BIS from '../../assets/bis.png';
import SERB from '../../assets/serb_logo.png';
import DST from '../../assets/dst_logo.png'
import Crystal from "../../assets/crystal_ju.png"

const Home = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            reset: false,
            opacity: 0,
        });

        sr.reveal('.calendar', { delay: 200 });
        sr.reveal('.clock', { delay: 400 });
        sr.reveal('.title', { delay: 600 });
        sr.reveal('.subtitle', { delay: 800 });
        sr.reveal('.organized', { delay: 1000 });
        sr.reveal('.logos', { delay: 1200 });
        sr.reveal('.image', { delay: 1400 });
        sr.reveal('.logos-row-1', { delay: 1600 });
        sr.reveal('.logos-row-2', { delay: 1800 });
        sr.reveal('.hl', { delay: 2000 });
    }, []);

    const handleRedirect = (url) => window.open(url)

    return (
        <div className=''>
            <div className='px-6 sm:px-10 lg:px-20 py-4 sm:py-0 flex flex-wrap gap-5 w-full max-w-[1440px] mx-auto mb-16 '>
                <div className='flex-1 flex-col flex justify-center min-w-full sm:min-w-[450px] mt-5'>
                    
                    <div className='flex flex-row items-center justify-between px-4'>
                        <div className='flex gap-2 items-center calendar'>
                            <img className='w-6 h-6 sm:w-8 sm:h-8' src={Cal} alt='calendar' />
                            <p className='text-xs sm:text-lg font-semibold'>14<sup>th</sup> & 15<sup>th</sup> November 2025</p>
                        </div>
                        <div className='flex gap-2 items-center clock'>
                            <img className='w-6 h-6 sm:w-8 sm:h-8' src={Clo} alt='clock' />
                            <p className='text-xs sm:text-lg font-semibold'>8:00 AM</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-2 mt-4'>
                        <img src={Crystal} alt='Crystal' className='h-24 logos' />
                        <img src={SERB} className='h-24 logos'/>
                        <img src={DST} className='h-24 logos'/>
                    </div>
                    <div className='flex justify-center mb-5 text-purple-800 font-semibold logos'>
                        DST - SERB, New Delhi Sponsored
                    </div>
                    <div className='mt-2 mx-auto sm:px-4 title'>
                        <p className='text-lg sm:text-2xl text-center text-purple-800 font-semibold'>
                            8th International Conference on Recent Trends in Advanced Computing (ICRTAC'25)
                        </p>
                    </div>
                    <div className='mt-4 sm:mt-6 subtitle'>
                        <p className='text-center text-base sm:text-xl font-semibold'>
                            Theme: Automating Sustainability - Bridging SDG Goals with Recent Trends in Advanced Computing
                        </p>
                    </div>
                    <div className='mt-5 sm:mt-10 organized'>
                        <p className='mx-auto w-fit font-semibold text-base sm:text-xl'>Organized By</p>
                    </div>
                    <div className='mt-2 font-semibold text-base sm:text-lg w-5/6 mx-auto text-center logos'>
                        <p className='text-purple-800'>
                            School of Computer Science and Engineering (SCOPE), Vellore Institute of Technology, Chennai, India
                        </p>
                        <p className='text-center mt-1'>In Association With</p>
                        <p className='text-mred mt-1'>
                            Faculty of Computer Science and Information Technology (FSKTM), Universiti Putra Malaysia (UPM), Malaysia
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex-col flex justify-center min-w-full sm:min-w-96 sm:mt-0 mt-5">
                    <div className="flex justify-center mb-4">
                        <a 
                            href="/2024" 
                            className="text-sm hl sm:text-base text-purple-600 hover:text-purple-800 transition-colors duration-300 flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                            Visit ICRTAC'24 Website
                        </a>
                    </div>
                    <div className='my-2 mx-3 sm:mx-10 image'>
                        <img src={VIT} alt='VIT' className='h-80 w-full object-cover rounded-lg' />
                    </div>
                    <div className='flex justify-around px-10 mt-10 items-center logos-row-1'>
                        <div onClick={() => handleRedirect('https://chennai.vit.ac.in/')}><img src={VITL} alt='VIT Logo' className='object-contain h-16 sm:h-20' /></div>
                        <div onClick={() => handleRedirect('https://www.upm.edu.my/?L=en')}><img src={UPM} alt='BIS Logo' className='object-contain h-16 sm:h-20' /></div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
