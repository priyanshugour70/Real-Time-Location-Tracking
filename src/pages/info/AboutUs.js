import React from "react";
import Image from "next/image";

export default function AboutUs() {
    return (
        <>
            <div className="container my-24 px-6 mx-auto">
                {/* Section: Design Block */}
                <section className="my-32 text-gray-800 text-center">
                    <div className="flex justify-center">
                        <div className="max-w-[800px]">
                            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">
                                About Us <br />
                                <span className="text-blue-600">
                                    website's creator ?
                                </span>
                            </h2>
                            <p className="text-gray-500 text-lg">
                                The University can be a confusing place for
                                first-time visitors, with multiple buildings,
                                departments, parking areas, and other locations
                                spread out over a large campus. This can make
                                navigating the University a stressful
                                experience, especially for those who are running
                                late or have an important appointment to attend.
                                That's where RTLT comes in. RTLT is a real-time
                                location tracking solution designed specifically
                                for first-time visitors to the University. Our
                                website provides a simple and intuitive way for
                                visitors to navigate the various blocks,
                                departments, parking areas, and other locations
                                within the University. With RTLT, visitors can
                                easily track their desired destination, ensuring
                                they arrive at their destination on time and
                                with minimal stress.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
            {/* Container for demo purpose */}
            <div className="my-24 container px-6 mx-auto">
                {/* Section: Design Block */}
                <section className="">
                    <style
                        dangerouslySetInnerHTML={{
                            __html: "\n      @media (min-width: 992px) {\n        #cta-img-nml-50 {\n          margin-left: 50px;\n        }\n      }\n    ",
                        }}
                    />
                    <div className="flex  justify-center flex-wrap">
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
                            <div className="flex lg:py-10">
                                <img
                                    src="https://avatars.githubusercontent.com/u/111908314?v=4"
                                    className="w-full rounded-lg shadow-lg"
                                    id="cta-img-nml-50"
                                    style={{ zIndex: 10 }}
                                    width={500}
                                    height={500}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                            <div className="bg-gradient-to-br from-[#ff5bef] to-[#9661ff] h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                                <div className="lg:pl-12">
                                    <h2 className="text-3xl font-bold mb-6">
                                        Priyanshu Gour
                                    </h2>
                                    <p className="mb-6 pb-2 lg:pb-0">
                                        I'm an enthusiastic Full Stack web
                                        developer that has expertise building
                                        websites with React, Next, Tailwind CSS,
                                        RestAPIs, MySql and Java programming
                                        with Advance Java, JSP, Hibernet, spring
                                        Framework, spring boot, and
                                        Microservises.
                                    </p>
                                    <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
                                        <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                className="w-4 h-4 mr-2"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                ></path>
                                            </svg>
                                            Frontend developer
                                        </p>
                                        <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                className="w-4 h-4 mr-2"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                ></path>
                                            </svg>
                                            Backend developer
                                        </p>
                                        <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                className="w-4 h-4 mr-2"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                ></path>
                                            </svg>
                                            competitive coder
                                        </p>
                                    </div>
                                    <p>
                                        passion for web development began when
                                        they realized the power of technology to
                                        solve real-world problems. Since then,
                                        they have been dedicated to building
                                        innovative and user-friendly websites
                                        that help businesses succeed in the
                                        digital world. With a keen eye for
                                        detail and a focus on quality, I takes
                                        pride in delivering projects that exceed
                                        client expectations. They are committed
                                        to staying up-to-date with the latest
                                        web development trends and technologies
                                        to ensure their clients receive the best
                                        possible solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
            {/* Container for demo purpose */}
        </>
    );
}
