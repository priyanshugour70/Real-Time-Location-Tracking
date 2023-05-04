import React from "react";
import ImageCor, { LogIn1 } from "../../../public/ImageCor";
import Link from "next/link";

const SignIn = () => {
    return (
        <div className=" mx-auto max-w-screen-xl my-20 p-2 lg:rounded-full lg:pl-6">
            <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-20 mx-5 md:mx-0 md:my-0">
                <div className="md:w-1/3 max-w-sm">
                    <LogIn1 />
                </div>

                <div className="md:w-1/3 max-w-sm">
                    <div className="text-center justify-center my-5 flex lg:flex-1">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <img
                                className="h-7 w-auto"
                                src="https://cdn.iconscout.com/icon/free/png-512/free-location-2889912-2397879.png?f=avif&w=256"
                                alt=""
                            />
                        </Link>
                        <Link href="/" className="text-lg font-bold">
                            Real Time Location Tracking
                        </Link>
                    </div>
                    <h1 className="text-1xl xl:text-2xl text-center font-extrabold">
                        Feel Free To Sign In
                    </h1>
                    <div className="w-full flex-1 mt-8">
                        <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="password"
                            placeholder="Password"
                        />
                        <div className="mt-4 flex justify-between font-semibold text-sm">
                            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                                <input className="mr-1" type="checkbox" />
                                <span>Remember Me</span>
                            </label>
                            <a
                                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                                href="#"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                <span className="ml-3">Sign In</span>
                            </button>
                        </div>
                        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                                Or
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                <div className="bg-white p-2 rounded-full">
                                    <svg
                                        className="w-4"
                                        viewBox="0 0 533.5 544.3"
                                    >
                                        <path
                                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                            fill="#4285f4"
                                        />
                                        <path
                                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                            fill="#34a853"
                                        />
                                        <path
                                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                            fill="#fbbc04"
                                        />
                                        <path
                                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                            fill="#ea4335"
                                        />
                                    </svg>
                                </div>
                                <span className="ml-4">
                                    Sign In with Google
                                </span>
                            </button>
                            <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                <div className="bg-white p-1 rounded-full">
                                    <svg className="w-6" viewBox="0 0 32 32">
                                        <path
                                            fillRule="evenodd"
                                            d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                                        />
                                    </svg>
                                </div>
                                <span className="ml-4">
                                    Sign In with GitHub
                                </span>
                            </button>
                        </div>
                        <div className="mt-9 font-semibold text-sm text-slate-500 text-center md:text-left">
                            Don&apos;t have an account?{" "}
                            <span className="text-red-600 hover:underline hover:underline-offset-4">
                                {" "}
                                <Link href="/user/SignUp">Register</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignIn;
