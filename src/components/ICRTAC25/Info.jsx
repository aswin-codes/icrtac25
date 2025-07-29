import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Info = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      reset: false,
      opacity: 0,
    });

    sr.reveal('.info-title', { delay: 200 });
    sr.reveal('.info-item', { interval: 200 });
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `./author_instructions.doc`; // Path to the PDF file
    link.download = 'author_instructions.doc'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileDownload = (name) => {
    const link = document.createElement('a');
    link.href = `./${name}`;
    link.download = `${name}`
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className='px-5 sm:px-8 lg:px-20 py-5 sm:py-10 w-full max-w-[1440px] mx-auto'>
      <h1 className='text-xl sm:text-3xl font-semibold text-purple-800 info-title'>Instructions & Info</h1>
      <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='flex flex-col items-center text-center info-item'>
          <h1 className='text-morange text-lg sm:text-2xl font-semibold'>Instruction to Authors</h1>
          <p>For Instructions: <span  className='underline cursor-pointer'>( Coming Soon )</span></p>
        </div>
        <div className='flex flex-col items-center text-center info-item'>
          <h1 className='text-morange text-lg sm:text-2xl font-semibold'>Online Presentation Track Details</h1>
            <p>Day 1 Detailed Schedule: <span className='underline cursor-pointer'>( Coming Soon )</span></p>
            <p>Day 2 Detailed Schedule: <span className='underline cursor-pointer'>( Coming Soon )</span></p>
        </div>
        <div className='flex flex-col items-center text-center info-item'>
          <h1 className='text-morange text-lg sm:text-2xl font-semibold'>ICRTAC'25 Conference Schedule</h1>
          <p>For complete schedule details: <span    className='underline cursor-pointer'>( Coming Soon )</span></p>
        </div>
        <div className='flex flex-col items-center text-center info-item'>
          <h1 className='text-morange text-lg sm:text-2xl font-semibold'>Offline Presentation Track Details</h1>
          <p>For Date, Time and Venue details: <span className='underline cursor-pointer'>( Coming Soon )</span></p>
        </div>
      </div>
    </div>
  )
}

export default Info
    