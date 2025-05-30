"use client";

import Image from "next/image";

export default function Navbar() {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Increased logo size: w-48 h-16 */}
                    <div className="relative w-96 h-32">
                        <Image
                            src="/logo.svg"
                            alt="Om Eye Clinic Logo"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 768px"
                        />
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a
                            href="/"
                            className="text-gray-600 hover:text-blue-600"
                        >
                            Home
                        </a>
                        <a
                            href="/services"
                            className="text-blue-600 font-medium"
                        >
                            Services
                        </a>
                        {/* <a
                            href="/doctors"
                            className="text-gray-600 hover:text-blue-600"
                        >
                            Doctors
                        </a> */}
                        <a
                            href="/about"
                            className="text-gray-600 hover:text-blue-600"
                        >
                            About
                        </a>
                        <a
                            href="/contact"
                            className="text-gray-600 hover:text-blue-600"
                        >
                            Contact
                        </a>
                    </nav>
                    <div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
