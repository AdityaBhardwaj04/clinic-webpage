"use client";

import { Eye } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-blue-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <Eye className="h-6 w-6 text-white mr-2" />
                            <span className="text-xl font-bold">
                                Om Eye Clinic
                            </span>
                        </div>
                        <p className="text-blue-200">
                            Providing exceptional eye care services with
                            compassion and expertise.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-blue-200 hover:text-white"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-blue-200 hover:text-white"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/doctors"
                                    className="text-blue-200 hover:text-white"
                                >
                                    Our Doctors
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-blue-200 hover:text-white"
                                >
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/services#examinations"
                                    className="text-blue-200 hover:text-white"
                                >
                                    Eye Examinations
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services#glasses"
                                    className="text-blue-200 hover:text-white"
                                >
                                    Prescription Glasses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services#cataract"
                                    className="text-blue-200 hover:text-white"
                                >
                                    Cataract Surgery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services#glaucoma"
                                    className="text-blue-200 hover:text-white"
                                >
                                    Glaucoma Treatment
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Contact Us
                        </h3>
                        <address className="not-italic text-blue-200">
                            <p>Om Eye Clinic & Phaco Centre</p>
                            <p>MIGH-305, Lohia Nagar, Kankarbagh, Patna</p>
                            <p className="mt-2">Phone: 9431421087</p>
                            {/* <p>Email: info@omeyeclinic.com</p> */}
                        </address>
                    </div>
                </div>
                <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
                    <p>&copy; {year} Om Eye Clinic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
