import React from 'react'
import { User, Mail, Phone } from 'lucide-react'

const ContactUs = () => {
    return (
        <section id="contact"
            class="flex justify-center items-center px-16 py-20 max-md:px-5 "
        >
            <div class="flex flex-wrap  w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
            <div>
                    <h1 className='text-xl sm:text-2xl text-purple-800 font-bold'>Contact Us</h1>
                     
                    <div className='flex mt-10 gap-10 sm:ml-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                        </svg>
                        <a href='mailto:chennai.icrtac@vit.ac.in'><p>chennai.icrtac@vit.ac.in</p></a>
                    </div>
                                      
                    <div className='flex mt-10 gap-10 sm:ml-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                         
                        <p>Vellore Institute of Technology, Vandalur - Kelambakkam Road <br />
                            Chennai, Tamil Nadu - 600 127</p>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-6 mt-10 sm:ml-20'>
                        <div className='backdrop-blur-lg bg-white/20 border border-white/30 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300'>
                            <div className='flex items-center gap-2 mb-3'>
                                <User className="size-5 text-purple-600" />
                                <p className='font-semibold text-purple-800'>Dr. Pradeep Kumar T S</p>
                            </div>
                            <div className='flex items-center gap-2 mb-2'>
                                <Mail className="size-4 text-purple-600" />
                                <a href='mailto:tspeadeepkumar@vit.ac.in' className='text-sm hover:underline'>tspradeepkumar@vit.ac.in</a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Phone className="size-4 text-purple-600" />
                                <a href='tel:9994626196' className='text-sm hover:underline'>9994626196</a>
                            </div>
                        </div>

                        <div className='backdrop-blur-lg bg-white/20 border border-white/30 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300'>
                            <div className='flex items-center gap-2 mb-3'>
                                <User className="size-5 text-purple-600" />
                                <p className='font-semibold text-purple-800'>Dr. Jayasudha M</p>
                            </div>
                            <div className='flex items-center gap-2 mb-2'>
                                <Mail className="size-4 text-purple-600" />
                                <a href='mailto:jayasudha.m@vit.ac.in' className='text-sm hover:underline'>jayasudha.m@vit.ac.in</a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Phone className="size-4 text-purple-600" />
                                <a href='tel:9994979687' className='text-sm hover:underline'>9994979687</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10  sm:ml-20 sm:mr-0 flex-1 min-w-72'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.040704989774!2d80.15085337460194!3d12.840646217736793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20Chennai!5e0!3m2!1sen!2sin!4v1716655342150!5m2!1sen!2sin" className="border-0 w-full h-96 " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactUs