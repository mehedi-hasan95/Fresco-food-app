import Slide from "./Slide";

const Slider = () => {
    return (
        <div className="max-w-5xl mx-auto flex gap-8 py-10">
            <div className="md:w-2/3">
                <div className="flex">
                    <div className="flex-1">
                        <h4 className="text-2xl">Country&apos;s Most Loved!</h4>
                        <h2 className="text-3xl md:text-5xl py-3">Welcome</h2>
                        <h3 className="text-xl pb-2">
                            We Are Locally Crafted Food & Wine Serving Since
                            1978.
                        </h3>
                        <p>
                            Congue, gravida. Placeat nibh sunt semper elementum
                            anim! Integer lectus debitis auctor. Molestias
                            vivamus eligendi ut, cupidatat nisl iaculis etiam!
                            Laboris aenean
                        </p>
                    </div>
                    <div>
                        <Slide />
                    </div>
                </div>
                <button className=" bg-orange-theme text-white font-semibold block mt-10 px-8 py-3 rounded-full">
                    More About Us
                </button>
            </div>
            <div className="p-5 shadow-md">
                <h2 className="text-3xl md:text-5xl text-center">Hours</h2>
                <p>Monday - Friday | 9am - 10pm</p>
                <p>Saturday - Sunday | 11am - 9pm</p>
            </div>
        </div>
    );
};

export default Slider;
