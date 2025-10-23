import React from 'react';

const ImportantDates = () => {
    return (
        <section id="date" className="flex justify-center items-center px-6 py-10">
            <div className="flex flex-col w-full max-w-2xl">
                <h1 className="text-2xl text-center text-purple-800 font-bold mb-10">Important Dates</h1>
                <div className='max-w-full overflow-x-scroll md:overflow-x-hidden sm:translate-x-20'>
                    <table className='text-sm sm:text-lg w-full'>
                        <tbody>
                            <tr className='border-y-8 border-transparent'>
                                <td className='w-56 text-right font-bold whitespace-nowrap'>
                                    <p className='mr-2 sm:mr-10'>
                                        15<sup>th</sup> July 2025
                                    </p>
                                </td>
                                <td className='w-8'>
                                    <div className="w-4 h-4 rounded-full bg-purple-600 mx-auto"></div>
                                </td>
                                <td className='text-left'>
                                    <p className='ml-2 sm:ml-10 w-fit'>Call for Papers</p>
                                </td>
                            </tr>
                            <tr className='border-y-8 border-transparent'>
                                <td className='w-56 text-right font-bold whitespace-nowrap'>
                                    <p className='mr-2 sm:mr-10'>
                                        <span className='text-red-500 line-through'>9<sup>th</sup> September 2025</span><br />
                                        <span className='text-red-500 line-through'>16<sup>th</sup> September 2025</span><br />
                                        23<sup>rd</sup> September 2025 (Extended)
                                    </p>
                                </td>
                                <td className='w-8'>
                                    <div className="w-4 h-4 rounded-full bg-purple-600 mx-auto"></div>
                                </td>
                                <td className='text-left'>
                                    <p className='ml-2 sm:ml-10 w-fit'>Paper Submission Deadline</p>
                                </td>
                            </tr>
                            <tr className='border-y-8 border-transparent'>
                                <td className='w-56 text-right font-bold whitespace-nowrap'>
                                    <p className='mr-2 sm:mr-10'>
                                        10<sup>th</sup> October 2025
                                    </p>
                                </td>
                                <td className='w-8'>
                                    <div className="w-4 h-4 rounded-full bg-purple-600 mx-auto"></div>
                                </td>
                                <td className='text-left'>
                                    <p className='ml-2 sm:ml-10 w-fit'>Acceptance Notification</p>
                                </td>
                            </tr>
                            <tr className='border-y-8 border-transparent'>
                                <td className='w-56 text-right font-bold whitespace-nowrap'>
                                    <p className='mr-2 sm:mr-10'>
                                        1<sup>st</sup> November 2025
                                    </p>
                                </td>
                                <td className='w-8'>
                                    <div className="w-4 h-4 rounded-full bg-purple-600 mx-auto"></div>
                                </td>
                                <td className='text-left'>
                                    <p className='ml-2 sm:ml-10 w-fit'>Camera Ready Copy Submission</p>
                                </td>
                            </tr>
                            <tr className='border-y-8 border-transparent'>
                                <td className='w-56 text-right font-bold whitespace-nowrap'>
                                    <p className='mr-2 sm:mr-10'>5<sup>th</sup> November 2025</p>
                                </td>
                                <td className='w-8'>
                                    <div className="w-4 h-4 rounded-full bg-purple-600 mx-auto"></div>
                                </td>
                                <td className='text-left'>
                                    <p className='ml-2 sm:ml-10 w-fit'>Registration Close</p>
                                </td>
                            </tr>
                            <tr className='border-y-8 border-transparent'>
                                <td className='w-56 text-right font-bold whitespace-nowrap'>
                                    <p className='mr-2 sm:mr-10'>14<sup>th</sup> & 15<sup>th</sup> November 2025 <br /> </p>
                                </td>
                                <td className='w-8'>
                                    <div className="w-4 h-4 rounded-full bg-purple-600 mx-auto"></div>
                                </td>
                                <td className='text-left'>
                                    <p className='ml-2 sm:ml-10 w-fit'>Conference</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ImportantDates;
