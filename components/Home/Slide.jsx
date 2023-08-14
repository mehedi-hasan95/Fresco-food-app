"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
    {
        id: 1,
        img: "/pizza1113.jpg",
    },
    {
        id: 2,
        img: "/pizza2223.jpg",
    },
    {
        id: 3,
        img: "/pizza3333.jpg",
    },
];

const Slide = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === data.length - 1 ? 0 : prev + 1
            );
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <Image
                src={data[currentSlide].img}
                height={400}
                width={300}
                alt="Slider"
            />
        </div>
    );
};

export default Slide;
