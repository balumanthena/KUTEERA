import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            <Section>
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Contact Info */}
                    <div className="bg-[#2E2E2E] text-white p-12 md:w-2/5 flex flex-col justify-between">
                        <div>
                            <h2 className="font-serif text-3xl font-bold mb-6 text-[#E6B566]">Get in Touch</h2>
                            <p className="text-gray-400 mb-12">
                                Have questions about our toys or wholesale enquiries? We'd love to hear from you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Mail className="text-[#E6B566] shrink-0" />
                                    <div>
                                        <p className="font-bold">Email</p>
                                        <p className="text-gray-400 text-sm">hello@woodenmind.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-[#E6B566] shrink-0" />
                                    <div>
                                        <p className="font-bold">Office</p>
                                        <p className="text-gray-400 text-sm">123 Innovation Park, NY</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-xs text-gray-500">Working Hours: Mon-Fri, 9am - 6pm</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-12 md:w-3/5">
                        <h2 className="font-serif text-2xl font-bold text-[#2E2E2E] mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-gray-50" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-gray-50" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-gray-50" placeholder="jane@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-gray-50 h-32 resize-none" placeholder="How can we help?" />
                            </div>

                            <Button fullWidth>Send Message</Button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                            <p className="text-gray-500 text-sm mb-4">Prefer real-time chat?</p>
                            <Button variant="outline" className="gap-2 text-green-600 border-green-600 hover:bg-green-50 w-full">
                                <MessageCircle size={18} /> Chat on WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
