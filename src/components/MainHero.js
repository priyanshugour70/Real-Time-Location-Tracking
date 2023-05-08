import React from "react";
import Image from "next/image";

export default function MainHero() {
    return (
        <>
            {/* Container for demo purpose */}
            <div>
                {/* Section: Design Block */}
                <section className="mb-40 min-h-screen background-radial-gradient overflow-hidden">
                    <style
                        dangerouslySetInnerHTML={{
                            __html: "\n      .background-radial-gradient {\n        background-color: hsl(218, 41%, 15%);\n        background-image: radial-gradient(\n          650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%\n        ),\n        radial-gradient(\n          1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%\n        );\n      }\n      #radius-shape-1 {\n        height: 220px;\n        width: 220px;\n        top: -60px;\n        left: -130px;\n        background: radial-gradient(#44006b, #ad1fff);\n        overflow: hidden;\n      }\n      #radius-shape-2 {\n        border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n        bottom: -60px;\n        right: -110px;\n        width: 300px;\n        height: 300px;\n        background: radial-gradient(#44006b, #ad1fff);\n        overflow: hidden;\n      }\n      .bg-glass {\n        background-color: hsla(0, 0%, 100%, 0.9);\n        backdrop-filter: saturate(200%) blur(25px);\n      }\n    ",
                        }}
                    />
                    <div className="my-20">
                        <h2 className="text-5xl font-bold text-center tracking-tight">
                            Welcome to <br />
                            <span className="text-blue-600">
                                Sage University, Bhopal
                            </span>
                        </h2>
                        <p className="text-gray-500 mt-8 text-center">
                            Sanjeev Agrawal Global Educational (SAGE)
                            University, located in the scenic city of Bhopal, is
                            renowned for its exceptional academia, <br/> vast campus,
                            and cutting-edge educational framework. With a
                            strong commitment to transforming passion into a
                            profession,<br/> the university offers thought-provoking
                            learning experiences and state-of-the-art
                            facilities, ensuring students have the best
                            resources to shape their future.
                        </p>
                    </div>
                    <div className="px-6 py-12  lg:py-24 md:px-12 text-center lg:text-left">
                        <div className="container mx-auto xl:px-32 text-gray-800">
                            <div className="grid lg:grid-cols-2 gap-12  items-center">
                                <div
                                    className="mt-12 lg:mt-0"
                                    style={{ zIndex: 10 }}
                                >
                                    <h1
                                        className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                                        style={{ color: "hsl(218, 81%, 95%)" }}
                                    >
                                        Real Time <br />
                                        <span
                                            style={{
                                                color: "hsl(218, 81%, 75%)",
                                            }}
                                        >
                                            Location Tracking
                                        </span>
                                    </h1>
                                    <p
                                        className="opacity-70"
                                        style={{ color: "hsl(218, 81%, 85%)" }}
                                    >
                                        The institution strives to provide a
                                        world-class education that aligns with
                                        the rapidly evolving society. Sanjeev
                                        Agrawal Global Educational (SAGE)
                                        Universitys vision is to become the top
                                        university in Madhya Pradesh, Central
                                        India, by fostering education innovation
                                        and producing leaders who can contribute
                                        to society at all levels. It operates
                                        under the patronage of the Shri Agrawal
                                        Educational Public Trust, further
                                        enhancing its credibility and
                                        reputation.
                                    </p>
                                </div>
                                <div className="mb-12 lg:mb-0 relative">
                                    <div
                                        id="radius-shape-1"
                                        className="absolute rounded-full shadow-lg"
                                    />
                                    <div
                                        id="radius-shape-2"
                                        className="absolute shadow-lg"
                                    />
                                    <div className="block rounded-lg shadow-lg bg-glass">
                                        <Image
                                            src="/MainEduImg.svg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                    </div>
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
