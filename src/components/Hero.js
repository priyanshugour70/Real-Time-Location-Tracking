import Link from "next/link";
import { useState } from "react";

export default function Example() {
    return (
        <div className="bg-white bg-gradient-to-br from-[#d0d5ff] to-[#ffc2ff] ">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d97fa5] to-[#9893db] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next new Courses.{" "}
                            <Link
                                href="/"
                                className="font-semibold text-indigo-600"
                            >
                                <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Sanjeev Agrawal Global Educational University,
                            Bhopal
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            University located in the scenic city of
                            Bhopal, is renowned for its exceptional academia,
                            state-of-the-art infrastructure, and a commitment to
                            transforming passion into profession. With a focus
                            on thought-provoking learning and world-class
                            facilities, SAGE University aims to become the top
                            university in Madhya Pradesh, Central India,
                            fostering leaders and serving communities
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
