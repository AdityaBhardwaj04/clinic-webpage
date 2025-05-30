"use client";

import type React from "react";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        preferredDate: "",
        preferredTime: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you! We’ll get back to you shortly.");
    };

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg text-blue-700 mb-8">
                        Schedule an appointment or reach out for any eye care
                        queries.
                    </p>
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 h-16 bg-white"
                    style={{
                        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)",
                    }}
                />
            </section>

            {/* Contact Info & Form */}
            <section className="py-16 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Clinic Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">
                            Get in Touch
                        </h2>

                        <Card>
                            <CardContent className="p-6 flex gap-4">
                                <div className="bg-blue-50 p-3 rounded-full">
                                    <MapPin className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-900">
                                        Our Location
                                    </h3>
                                    <p className="text-gray-600">
                                        Om Eye Clinic and Phaco Centre
                                        <br />
                                        MIGH-305, Lohia Nagar, Kankarbagh, Patna
                                        - 800020
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 flex gap-4">
                                <div className="bg-blue-50 p-3 rounded-full">
                                    <Phone className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-900">
                                        Call Us
                                    </h3>
                                    <p className="text-gray-600">
                                        Clinic: +91 93044 55988
                                        <br />
                                        Appointments: +91 79922 61089
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 flex gap-4">
                                <div className="bg-blue-50 p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-900">
                                        Email
                                    </h3>
                                    <p className="text-gray-600">
                                        omeyeclinic@gmail.com
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 flex gap-4">
                                <div className="bg-blue-50 p-3 rounded-full">
                                    <Clock className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-900">
                                        Opening Hours
                                    </h3>
                                    <p className="text-gray-600">
                                        Mon–Sat: 11 AM – 3 PM & 6 PM – 9 PM
                                        <br />
                                        Friday: Closed
                                        <br />
                                        Sunday: 11 AM – 2 PM
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card className="border border-blue-100 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl text-blue-900">
                                Send us a Message
                            </CardTitle>
                            <CardDescription>
                                We’ll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="name">
                                            Full Name *
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">
                                            Email Address *
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="phone">
                                            Phone Number
                                        </Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="service">
                                            Service Interested In
                                        </Label>
                                        <Select
                                            onValueChange={(value) =>
                                                handleSelectChange(
                                                    "service",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="mt-1">
                                                <SelectValue placeholder="Select a service" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="checkup">
                                                    General Eye Checkup
                                                </SelectItem>
                                                <SelectItem value="phaco">
                                                    Phaco Surgery
                                                </SelectItem>
                                                <SelectItem value="cataract">
                                                    Cataract Evaluation
                                                </SelectItem>
                                                <SelectItem value="glaucoma">
                                                    Glaucoma Consultation
                                                </SelectItem>
                                                <SelectItem value="childcare">
                                                    Pediatric Eye Care
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="preferredDate">
                                            Preferred Date
                                        </Label>
                                        <Input
                                            id="preferredDate"
                                            name="preferredDate"
                                            type="date"
                                            value={formData.preferredDate}
                                            onChange={handleInputChange}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="preferredTime">
                                            Preferred Time
                                        </Label>
                                        <Select
                                            onValueChange={(value) =>
                                                handleSelectChange(
                                                    "preferredTime",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="mt-1">
                                                <SelectValue placeholder="Select time" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="morning">
                                                    Morning (9 AM – 12 PM)
                                                </SelectItem>
                                                <SelectItem value="afternoon">
                                                    Afternoon (12 PM – 4 PM)
                                                </SelectItem>
                                                <SelectItem value="evening">
                                                    Evening (4 PM – 7 PM)
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="mt-1"
                                        placeholder="Describe your symptoms or ask a question..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700"
                                >
                                    <Calendar className="mr-2 h-4 w-4" />
                                    Send Message & Request Appointment
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Google Maps Embed */}
            <section className="py-12 bg-blue-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-semibold text-blue-900 text-center mb-4">
                        Find Us on Google Maps
                    </h2>
                    <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.7451165591542!2d85.14866744151229!3d25.591738367363114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed588800b89987%3A0x2f04b37e1426e8d9!2sOm%20Eye%20Clinic%20%26%20Phaco%20Centre!5e1!3m2!1sen!2sin!4v1748603464573!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
