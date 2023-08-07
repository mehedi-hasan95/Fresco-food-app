"use client";

import { useState } from "react";

const FreeDelivery = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return isVisible ? (
        <div className="bg-orange-700">
            <div className="container mx-auto text-white text-xl flex justify-center gap-10 py-2">
                <h4 className="">Delivery will be free if you buy upto $50</h4>
                <button
                    className="text-2xl text-white flex justify-end"
                    onClick={handleClose}
                >
                    X
                </button>
            </div>
        </div>
    ) : null;
};

export default FreeDelivery;
