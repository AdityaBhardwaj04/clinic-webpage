"use client";

import { Eye, Award, Users, Heart, Shield } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
    const values = [
        {
            icon: <Heart className="h-8 w-8 text-blue-600" />,
            title: "Compassionate Care",
            description:
                "We treat every patient with empathy, understanding, and respect, ensuring comfort throughout their journey.",
        },
        {
            icon: <Award className="h-8 w-8 text-blue-600" />,
            title: "Excellence",
            description:
                "We strive for the highest standards in medical care, continuously improving our skills and services.",
        },
        {
            icon: <Shield className="h-8 w-8 text-blue-600" />,
            title: "Trust & Integrity",
            description:
                "We build lasting relationships with our patients based on honesty, transparency, and reliable care.",
        },
        {
            icon: <Users className="h-8 w-8 text-blue-600" />,
            title: "Patient-Centered",
            description:
                "Every decision we make is focused on what's best for our patients' health and well-being.",
        },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                            About Om Eye Clinic
                        </h1>
                        <p className="text-lg text-blue-700 mb-8">
                            Dedicated to preserving and enhancing your vision
                            with compassionate care and cutting-edge technology
                            since 2004.
                        </p>
                    </div>
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 h-16 bg-white"
                    style={{
                        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)",
                    }}
                ></div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-900 mb-6">
                                Our Story
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Om Eye Clinic was established in 2004 with a
                                simple yet profound mission: to provide
                                world-class eye care that combines advanced
                                medical expertise with genuine compassion for
                                our patients.
                            </p>
                            <p className="text-gray-600 mb-4">
                                What started as a small practice has grown into
                                a comprehensive eye care center, serving
                                thousands of patients across the region. Our
                                commitment to excellence and patient
                                satisfaction has made us a trusted name in
                                ophthalmology.
                            </p>
                            <p className="text-gray-600">
                                Today, we continue to invest in the latest
                                technology and training to ensure our patients
                                receive the best possible care for all their
                                vision needs.
                            </p>
                        </div>
                        <div className="relative w-full h-72">
                            <Image
                                src="/images/clinic-exterior.jpg"
                                alt="Om Eye Clinic building exterior"
                                fill
                                className="rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="border-none shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-blue-900 flex items-center">
                                        <Eye className="mr-3 h-8 w-8 text-blue-600" />
                                        Our Mission
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        To provide exceptional, comprehensive
                                        eye care services that preserve and
                                        enhance vision while treating each
                                        patient with dignity, respect, and
                                        compassion. We are committed to using
                                        the latest technology and evidence-based
                                        practices to deliver the highest quality
                                        care.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-blue-900 flex items-center">
                                        <Award className="mr-3 h-8 w-8 text-blue-600" />
                                        Our Vision
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        To be the leading eye care center in the
                                        region, recognized for our clinical
                                        excellence, innovative treatments, and
                                        patient-centered approach. We envision a
                                        future where preventable blindness is
                                        eliminated through early detection and
                                        advanced treatment.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Core Values */}
            <section className="py-16 container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Our Expert Team */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
                            Meet Our Expert Team
                        </h2>
                        <div className="flex justify-center">
                            <Card className="w-full md:w-2/3 lg:w-1/2 border border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader className="text-center">
                                    <div className="relative w-32 h-32 mx-auto mb-4">
                                        <Image
                                            src="/images/dr-ajay.jpg"
                                            alt="Dr. Ajay Kumar Bhardwaj"
                                            fill
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                    <CardTitle className="text-xl text-blue-900">
                                        Dr. Ajay Kumar Bhardwaj
                                    </CardTitle>
                                    <CardDescription className="text-blue-600 font-medium">
                                        Chief Ophthalmologist & Founder
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-center space-y-2">
                                    <p className="text-sm text-gray-600">
                                        <strong>Specialization:</strong>{" "}
                                        Cataract Surgery, Retinal Disorders
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Experience:</strong> 15+ years
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Education:</strong> MBBS, MS
                                        Ophthalmology, AIIMS Delhi
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-16 bg-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">
                            Our Impact in Numbers
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold mb-2">
                                    15,000+
                                </div>
                                <div className="text-blue-200">
                                    Patients Treated
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">
                                    5,000+
                                </div>
                                <div className="text-blue-200">
                                    Surgeries Performed
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">
                                    20+
                                </div>
                                <div className="text-blue-200">
                                    Years of Service
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">
                                    98%
                                </div>
                                <div className="text-blue-200">
                                    Patient Satisfaction
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
