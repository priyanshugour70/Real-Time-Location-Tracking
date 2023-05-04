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
                                What is an online consultation?
                            </AccordionHeader>
                            <AccordionBody>
                                An online doctor consultation happens over an
                                online doctor chat, call, or video call. This
                                enables you to online without having to search
                                or locate a clinic or . You can now opt for an
                                online medical consultation by simply selecting
                                a doctor from various specialties from the
                                comfort of your home, without dealing with the
                                hassle of waiting in traffic or long queues.
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 2} animate={customAnimation}>
                            <AccordionHeader onClick={() => handleOpen(2)}>
                                How do I do an online consultation?
                            </AccordionHeader>
                            <AccordionBody>
                                The steps to talk to a doctor online are simple
                                Contact us by visiting our website or
                                downloading the Choose your symptoms or select a
                                specialist doctor to consult. You can even who
                                can understand your condition better Book doctor
                                appointment online and a specialist will get in
                                touch with you immediately Ask a doctor online
                                about your symptoms, problems, condition,
                                medication, and more during your consultation
                                Online doctor consultation at MFine may require
                                you to submit previous medical records, lab
                                results, etc. so the doctor can better
                                understand your condition Post the
                                teleconsultation, you can get follow-ups with
                                your doctor You can also order medicines online
                                from the MFine app You can also get lab tests
                                done at home
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 3} animate={customAnimation}>
                            <AccordionHeader onClick={() => handleOpen(3)}>
                                Which online doctor should I see?
                            </AccordionHeader>
                            <AccordionBody>
                                If you are aware of your condition, you should
                                consult with a doctor of the speciality your
                                condition falls under. For example, if you
                                suffer from back pain or fracture, you should
                                see an orthopediician.. If you suffer from
                                irregular periods, you should consult a
                                gynecologist. But if you are unable to
                                understand your symptoms, it will be best to
                                consult doctor online such as a general
                                physician. They will assess your symptoms and
                                diagnose the problem and may refer you to
                                another specialist if needed. You can also
                                consult doctors online if you simply require a
                                second opinion recommendations. For instance, if
                                you need a second opinion for your child&apos;s
                                vaccination schedule, you should consult a
                                pediatrician who can provide you with a complete
                                vaccination chart to follow. If you require a
                                recommendation for your baby&apos;s diet, you
                                should consult a pediatric-dietitian who can
                                provide you with a personalized Indian baby food
                                chart that caters to your child&apos;s nutritional
                                needs!
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 4} animate={customAnimation}>
                            <AccordionHeader onClick={() => handleOpen(4)}>
                                Can I choose a specific doctor to consult with?
                            </AccordionHeader>
                            <AccordionBody>
                                Yes, you can avail online consultation with a
                                doctor of your choice. With multiple doctors in
                                various specialties and cities, you can select a
                                doctor based on their profile. You can read
                                about their years of experience, the hospital
                                they work at, and more, on their page. You can
                                also check the proximity of the doctor to your
                                location in case you would like a quick
                                consultation before seeing them for a physical
                                checkup. With MFine, you can always rest assured
                                that youronline medical consultation promises
                                quality care and hospitality.
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 5} animate={customAnimation}>
                            <AccordionHeader onClick={() => handleOpen(5)}>
                                Is my online medical consultation secure?
                            </AccordionHeader>
                            <AccordionBody>
                                With DoctIn, you can consult doctor online
                                without having to worry about privacy. We ensure
                                that your interaction with a doctor online
                                remains confidential. Your medical history,
                                diagnosis results, and records will also be
                                stored in a safe and secure database.
                            </AccordionBody>
                        </Accordion>
                    </Fragment>
                </div>
            </div>
        </section>
    );
};

export default FAQ;