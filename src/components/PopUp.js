import Link from "next/link";
import MapWithNoSSR from "@/maps/MapWithNoSSR";
import AddressPage from "@/maps/AddressPage";
import Geolocation from "@/maps/Geolocation";

const PopUp = () => {
    return (
        <>
            <section className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
                {/* BUY ME A PIZZA AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
                <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                    <div className="relative px-5 py-2 font-medium text-white group">
                        {/* The button to open modal */}
                        <label
                            htmlFor="my-modal-3"
                            className="relative px-5 py-2 font-medium text-white group"
                        >
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                            <span className="relative">Current Location</span>
                        </label>
                    </div>
                </div>
            </section>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-2xl font-bold">
                        Current Addres.. !
                    </h3>
                        <div className="text-xs text-gray-800">
                            <Geolocation/>
                            <AddressPage />
                        </div>
                    <div className="py-4">
                        <MapWithNoSSR />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopUp;
