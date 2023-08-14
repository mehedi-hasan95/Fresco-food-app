import Image from "next/image";

const OurMenu = () => {
    return (
        <div className="relative">
            <div className="container mx-auto pt-16 text-center">
                <h2 className="text-3xl md:text-5xl">Berkshire Swash</h2>
                <h3 className="text-2xl md:text-4xl py-7">
                    Quality Ingredients, Tasty Meals
                </h3>
                <p className="max-w-3xl mx-auto">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione, itaque ea magnam velit expedita voluptatibus
                    dolores earum cumque!
                </p>
            </div>
            <div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto bg-white pt-10">
                    <div>
                        <Image
                            src="/dine.jpg"
                            height={500}
                            width={500}
                            alt="dine"
                        />
                        <div className="bg-gray-100 pb-3 p-3 shadow-orange-300 shadow-md rounded-md">
                            <h2 className="text-xl">Price: $12</h2>
                            <p className="pt-3">Lorem ipsum dolor sit amet.</p>
                            <button className="bg-orange-theme hover:bg-slate-500 hover:text-white transition-all duration-300 px-7 py-2 rounded-full mt-4">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/dine.jpg"
                            height={500}
                            width={500}
                            alt="dine"
                        />
                        <div className="bg-gray-100 pb-3 p-3 shadow-orange-300 shadow-md rounded-md">
                            <h2 className="text-xl">Price: $12</h2>
                            <p className="pt-3">Lorem ipsum dolor sit amet.</p>
                            <button className="bg-orange-theme hover:bg-slate-500 hover:text-white transition-all duration-300 px-7 py-2 rounded-full mt-4">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/dine.jpg"
                            height={500}
                            width={500}
                            alt="dine"
                        />
                        <div className="bg-gray-100 pb-3 p-3 shadow-orange-300 shadow-md rounded-md">
                            <h2 className="text-xl">Price: $12</h2>
                            <p className="pt-3">Lorem ipsum dolor sit amet.</p>
                            <button className="bg-orange-theme hover:bg-slate-500 hover:text-white transition-all duration-300 px-7 py-2 rounded-full mt-4">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/dine.jpg"
                            height={500}
                            width={500}
                            alt="dine"
                        />
                        <div className="bg-gray-100 pb-3 p-3 shadow-orange-300 shadow-md rounded-md">
                            <h2 className="text-xl">Price: $12</h2>
                            <p className="pt-3">Lorem ipsum dolor sit amet.</p>
                            <button className="bg-orange-theme hover:bg-slate-500 hover:text-white transition-all duration-300 px-7 py-2 rounded-full mt-4">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-center py-12">
                    <button className="bg-orange-theme px-4 py-2 rounded-full">
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;
