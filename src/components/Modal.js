import React from "react";

export default function Modal() {
    return (
        <>
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
                    <h3 className="text-lg font-bold">Current Addres.. !</h3>
                    <p className="py-4">
                        Hey I am Main Modal
                    </p>
                </div>
            </div>
        </>
    );
}
