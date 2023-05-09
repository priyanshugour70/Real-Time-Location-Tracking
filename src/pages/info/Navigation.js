import Image from "next/image";
import Link from "next/link";
import React from "react";
import Mapbox from "../../maps/Mapbox"

export default function Navigation() {
    return (
        <>
            {/* Container for demo purpose */}
            <div className="container my-24 px-6 mx-auto">
                {/* Section: Design Block */}
                <section className="mb-32 text-gray-800 text-center md:text-left">
                    <h2 className="text-3xl font-bold my-16 text-center">
                        University Department{" "}
                    </h2>
                    <div className="flex flex-wrap mb-6">
                        <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                            <div
                                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                <Image
                                    src="/sageBoysHostel.jpg"
                                    className="w-full"
                                    alt="Louvre"
                                    width={500}
                                    height={500}
                                />
                                <label htmlFor="my-modal-6">
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{
                                            backgroundColor:
                                                "rgba(251, 251, 251, 0.2)",
                                        }}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                            <h5 className="text-lg font-bold mb-3">
                                Boys Hostel
                            </h5>
                            <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center md:justify-start">
                                <svg
                                    className="w-4 h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                                    />
                                </svg>
                                Boys Hostel
                            </div>
                            <p className="text-gray-500">
                                The college boys' hostel provides comfortable
                                accommodation for male students, offering a safe
                                and conducive living environment with amenities
                                and facilities that cater to their needs during
                                their time at college.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                            <div
                                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                <Image
                                    src="/sageEnteryGate.jpg"
                                    className="w-full"
                                    alt="Louvre"
                                    width={500}
                                    height={500}
                                />
                                <label htmlFor="my-modal-6">
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{
                                            backgroundColor:
                                                "rgba(251, 251, 251, 0.2)",
                                        }}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                            <h5 className="text-lg font-bold mb-3">
                                Sage Entery Gate
                            </h5>
                            <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center md:justify-start">
                                <svg
                                    className="w-4 h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                                    />
                                </svg>
                                Main Gate
                            </div>
                            <p className="text-gray-500">
                                The main entry gate of the college serves as the
                                primary access point for students, faculty, and
                                visitors, welcoming them into the campus and
                                directing them towards their respective
                                destinations.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                            <div
                                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                <Image
                                    src="/sageGirlsHostel.jpg"
                                    className="w-full"
                                    alt="Louvre"
                                    width={500}
                                    height={500}
                                />
                                <label htmlFor="my-modal-6">
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{
                                            backgroundColor:
                                                "rgba(251, 251, 251, 0.2)",
                                        }}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                            <h5 className="text-lg font-bold mb-3">
                                Girls Hostel
                            </h5>
                            <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center md:justify-start">
                                <svg
                                    className="w-4 h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"
                                    />
                                </svg>
                                Girls Hostel
                            </div>
                            <p className="text-gray-500">
                                The college Girls Hostel provides safe and
                                comfortable accommodation for female students,
                                fostering a supportive environment conducive to
                                their academic and personal growth within a
                                campus setting.
                            </p>
                        </div>
                    </div>
                    <>
                        <h2 className="text-3xl font-bold mb-12 pb-4 text-center"></h2>
                        <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
                            <div className="mb-6 lg:mb-0">
                                <div className="relative block bg-white rounded-lg shadow-lg">
                                    <div className="flex">
                                        <div
                                            className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                src="/sageLibrary.jpg"
                                                className="w-full"
                                                alt="Louvre"
                                                width={500}
                                                height={500}
                                            />
                                            <label htmlFor="my-modal-6">
                                                <div
                                                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                                    style={{
                                                        backgroundColor:
                                                            "rgba(251, 251, 251, 0.15)",
                                                    }}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="font-bold text-lg mb-3">
                                            Sage Library
                                        </h5>
                                        <p className="mb-4 pb-2">
                                            The college library is a hub of
                                            knowledge and resources, offering a
                                            wide range of books, journals, and
                                            online resources for students to
                                            enhance their learning and research
                                            capabilities.
                                        </p>
                                        <a
                                            href="#!"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Get Location
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 lg:mb-0">
                                <div className="relative block bg-white rounded-lg shadow-lg">
                                    <div className="flex">
                                        <div
                                            className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                src="/sageManagement.jpg"
                                                className="w-full"
                                                alt="Louvre"
                                                width={500}
                                                height={500}
                                            />
                                            <label htmlFor="my-modal-6">
                                                <div
                                                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                                    style={{
                                                        backgroundColor:
                                                            "rgba(251, 251, 251, 0.15)",
                                                    }}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="font-bold text-lg mb-3">
                                            Management Block
                                        </h5>
                                        <p className="mb-4 pb-2">
                                            The college Management department
                                            provides comprehensive education and
                                            training in various aspects of
                                            management, equipping students with
                                            the skills and knowledge needed to
                                            excel in the corporate world.
                                        </p>
                                        <Link
                                            href="#!"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Get Location
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-0">
                                <div className="relative block bg-white rounded-lg shadow-lg">
                                    <div className="flex">
                                        <div
                                            className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                src="/sageOpenhall.jpg"
                                                className="w-full"
                                                alt="Louvre"
                                                width={500}
                                                height={500}
                                            />
                                            <label htmlFor="my-modal-6">
                                                <div
                                                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                                    style={{
                                                        backgroundColor:
                                                            "rgba(251, 251, 251, 0.15)",
                                                    }}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="font-bold text-lg mb-3">
                                            Open Hall
                                        </h5>
                                        <p className="mb-4 pb-2">
                                            The college has an impressive Open
                                            Hall auditorium, known for its
                                            spaciousness and versatility in
                                            hosting various events, lectures,
                                            and performances.
                                        </p>
                                        <a
                                            href="#!"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Get Location
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    <>
                        <div className="flex flex-wrap my-16">
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                                    style={{ backgroundPosition: "50%" }}
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    <Image
                                        src="/sageParking.jpg"
                                        className="w-full"
                                        alt="Louvre"
                                        width={500}
                                        height={500}
                                    />
                                    <label htmlFor="my-modal-6">
                                        <div
                                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                            style={{
                                                backgroundColor:
                                                    "rgba(251, 251, 251, 0.2)",
                                            }}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
                                <h3 className="text-2xl font-bold mb-4">
                                    Parking Area
                                </h3>
                                <div className="text-red-600 text-sm mb-4 flex items-center font-medium">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 496 512"
                                        className="w-4 h-4 mr-2"
                                    >
                                        {/* Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                                        <path
                                            fill="currentColor"
                                            d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm160 215.5v6.93c0 5.87-3.32 11.24-8.57 13.86l-15.39 7.7a15.485 15.485 0 0 1-15.53-.97l-18.21-12.14a15.52 15.52 0 0 0-13.5-1.81l-2.65.88c-9.7 3.23-13.66 14.79-7.99 23.3l13.24 19.86c2.87 4.31 7.71 6.9 12.89 6.9h8.21c8.56 0 15.5 6.94 15.5 15.5v11.34c0 3.35-1.09 6.62-3.1 9.3l-18.74 24.98c-1.42 1.9-2.39 4.1-2.83 6.43l-4.3 22.83c-.62 3.29-2.29 6.29-4.76 8.56a159.608 159.608 0 0 0-25 29.16l-13.03 19.55a27.756 27.756 0 0 1-23.09 12.36c-10.51 0-20.12-5.94-24.82-15.34a78.902 78.902 0 0 1-8.33-35.29V367.5c0-8.56-6.94-15.5-15.5-15.5h-25.88c-14.49 0-28.38-5.76-38.63-16a54.659 54.659 0 0 1-16-38.63v-14.06c0-17.19 8.1-33.38 21.85-43.7l27.58-20.69a54.663 54.663 0 0 1 32.78-10.93h.89c8.48 0 16.85 1.97 24.43 5.77l14.72 7.36c3.68 1.84 7.93 2.14 11.83.84l47.31-15.77c6.33-2.11 10.6-8.03 10.6-14.7 0-8.56-6.94-15.5-15.5-15.5h-10.09c-4.11 0-8.05-1.63-10.96-4.54l-6.92-6.92a15.493 15.493 0 0 0-10.96-4.54H199.5c-8.56 0-15.5-6.94-15.5-15.5v-4.4c0-7.11 4.84-13.31 11.74-15.04l14.45-3.61c3.74-.94 7-3.23 9.14-6.44l8.08-12.11c2.87-4.31 7.71-6.9 12.89-6.9h24.21c8.56 0 15.5-6.94 15.5-15.5v-21.7C359.23 71.63 422.86 131.02 441.93 208H423.5c-8.56 0-15.5 6.94-15.5 15.5z"
                                        />
                                    </svg>
                                    parking
                                </div>
                                <p className="text-gray-500 mb-6">
                                    One of the common challenges in college is
                                    finding parking space. Limited parking areas
                                    often lead to frustration and delays for
                                    students, staff, and visitors trying to find
                                    a suitable spot for their vehicles.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap lg:flex-row-reverse mb-12">
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                                    style={{ backgroundPosition: "50%" }}
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    <Image
                                        src="/sagePharmacy.jpg"
                                        className="w-full"
                                        alt="Louvre"
                                        width={500}
                                        height={500}
                                    />
                                    <label htmlFor="my-modal-6">
                                        <div
                                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                            style={{
                                                backgroundColor:
                                                    "rgba(251, 251, 251, 0.2)",
                                            }}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
                                <h3 className="text-2xl font-bold mb-4">
                                    Sage Pharmacy Block
                                </h3>
                                <div className="text-blue-600 text-sm mb-4 flex items-center font-medium">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-4 h-4 mr-2"
                                    >
                                        {/* Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                                        <path
                                            fill="currentColor"
                                            d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                                        />
                                    </svg>
                                    Pharmacy
                                </div>
                                <p className="text-gray-500">
                                    The Pharmacy Block in college is a dedicated
                                    facility for pharmacy students, equipped
                                    with modern laboratories and classrooms,
                                    providing a comprehensive learning
                                    environment for studying pharmaceutical
                                    sciences and conducting research.
                                </p>
                            </div>
                        </div>
                    </>
                    <>
                        <h2 className="text-3xl font-bold mb-12 pb-4 text-center"></h2>
                        <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
                            <div className="mb-6 lg:mb-0">
                                <div className="relative block bg-white rounded-lg shadow-lg">
                                    <div className="flex">
                                        <div
                                            className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                src="/sageRoyalHall.jpg"
                                                className="w-full"
                                                alt="Louvre"
                                                width={500}
                                                height={500}
                                            />
                                            <label htmlFor="my-modal-6">
                                                <div
                                                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                                    style={{
                                                        backgroundColor:
                                                            "rgba(251, 251, 251, 0.15)",
                                                    }}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="font-bold text-lg mb-3">
                                            Royal Sage Hall
                                        </h5>
                                        <p className="mb-4 pb-2">
                                            The college closed the auditorium
                                            hall for renovations, causing
                                            temporary unavailability for events
                                            and gatherings. Students and staff
                                            are advised to seek alternative
                                            venues during this period.
                                        </p>
                                        <a
                                            href="#!"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Get Location
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 lg:mb-0">
                                <div className="relative block bg-white rounded-lg shadow-lg">
                                    <div className="flex">
                                        <div
                                            className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                src="/sageStafQuater.jpg"
                                                className="w-full"
                                                alt="Louvre"
                                                width={500}
                                                height={500}
                                            />
                                            <label htmlFor="my-modal-6">
                                                <div
                                                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                                    style={{
                                                        backgroundColor:
                                                            "rgba(251, 251, 251, 0.15)",
                                                    }}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="font-bold text-lg mb-3">
                                            Staff Quater
                                        </h5>
                                        <p className="mb-4 pb-2">
                                            The college staff quarter hall
                                            provides convenient accommodation
                                            for faculty and staff members,
                                            ensuring a comfortable living
                                            environment within the campus
                                            premises.
                                        </p>
                                        <Link
                                            href="#!"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Get Location
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-0">
                                <div className="relative block bg-white rounded-lg shadow-lg">
                                    <div className="flex">
                                        <div
                                            className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            <Image
                                                src="/sageTemple.jpg"
                                                className="w-full"
                                                alt="Louvre"
                                                width={500}
                                                height={500}
                                            />
                                            <label htmlFor="my-modal-6">
                                                <div
                                                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                                    style={{
                                                        backgroundColor:
                                                            "rgba(251, 251, 251, 0.15)",
                                                    }}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="font-bold text-lg mb-3">
                                            Temple
                                        </h5>
                                        <p className="mb-4 pb-2">
                                            Temple College offers a diverse
                                            range of educational programs,
                                            dedicated faculty, and a supportive
                                            learning environment. It prepares
                                            students for success in their
                                            academic and professional pursuits.
                                        </p>
                                        <a
                                            href="#!"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Get Location
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </section>
                {/* Section: Design Block */}
            </div>
            {/* Container for demo purpose */}

            {/* Modal Logic */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="my-modal-6"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <div className="">
                        <Mapbox />
                    </div>
                </div>
            </div>
        </>
    );
}
