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
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border text-center" colSpan="3">REGISTRATION FEE (inclusive of 18% GST)</th>
                            </tr>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border">Category</th>
                                <th className="px-4 py-2 border text-sm w-52">Early Bird Registration ends on: 20-10-2025</th>
                                <th className="px-4 py-2 border text-sm w-52">Late Registration ends on: 05-11-2025</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border">Research Scholars / Students</td>
                                <td className="px-4 py-2 border">
                                    Rs.5000<br/>
                                    <span className="text-xs text-gray-600">+18% GST</span><br/>
                                    <span className="font-bold">Rs.5900</span>
                                </td>
                                <td className="px-4 py-2 border">
                                    Rs.6000<br/>
                                    <span className="text-xs text-gray-600">+18% GST</span><br/>
                                    <span className="font-bold">Rs.7080</span>
                                </td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="px-4 py-2 border">Academician</td>
                                <td className="px-4 py-2 border">
                                    Rs.8000<br/>
                                    <span className="text-xs text-gray-600">+18% GST</span><br/>
                                    <span className="font-bold">Rs.9440</span>
                                </td>
                                <td className="px-4 py-2 border">
                                    Rs.10000<br/>
                                    <span className="text-xs text-gray-600">+18% GST</span><br/>
                                    <span className="font-bold">Rs.11800</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Industry Delegates</td>
                                <td className="px-4 py-2 border">
                                    Rs.12000<br/>
                                    <span className="text-xs text-gray-600">+18% GST</span><br/>
                                    <span className="font-bold">Rs.14160</span>
                                </td>
                                <td className="px-4 py-2 border">
                                    Rs.15000<br/>
                                    <span className="text-xs text-gray-600">+18% GST</span><br/>
                                    <span className="font-bold">Rs.17700</span>
                                </td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="px-4 py-2 border">Foreign Academicians, Research Scholars/Students (Outside India)</td>
                                <td className="px-4 py-2 border">
                                    USD 150<br/>
                                    <span className="text-xs text-gray-600">+18% GST</span><br/>
                                    <span className="font-bold">$177</span>
                                </td>
                                <td className="px-4 py-2 border">
                                    USD 200<br/>
                                    <span className="text-xs text-gray-600">+18% GST</span><br/>
                                    <span className="font-bold">$236</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">UPM Academicians, Students and Research Scholars</td>
                                <td className="px-4 py-2 border">
                                    USD 75<br/>
                                    <span className="text-xs text-gray-600">+18% GST</span><br/>
                                    <span className="font-bold">$88</span>
                                </td>
                                <td className="px-4 py-2 border">
                                    USD 100<br/>
                                    <span className="text-xs text-gray-600">+18% GST</span><br/>
                                    <span className="font-bold">$118</span>
                                </td>
                            </tr>
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
                    <p className="mt-2">For Payment (After Acceptance of Article): <a href="https://vitchennaievents.com/conf1/"><span className="transition-all duration-150 ease-in-out hover:text-purple-800 cursor-pointer underline font-bold">Click Here</span></a></p>
                    <p className='text-sm mt-1'><strong>Note : </strong> The participant can pay only after the acceptance of the paper. While paying, choose ICRTAC 2025 in the dropdown menu. Then select your appropriate registration category.</p>
                </div>
            </div></section>
    );
}

export default RegistrationFeeTable;
