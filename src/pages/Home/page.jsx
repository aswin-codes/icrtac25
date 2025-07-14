import React from 'react';
import Navbar from '../../components/ICRTAC25/Navbar';
import Home from '../../components/ICRTAC25/Home';
import Info from '../../components/ICRTAC25/Info';
import About from '../../components/ICRTAC25/About';
import Footer from '../../components/ICRTAC25/Footer';
import Patrons from '../../components/ICRTAC25/Patrons';
import RegistrationFeeTable from '../../components/ICRTAC25/Register';
import Submission from '../../components/ICRTAC25/Submission';
import Speakers from '../../components/ICRTAC25/Speakers';
import Committee from '../../components/ICRTAC25/Committee';
import Travel from '../../components/ICRTAC25/Travel';
import ContactUs from '../../components/ICRTAC25/ContactUs';
import ImportantDates from '../../components/ICRTAC25/ImportantDates';

function ICRTAC25() {
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

export default ICRTAC25;
