import React from 'react';
import Navbar from '../../components/ICRTAC24/Navbar';
import Home from '../../components/ICRTAC24/Home';
import Info from '../../components/ICRTAC24/Info';
import About from '../../components/ICRTAC24/About';
import Footer from '../../components/ICRTAC24/Footer';
import Patrons from '../../components/ICRTAC24/Patrons';
import RegistrationFeeTable from '../../components/ICRTAC24/Register';
import Submission from '../../components/ICRTAC24/Submission';
import Speakers from '../../components/ICRTAC24/Speakers';
import Committee from '../../components/ICRTAC24/Committee';
import Travel from '../../components/ICRTAC24/Travel';
import ContactUs from '../../components/ICRTAC24/ContactUs';
import ImportantDates from '../../components/ICRTAC24/ImportantDates';

function ICRTAC24() {
    return (
        <div className='w-screen font-sora bg-purple-50 text-justify'>
            <div className=' font-sora '>
                <Navbar />
                <section id='home'>
                    <Home />
                    <Info />
                </section>
                <About />
                <Patrons />
                <RegistrationFeeTable />
                <ImportantDates/>
                <Submission />
                <Speakers />
                <Committee />
                {/* <Travel/> */}
                <ContactUs />
                <Footer />
            </div>

        </div>
    );
}

export default ICRTAC24;
