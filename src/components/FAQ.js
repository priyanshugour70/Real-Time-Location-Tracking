import React from "react";
import { useState, Fragment } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const FAQ = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    return (
        <section className="dark:bg-gray-800 my-10 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-base font-medium tracking-wider text-center uppercase">
                    Frequently Asked Questions
                </p>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <Fragment>
                        <Accordion open={open === 1} animate={customAnimation}>
                            <AccordionHeader onClick={() => handleOpen(1)}>
                                How can I use the RTLT website to navigate the
                                University?
                            </AccordionHeader>
                            <AccordionBody>
                                Using the RTLT website is simple. Just access
                                the website and enter your desired destination
                                within the University. The website will provide
                                step-by-step instructions based on real-time GPS
                                data to guide you to your destination. You can
                                easily track your progress and ensure you arrive
                                without getting lost. The website also offers
                                detailed information about each location,
                                including operating hours and contact details,
                                helping you plan your visit effectively.
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 2} animate={customAnimation}>
                            <AccordionHeader onClick={() => handleOpen(2)}>
                                Does RTLT provide information on parking areas ?
                            </AccordionHeader>
                            <AccordionBody>
                                Yes, RTLT offers information on parking areas
                                within the University. You can access details
                                such as the number of available parking spaces
                                and the cost of parking. This feature enables
                                you to plan ahead and find convenient parking
                                options, ensuring a smoother visit without the
                                stress of searching for parking spaces.
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 3} animate={customAnimation}>
                            <AccordionHeader onClick={() => handleOpen(3)}>
                                Can RTLT help me if I am unfamiliar with the
                                University campus?
                            </AccordionHeader>
                            <AccordionBody>
                                Absolutely! RTLT provides detailed maps of the
                                University campus, making it easy to navigate
                                even if you are unfamiliar with the
                                surroundings. You can rely on the maps to find
                                your way to various buildings, departments, and
                                other locations within the campus. With RTLT's
                                user-friendly interface and real-time location
                                tracking, exploring the University becomes
                                hassle-free and convenient for first-time
                                visitors.
                            </AccordionBody>
                        </Accordion>
                    </Fragment>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
