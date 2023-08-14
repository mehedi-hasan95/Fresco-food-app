import Image from "next/image";
const Hero = () => {
    return (
        <div className="bg-[url('/hero.jpg')] bg-fixed relative h-[80vh] z-10">
            {/* This is for the gradient  */}
            <div class="absolute left-0 top-0 h-full w-full bg-gradient-to-r bg-black opacity-50 -z-10"></div>
            {/* This is for the content  */}
            <div className="max-w-3xl mx-auto flex flex-row justify-between items-center h-full">
                {/* This is for main content  */}
                <div className="flex h-full items-center justify-center flex-col">
                    <Image
                        src="/frill.png"
                        width={250}
                        height={50}
                        alt="spoon"
                        className="order-first pb-10"
                    />
                    <h2 className="text-white text-3xl md:text-5xl lg:text-8xl font-berkshire_swash">
                        Fresco.
                    </h2>
                    <h4 className="text-orange-theme text-xl py-7">
                        Italian Specialities
                    </h4>
                    <h3 className="text-white text-2xl relative">
                        Good Food | Good wine
                    </h3>
                </div>
                {/* This is for image  */}
                <Image
                    src="/spoon-2.png"
                    width={50}
                    height={300}
                    alt="spoon"
                    className="order-first"
                />
                <Image
                    src="/knife.png"
                    width={50}
                    height={300}
                    alt="knife"
                    className="order-last"
                />
            </div>
        </div>
    );
};

export default Hero;
