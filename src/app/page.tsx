import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

export default function EyeClinicLanding() {
    return (
        <AuroraBackground>
            <div className="min-h-screen">
                {/* Hero Section with Aurora Background */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    {/* Animated Aurora Background */}
                    {/* <div className="absolute inset-0 overflow-hidden">
                        <div className="aurora-bg">
                            <div className="aurora-layer aurora-layer-1"></div>
                            <div className="aurora-layer aurora-layer-2"></div>
                            <div className="aurora-layer aurora-layer-3"></div>
                        </div>
                    </div> */}

                    {/* Hero Content */}
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-4 leading-tight">
                            Om Eye Clinic &<br />
                            <span className="text-blue-600">Phaco Centre</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 mb-8 font-medium">
                            Trusted Eye Care in Patna
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Book Appointment
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Call Now
                            </Button>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </section>

                {/* Info Cards Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
                            Visit Our Clinic
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Address Card */}
                            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                                <CardContent className="p-8 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                                        <MapPin className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                                        Our Location
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        South of Shivaji Park, MIGH 305, Tempo
                                        Stand Rd, near Kankarbagh, Lohia Nagar,
                                        Patna, Bihar 800020
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Phone Card */}
                            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                                <CardContent className="p-8 text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                                        <Phone className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                                        Contact Us
                                    </h3>
                                    <p className="text-slate-600 text-lg font-medium">
                                        0943414 21087
                                    </p>
                                    <p className="text-slate-500 mt-2">
                                        Call for appointments & inquiries
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Hours Card */}
                            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                                <CardContent className="p-8 text-center">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                                        <Clock className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                                        Opening Hours
                                    </h3>
                                    <p className="text-slate-600">
                                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                                        Open – Closes at 7 PM
                                    </p>
                                    <p className="text-slate-500 mt-2">
                                        Monday to Sunday
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                {/* <section className="py-16 bg-slate-800 text-white">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Improve Your Vision?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Schedule your consultation with our experienced eye
                            care specialists today.
                        </p>
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Book Your Appointment
                        </Button>
                    </div>
                </section> */}
            </div>
        </AuroraBackground>
    );
}
