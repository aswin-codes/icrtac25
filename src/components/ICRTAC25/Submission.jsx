import React from 'react'

const Submission = () => {

    const handleRedirect = (e, url) => {
        e.preventDefault();
        window.open(url);
    }
    return (
        <section id="submission"
            class="flex justify-center items-center px-16 py-20  bg-purple-100 max-md:px-5"
        >
            <div
                class="flex flex-col  w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full"
            >
                <div
                    class="flex gap-5 justify-between self-center max-w-full text-center w-[1106px] max-md:flex-wrap"
                >
                    <div class="flex flex-col">
                        <div class="self-center font-bold text-3xl text-purple-800">
                            Manuscript Submission
                        </div>
                        <div class="mt-5 text-xl text-black ">
                            <span class="">For manuscript submission : </span>
                            <span class="underline transition-all duration-150 ease-in-out hover:text-purple-800 cursor-pointer">( Coming soon )</span>
                        </div>
                    </div>
                    <div class="flex flex-col max-md:max-w-full">
                        <div class="self-center text-3xl text-purple-800 font-bold">
                            Manuscript Template
                        </div>
                        <div class="mt-5 text-xl text-black  max-md:max-w-full">
                            <span class="">To download manuscript word template : </span>
                            <a href='https://www.springer.com/gp/authors-editors/conference-proceedings/editors/word-template/19338734'><span class="underline transition-all duration-150 ease-in-out hover:text-purple-800">Click Here</span></a>
                        </div>
                        <div class="mt-5 text-xl text-black transition-all duration-150 ease-in-out hover:text-purple-800  max-md:max-w-full">
                            <span class="">To download manuscript Latex template :   </span>
                            <a href='https://www.springer.com/gp/computer-science/lncs/new-latex-templates-available/15634678'><span class="underline transition-all duration-150 ease-in-out hover:text-purple-800">Click Here</span></a>
                        </div>
                    </div>
                </div>
                <div
                    class="self-start mt-32 ml-2.5 text-3xl text-center font-bold text-purple-800 max-md:mt-10 max-md:max-w-full"
                >
                    ICRTAC'25 Conference Paper Submission Guidelines
                </div>
                <div class="mt-10 text-2xl  font-bold text-purple-800 max-md:max-w-full">
                    Submission Requirements
                </div>
                <div class="mt-4 text-lg text-black max-md:max-w-full">
                    All submitted papers must be original and exclusive to ICRTAC'25.
                    Simultaneous submissions to other journals or conferences are strictly
                    prohibited. To maintain the integrity of the conference, we expect all
                    papers to be based on unpublished original work. By submitting a paper, at
                    least one of the authors must be committed to registering and presenting
                    the paper at the conference.
                </div>
                <div class="mt-10 text-2xl font-bold text-purple-800 max-md:max-w-full">
                    Important Dates
                </div>
                <div class="mt-5 text-lg text-black max-md:max-w-full">
                    It is important to adhere to the provided deadlines. The deadlines for
                    draft paper submission, notification of acceptance, camera-ready paper
                    submission, and early registration can be found in the Important Dates
                    section of the conference website. Keeping track of these dates will help
                    ensure a smooth review process and successful participation.
                </div>
                <div class="mt-10 text-2xl font-bold text-purple-800 max-md:max-w-full">
                    Contact Information
                </div>
                <div class="mt-6 text-lg text-black max-md:max-w-full">
                    If you encounter any challenges during the submission process, our team is
                    here to assist you. Please feel free to reach out to us via email
                    at <a href="mailto:chennai.icrtac@vit.ac.in"><span className='font-semibold underlinea'>chennai.icrtac@vit.ac.in</span></a>. We are dedicated to providing timely support
                    and resolving any issues you may face.
                </div>
                <div class="mt-10 text-2xl font-bold text-purple-800 max-md:max-w-full">
                    Peer Review and Plagiarism Check
                </div>
                <div class="mt-5 text-lg text-black max-md:max-w-full">
                    Quality and originality are paramount to us. Each submitted paper will
                    undergo a thorough peer review by a minimum of three independent referees
                    who are experts in the field. Additionally, all papers will undergo a
                    comprehensive plagiarism check to ensure their authenticity and adherence
                    to ethical standards.
                </div>
                <div class="mt-10 text-2xl font-bold text-purple-800 max-md:max-w-full">
                    Accepted Papers
                </div>
                <div class="mt-5 text-lg text-black max-md:max-w-full">
                    Upon acceptance, authors will be required to complete and sign a copyright
                    form. Furthermore, presenting the accepted paper at the conference is
                    mandatory. This practice fosters an environment of knowledge sharing and
                    scholarly interaction. To maintain the academic integrity of the
                    conference, we employ standard plagiarism detection tools to scrutinize
                    all submissions. Any instance of plagiarism will result in rejection,
                    regardless of the stage of review.
                    <br />
                </div>
                <div class="mt-16 text-2xl font-bold text-purple-800 max-md:mt-10 max-md:max-w-full">
                    Manuscript Guidelines
                </div>
                <div class="mt-5 text-lg text-black max-md:max-w-full">
                    Submitted manuscripts should encompass a comprehensive and coherent body
                    of work, presented in well-formatted English. Each manuscript should span
                    a complete 6 pages, offering adequate space to delve into the details of
                    the research. All submissions are to be made electronically through the
                    designated platform, ensuring efficient processing and review.
                </div>
            </div>
        </section>

    )
}

export default Submission