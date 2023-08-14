import Slide from "./Slide";

const Slider = () => {
    return (
        <div className=" bg-bg1">
            <div className="container mx-auto flex gap-8 py-10 items-center">
                <div className="md:w-3/5">
                    <div className="flex items-end">
                        <div className="flex-1">
                            <h4 className="text-2xl">
                                Country&apos;s Most Loved!
                            </h4>
                            <h2 className="text-3xl md:text-5xl py-3">
                                Welcome
                            </h2>
                            <h3 className="text-xl pb-2">
                                We Are Locally Crafted Food & Wine Serving Since
                                1978.
                            </h3>
                            <p>
                                Congue, gravida. Placeat nibh sunt semper
                                elementum anim! Integer lectus debitis auctor.
                                Molestias vivamus eligendi ut, cupidatat nisl
                                iaculis etiam! Laboris aenean
                            </p>
                            <button className=" bg-orange-theme text-white font-semibold block mt-10 px-8 py-3 rounded-full">
                                More About Us
                            </button>
                        </div>
                        <div>
                            <Slide />
                        </div>
                    </div>
                </div>
                <div className="p-5 shadow-md md:w-2/5">
                    <div className="mb-10 bg-white px-3 py-5 rounded-md">
                        <h2
                            className="text-3xl md:text-4xl pb-3 font-semibold"
                            font-bold
                        >
                            America
                        </h2>
                        <p>
                            Ground Floor, BL-91, Plot 13/24, Udhana - Magdalla
                            Rd, Near Dharti Namkin, Chandramani Society, US,
                            America 32505
                        </p>
                        <h4 className=" text-red-theme text-xl pt-3">
                            Mon To Fri 9am–6pm
                        </h4>
                    </div>
                    <div className="mb-10 bg-white px-3 py-5 rounded-md">
                        <h2
                            className="text-3xl md:text-4xl pb-3 font-semibold"
                            font-bold
                        >
                            Canada
                        </h2>
                        <p>
                            Ground Floor, BL-91, Plot 13/24, Udhana - Magdalla
                            Rd, Near Dharti Namkin, Chandramani Society, US,
                            America 32505
                        </p>
                        <h4 className=" text-red-theme text-xl pt-3">
                            Mon To Fri 9am–6pm
                        </h4>
                    </div>
                    <div className="mb-10 bg-white px-3 py-5 rounded-md">
                        <h2 className="text-3xl md:text-4xl pb-3 font-semibold">
                            Australia
                        </h2>
                        <p>
                            Ground Floor, BL-91, Plot 13/24, Udhana - Magdalla
                            Rd, Near Dharti Namkin, Chandramani Society, US,
                            America 32505
                        </p>
                        <h4 className="text-red-theme text-xl pt-3">
                            Mon To Fri 9am–6pm
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
