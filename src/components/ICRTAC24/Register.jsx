import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const RegistrationFeeTable = () => {
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            duration: 1000,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom',
            reset: false
        });
    }, []);

    const handleRedirect = (e, url) => {
        e.preventDefault();
        window.open(url);
    }

    return (
        <section id='register' className='bg-purple-100'>
            <div className="max-w-[1440px] mx-auto py-20 px-4">
                <h2 className="reveal text-3xl font-bold text-center text-purple-800 mb-8">Registration Fee</h2>
                <div className="overflow-x-auto sm:max-w-2xl mx-auto">
                    <table className="reveal text-start min-w-full sm:min-w-auto bg-white border border-gray-200">
                        <thead className=''>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border text-center" colSpan="3">REGISTRATION FEE (inclusive of 18% GST)</th>
                            </tr>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border">Category</th>
                                <th className="px-4 py-2 border">Indian Nationals(Rs)</th>
                                <th className="px-4 py-2 border">Foreign Nationals(USD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border">Research Scholars / Students</td>
                                <td className="px-4 py-2 border">Rs.4500+18% GST(Rs.5310)</td>
                                <td className="px-4 py-2 border">$70+ 18% GST($83)</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="px-4 py-2 border">Academician</td>
                                <td className="px-4 py-2 border">Rs.7000+18% GST(Rs.8260)</td>
                                <td className="px-4 py-2 border">$150+ 18% GST($177)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Industry Delegates</td>
                                <td className="px-4 py-2 border">Rs.10000+18% GST(Rs.11800)</td>
                                <td className="px-4 py-2 border">$200+ 18% GST($236)</td>
                            </tr>
                            {/* <tr className="bg-gray-50">
                                <td className="px-4 py-2 border">Participants</td>
                                <td className="px-4 py-2 border">Rs. 1,500</td>
                                <td className="px-4 py-2 border">Rs. 1,500</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Additional Conferences kit and Proceedings</td>
                                <td className="px-4 py-2 border">Rs. 2,000</td>
                                <td className="px-4 py-2 border">Rs. 2,000 </td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="px-4 py-2 border">Foreign Authors</td>
                                <td className="px-4 py-2 border">275 USD</td>
                                <td className="px-4 py-2 border">250 USD</td>
                            </tr> */}
                        </tbody>
                    </table>

                </div>
                <p className="reveal mt-4 text-sm text-gray-600 sm:max-w-2xl mx-auto">
                    <strong>Note:</strong> Registration fee doesn't cover bank charges and includes only participation & presentation to conference.
                </p>
                <p className="reveal mt-4 text-xl text-purple-800 italic text-center font-bold sm:max-w-2xl mx-auto">
                    Attractive rewards will be given for Best Papers
                </p>
                <div className="reveal mt-8 text-left sm:max-w-2xl mx-auto  ">
                    <h3 className="text-xl font-bold text-purple-800">Payment Link</h3>
                    <p className="mt-2">For Payment (After Acceptance of Article): <a onClick={(e) => handleRedirect(e, "https://vitchennaievents.com/conf1/")} href="https://vitchennaievents.com/conf1/" className="transition-all duration-150 ease-in-out hover:text-purple-800 cursor-pointerunderline font-bold">Click Here</a></p>
                    <p className='text-sm mt-1'><strong>Note : </strong> After linking to payment portal, choose ICRTAC 2024 in the dropdown. Then select your appropriate registration category.</p>
                </div>
            </div></section>
    );
}

export default RegistrationFeeTable;
