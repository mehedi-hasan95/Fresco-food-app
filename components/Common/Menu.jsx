import Image from "next/image";
import Link from "next/link";

const Menu = () => {
    return (
        <div className="flex justify-between container mx-auto py-4 items-center">
            <nav className="flex gap-5">
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <Link href="/">
                <Image src="/logo.svg" height={140} width={140} alt="logo" />
            </Link>
            <div>
                <Link href="/cart">Cart</Link>
                <Link href="/login">Login</Link>
            </div>
        </div>
    );
};

export default Menu;
