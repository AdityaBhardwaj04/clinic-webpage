import {
    Stethoscope,
    Eye,
    Glasses,
    Activity,
    Droplet,
    Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ServicesPage() {
    const services = [
        {
            icon: <Eye className="h-8 w-8 text-blue-600" />,
            title: "Comprehensive Eye Examinations",
            description:
                "Our thorough eye examinations assess your vision and eye health using state-of-the-art diagnostic equipment. We evaluate visual acuity, eye muscle coordination, peripheral vision, and screen for common eye diseases.",
            cta: "Schedule an Exam",
        },
        {
            icon: <Glasses className="h-8 w-8 text-blue-600" />,
            title: "Prescription Glasses & Contact Lenses",
            description:
                "We offer a wide selection of designer frames and premium lenses to suit your style and vision needs. Our experts will help you find the perfect fit, whether you prefer glasses or contact lenses.",
            cta: "Browse Our Selection",
        },
        {
            icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
            title: "Cataract Evaluation & Phaco Surgery",
            description:
                "Our specialists provide comprehensive cataract evaluations and perform advanced phacoemulsification surgery, a minimally invasive procedure to remove cataracts and restore clear vision.",
            cta: "Learn About Treatment",
        },
        {
            icon: <Droplet className="h-8 w-8 text-blue-600" />,
            title: "Glaucoma Screening & Treatment",
            description:
                "Early detection is crucial for managing glaucoma. We offer specialized screening tests and personalized treatment plans to prevent vision loss from this common eye condition.",
            cta: "Get Screened Today",
        },
        {
            icon: <Activity className="h-8 w-8 text-blue-600" />,
            title: "Diabetic Retinopathy Screening",
            description:
                "Diabetes can affect your vision. Our diabetic retinopathy screening detects early changes in the blood vessels of your retina, allowing for timely intervention to preserve your sight.",
            cta: "Schedule Screening",
        },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Our Services
                        </h1>
                        <p className="text-lg text-blue-700 mb-8">
                            At Om Eye Clinic, we provide comprehensive eye care
                            services using the latest technology and techniques
                            to ensure your optimal eye health.
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

            {/* Services Section */}
            <section className="py-16 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <CardHeader>
                                <div className="mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <CardTitle className="text-xl text-blue-900">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    variant="outline"
                                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                                >
                                    {service.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Appointment Section */}
            <section className="bg-blue-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Ready to Schedule Your Appointment?
                        </h2>
                        <p className="text-blue-100 mb-8">
                            Our team of experienced ophthalmologists and
                            optometrists are ready to provide you with
                            exceptional eye care.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button className="bg-white text-blue-900 hover:bg-blue-50">
                                <Calendar className="mr-2 h-4 w-4" />
                                Book Appointment
                            </Button>
                            <Button
                                variant="outline"
                                className="border-white text-white hover:bg-blue-800"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">
                        Why Choose Om Eye Clinic?
                    </h2>
                    <p className="text-gray-600">
                        We combine expertise, advanced technology, and
                        compassionate care to provide the best possible outcomes
                        for our patients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">
                            Experienced Specialists
                        </h3>
                        <p className="text-gray-600">
                            Our team of board-certified ophthalmologists and
                            optometrists have decades of combined experience.
                        </p>
                    </div>

                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">
                            Advanced Technology
                        </h3>
                        <p className="text-gray-600">
                            We invest in the latest diagnostic and treatment
                            technologies to provide superior eye care.
                        </p>
                    </div>

                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">
                            Patient-Centered Care
                        </h3>
                        <p className="text-gray-600">
                            We prioritize your comfort and satisfaction,
                            providing personalized care for each patient.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                                    How often should I have an eye examination?
                                </h3>
                                <p className="text-gray-600">
                                    Most adults should have a comprehensive eye
                                    exam every 1-2 years. If you have risk
                                    factors like diabetes or a family history of
                                    eye disease, your doctor may recommend more
                                    frequent exams.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                                    What happens during a cataract surgery?
                                </h3>
                                <p className="text-gray-600">
                                    During phacoemulsification cataract surgery,
                                    your surgeon makes a tiny incision in your
                                    eye, breaks up the cloudy lens using
                                    ultrasound waves, and replaces it with a
                                    clear artificial lens. The procedure
                                    typically takes less than 30 minutes.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                                    How do I know if I have glaucoma?
                                </h3>
                                <p className="text-gray-600">
                                    Early-stage glaucoma often has no symptoms,
                                    which is why regular screening is crucial.
                                    As the condition progresses, you may
                                    experience peripheral vision loss, eye pain,
                                    headaches, and blurred vision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
