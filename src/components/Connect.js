import React from 'react'

export default function Connect() {
  return (
    <>
  {/* Container for demo purpose */}
  <div>
    {/* Section: Design Block */}
    <section className="mb-40 background-radial-gradient overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      .background-radial-gradient {\n        background-color: hsl(218, 41%, 15%);\n        background-image: radial-gradient(\n          650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%\n        ),\n        radial-gradient(\n          1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%\n        );\n      }\n      #radius-shape-1 {\n        height: 220px;\n        width: 220px;\n        top: -60px;\n        left: -130px;\n        background: radial-gradient(#44006b, #ad1fff);\n        overflow: hidden;\n      }\n      #radius-shape-2 {\n        border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n        bottom: -60px;\n        right: -110px;\n        width: 300px;\n        height: 300px;\n        background: radial-gradient(#44006b, #ad1fff);\n        overflow: hidden;\n      }\n      .bg-glass {\n        background-color: hsla(0, 0%, 100%, 0.9);\n        backdrop-filter: saturate(200%) blur(25px);\n      }\n    "
        }}
      />
      <div className="px-6 py-12 lg:py-24 md:px-12 text-center lg:text-left">
        <div className="container mx-auto xl:px-32 text-gray-800">
          <div className="grid lg:grid-cols-2 gap-12  items-center">
            <div className="mt-12 lg:mt-0" style={{ zIndex: 10 }}>
              <h1
                className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your business
                </span>
              </h1>
              <p className="opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>
            <div className="mb-12 lg:mb-0 relative">
              <div
                id="radius-shape-1"
                className="absolute rounded-full shadow-lg"
              />
              <div id="radius-shape-2" className="absolute shadow-lg" />
              <div className="block rounded-lg shadow-lg bg-glass px-6 py-12 md:px-12">
                <form>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="First name"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <input
                    type="email"
                    className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                  <input
                    type="password"
                    className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                  <div className="form-check flex justify-center mb-6">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckChecked"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="flexCheckChecked"
                    >
                      Lets Connect Each other
                    </label>
                  </div>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 mb-6 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Connect
                  </button>
                  <div className="text-center">
                    <p className="mb-6">or Connect with:</p>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="#!"
                      role="button"
                      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 action:text-blue-800 transition duration-200 ease-in-out"
                    >
                      {/* Facebook */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        className="w-4 h-4 mx-4"
                      >
                        {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                        <path
                          fill="currentColor"
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        />
                      </svg>
                    </a>
                    <a
                      href="#!"
                      role="button"
                      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 action:text-blue-800 transition duration-200 ease-in-out"
                    >
                      {/* Google */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 488 512"
                        className="w-4 h-4 mx-4"
                      >
                        {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                        <path
                          fill="currentColor"
                          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                        />
                      </svg>
                    </a>
                    <a
                      href="#!"
                      role="button"
                      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 action:text-blue-800 transition duration-200 ease-in-out"
                    >
                      {/* Twitter */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 mx-4"
                      >
                        {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                        <path
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        />
                      </svg>
                    </a>
                    <a
                      href="#!"
                      role="button"
                      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 action:text-blue-800 transition duration-200 ease-in-out"
                    >
                      {/* Github */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        className="w-4 h-4 mx-4"
                      >
                        {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                        <path
                          fill="currentColor"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        />
                      </svg>
                    </a>
                  </div>
                </form>
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

  )
}
