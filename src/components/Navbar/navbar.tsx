'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import NavLogo from "../../assets/logo-top.jpg";
import NavLinks from './nav-links';
import NavMobile from './nav-mobile';
import Image from 'next/image';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white border-b border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto ">
                <div className="flex justify-between items-center h-30">
                    {/* Logo */}
                    <Image
                        loading="eager"
                        width={300}
                        height={150}
                        src={NavLogo}
                        alt='logo'
                        className="cursor-pointer object-contain h-20 w-auto"
                    />

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <NavLinks pathname={pathname} />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <NavMobile
                        pathname={pathname}
                        onClose={() => setIsOpen(false)}
                    />
                )}
            </div>
        </nav>
    );
}
export default Navbar;