"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button"; // Ensure this import is correct
import Nav from "@/components/Nav"; // Correctly import Nav
import MobileNav from "@/components/MobileNav"; // Correctly import MobileNav

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Oat<span className="text-amber-500">.</span>
                    </h1>
                </Link>

                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;
