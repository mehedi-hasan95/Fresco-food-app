"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
    const [openMenu, setOpenMenu] = useState(true);
    return (
        <div className="px-5">
            <div className="flex justify-between container mx-auto py-4 items-center">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        height={140}
                        width={140}
                        alt="logo"
                    />
                </Link>

                <Image
                    src={openMenu ? "/close.png" : "/open.png"}
                    height={25}
                    width={25}
                    alt="Open"
                    onClick={() => setOpenMenu(!openMenu)}
                    className="cursor-pointer"
                />
            </div>

            {/* After Open the Menu  */}
            {openMenu && (
                <div>
                    <nav className="flex flex-col gap-5 h-screen">
                        <Link onClick={() => setOpenMenu(false)} href="/">
                            Home
                        </Link>
                        <Link onClick={() => setOpenMenu(false)} href="/menu">
                            Menu
                        </Link>
                        <Link
                            onClick={() => setOpenMenu(false)}
                            href="/about-us"
                        >
                            About Us
                        </Link>
                        <Link
                            onClick={() => setOpenMenu(false)}
                            href="/contact"
                        >
                            Contact
                        </Link>
                        <Link onClick={() => setOpenMenu(false)} href="/cart">
                            Cart
                        </Link>
                        <Link onClick={() => setOpenMenu(false)} href="/login">
                            Login
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
