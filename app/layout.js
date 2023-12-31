import "./globals.css";
import { Berkshire_Swash, Inter, Tilt_Prism } from "next/font/google";
import FreeDelivery from "@/components/Common/FreeDelivery";
import Menu from "@/components/Common/Menu";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const berkshire_swash = Berkshire_Swash({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-berkshire-swash",
    weight: "400",
});
const tilt_prism = Tilt_Prism({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-tilt-prism",
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${berkshire_swash.variable} ${tilt_prism.variable}`}
        >
            <body className={inter.className}>
                <FreeDelivery />
                <Menu />
                {children}
            </body>
        </html>
    );
}
