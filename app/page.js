import Hero from "@/components/Home/Hero";
import HomeInfo from "@/components/Home/HomeInfo";
import OurMenu from "@/components/Home/OurMenu";
import Slider from "@/components/Home/Slider";

export default function Home() {
    return (
        <div>
            <Hero />
            <HomeInfo />
            <Slider />
            <OurMenu />
        </div>
    );
}
