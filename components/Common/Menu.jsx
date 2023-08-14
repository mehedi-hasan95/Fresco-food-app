"use client";

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
const Menu = () => {
    const pathname = usePathname();
    return (
        <div>
            <div className="hidden md:block">
                <div className="flex justify-between container mx-auto py-4 items-center">
                    <nav className="flex gap-5">
                        <Link
                            className={pathname === "/" ? "text-red-600" : ""}
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            className={
                                pathname === "/menu" ? "text-red-600" : ""
                            }
                            href="/menu"
                        >
                            Menu
                        </Link>
                        <Link
                            className={
                                pathname === "/about-us" ? "text-red-600" : ""
                            }
                            href="/about-us"
                        >
                            About Us
                        </Link>
                        <Link
                            className={
                                pathname === "/contact" ? "text-red-600" : ""
                            }
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </nav>
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            height={140}
                            width={140}
                            alt="logo"
                        />
                    </Link>
                    <div className="flex gap-5">
                        <Link href="/cart">Cart</Link>
                        <Link href="/login">Login</Link>
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <MobileMenu />
            </div>
        </div>
    );
};

export default Menu;
