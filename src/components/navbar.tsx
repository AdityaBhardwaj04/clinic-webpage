"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="relative w-72 h-20 md:w-96 md:h-32">
                        <Image
                            src="/logo.svg"
                            alt="Om Eye Clinic Logo"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 768px"
                        />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-blue-600"
                        >
                            Home
                        </Link>
                        <Link
                            href="/services"
                            className="text-blue-600 font-medium"
                        >
                            Services
                        </Link>
                        {/* <Link href="/doctors" className="text-gray-600 hover:text-blue-600">Doctors</Link> */}
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-blue-600"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-600 hover:text-blue-600"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Book Button (Always visible) */}
                    <div className="hidden md:block">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                            Book Appointment
                        </button>
                    </div>

                    {/* Hamburger Menu (Mobile only) */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 space-y-4">
                        <Link
                            href="/"
                            className="block text-gray-600 hover:text-blue-600"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link
                            href="/services"
                            className="block text-blue-600 font-medium"
                            onClick={toggleMenu}
                        >
                            Services
                        </Link>
                        {/* <Link href="/doctors" className="block text-gray-600 hover:text-blue-600" onClick={toggleMenu}>Doctors</Link> */}
                        <Link
                            href="/about"
                            className="block text-gray-600 hover:text-blue-600"
                            onClick={toggleMenu}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="block text-gray-600 hover:text-blue-600"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                        <button
                            onClick={toggleMenu}
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Book Appointment
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
