import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTab } from '../../redux/features/currentTab';


const Navbar = () => {
    const currentTab = useSelector(e => e.currentTab.currentTab);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false); // for menu
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'patrons', 'submission', 'speakers', 'committee', 'travel', 'contact', 'register'];
            let currentSection = '';

            sections.forEach((section) => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {

                    const rect = sectionElement.getBoundingClientRect();
                    if (rect.top <= navbarRef.current.offsetHeight & rect.bottom >= 0) {
                        //console.log(section)
                        currentSection = section;
                    }
                }
            });

            if (currentSection !== '') {
                dispatch(setCurrentTab(currentSection));
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [dispatch]);

    const handleMenuClick = (tab, e) => {
        e.preventDefault(); // Prevent default anchor behavior
        dispatch(setCurrentTab(tab));
        setIsOpen(false); // Close the menu on click

        // Manually scroll to the section
        const section = document.getElementById(tab);
        const offset = navbarRef.current.offsetHeight;
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    };

    return (
        <div ref={navbarRef} className={`sticky top-0 w-full max-w-[1440px] z-10 ${isOpen && 'h-full lg:h-auto'} mx-auto`}>
            <div className='flex backdrop-blur-sm bg-transparent px-5 py-5 items-center justify-between w-full'>
                <div onClick={(e) => handleMenuClick('home', e)} className='flex gap-2 items-center'>

                    <h1 className='font-lilita text-2xl text-purple-800 cursor-pointer' onClick={(e) => handleMenuClick('home', e)}>ICRTAC'24</h1>
                </div>
                <div className='lg:flex gap-4 text-sm items-center hidden'>
                    <a href='#home' onClick={(e) => handleMenuClick('home', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'home' && 'text-purple-800 font-bold'}`}>Home</a>
                    <a href="#about" onClick={(e) => handleMenuClick('about', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'about' && 'text-purple-800 font-bold'}`}>About</a>
                    <a href="#patrons" onClick={(e) => handleMenuClick('patrons', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'patrons' && 'text-purple-800 font-bold'}`}>Patrons</a>
                    <a href="#date" onClick={(e) => handleMenuClick('date', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'date' && 'text-purple-800 font-bold'}`}>Important Dates</a>
                    <a href="#submission" onClick={(e) => handleMenuClick('submission', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'submission' && 'text-purple-800 font-bold'}`}>Submission</a>
                    <a href="#speakers" onClick={(e) => handleMenuClick('speakers', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'speakers' && 'text-purple-800 font-bold'}`}>Keynote Speakers</a>
                    <a href="#committee" onClick={(e) => handleMenuClick('committee', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'committee' && 'text-purple-800 font-bold'}`}>Committee</a>
                    {/* <a href="#travel" onClick={(e) => handleMenuClick('travel', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'travel' && 'text-purple-800 font-bold'}`}>Travel</a> */}
                    <a href="#previous" onClick={(e) => handleMenuClick('previous', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'previous' && 'text-purple-800 font-bold'}`}>Previous Proceedings</a>
                    <a href="#contact" onClick={(e) => handleMenuClick('contact', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'contact' && 'text-purple-800 font-bold'}`}>Contact Us</a>
                    <a href="#register" onClick={(e) => handleMenuClick('register', e)} className='bg-purple-800 px-3 py-1.5 rounded-full text-white hover:rounded-sm border border-purple-800 hover:bg-purple-50 hover:text-purple-800 ease-in-out duration-300'>Register Now</a>
                </div>
                <div className='lg:hidden'>
                    {!isOpen ? (
                        <div onClick={() => setIsOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    ) : (
                        <div onClick={() => setIsOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
            <div onClick={() => setIsOpen(false)} className={`${isOpen ? 'max-h-screen' : 'max-h-0'} h-screen lg:h-0 backdrop-blur-sm ease-in-out duration-300 bg-transparent overflow-hidden`}>
                <div className="flex flex-col px-10 py-5 gap-4 text-xl h-full text-black">
                    <a href='#home' onClick={(e) => handleMenuClick('home', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'home' && 'text-purple-800 font-bold'}`}>Home</a>
                    <a href="#patrons" onClick={(e) => handleMenuClick('about', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'about' && 'text-purple-800 font-bold'}`}>About</a>
                    <a href="#patrons" onClick={(e) => handleMenuClick('patrons', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'patrons' && 'text-purple-800 font-bold'}`}>Patrons</a>
                    <a href="#date" onClick={(e) => handleMenuClick('date', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'date' && 'text-purple-800 font-bold'}`}>Important Dates</a>
                    <a href="#submission" onClick={(e) => handleMenuClick('submission', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'submission' && 'text-purple-800 font-bold'}`}>Submission</a>
                    <a href="#speakers" onClick={(e) => handleMenuClick('speakers', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'speakers' && 'text-purple-800 font-bold'}`}>Keynote Speakers</a>
                    <a href="#committee" onClick={(e) => handleMenuClick('committee', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'committee' && 'text-purple-800 font-bold'}`}>Committee</a>
                    {/* <a href="#travel" onClick={(e) => handleMenuClick('travel', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'travel' && 'text-purple-800 font-bold'}`}>Travel</a> */}
                    <a href="#previous" onClick={(e) => handleMenuClick('previous', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'previous' && 'text-purple-800 font-bold'}`}>Previous Proceedings</a>
                    <a href="#contact" onClick={(e) => handleMenuClick('contact', e)} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'contact' && 'text-purple-800 font-bold'}`}>Contact Us</a>
                    <a href="#register" onClick={(e) => handleMenuClick('register', e)} className='bg-purple-800 px-3 py-1.5 rounded-full text-white hover:rounded-sm border border-purple-800 hover:bg-purple-50 hover:text-purple-800 ease-in-out duration-300'>Register Now</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
