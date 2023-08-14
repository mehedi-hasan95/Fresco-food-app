import Image from "next/image";

const HomeInfo = () => {
    return (
        <div className="bg-bg2">
            <div className="container mx-auto grid bg-bg3 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="group px-3 py-5 flex flex-col justify-center items-center">
                    <Image
                        src="/item1.png"
                        height={200}
                        width={200}
                        alt="Item 1"
                        className="group-hover:-scale-x-100 transition-all duration-400"
                    />
                    <h2 className="text-3xl text-black group-hover:text-red-theme font-semibold py-3">
                        Choose Your Item
                    </h2>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Mollitia, consequatur.
                    </p>
                </div>
                <div className="group px-3 py-5 flex flex-col justify-center items-center">
                    <Image
                        src="/item2.png"
                        height={200}
                        width={200}
                        alt="Item 1"
                        className="group-hover:-scale-x-100 transition-all duration-400"
                    />
                    <h2 className="text-3xl text-black group-hover:text-red-theme font-semibold py-3">
                        Add Home Address
                    </h2>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Mollitia, consequatur.
                    </p>
                </div>
                <div className="group px-3 py-5 flex flex-col justify-center items-center">
                    <Image
                        src="/item3.png"
                        height={200}
                        width={200}
                        alt="Item 1"
                        className="group-hover:-scale-x-100 transition-all duration-400"
                    />
                    <h2 className="text-3xl text-black group-hover:text-red-theme font-semibold py-3">
                        Choose Your Item
                    </h2>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Mollitia, consequatur.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeInfo;
