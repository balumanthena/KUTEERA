import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#2E2E2E] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="font-serif text-2xl font-bold tracking-tight mb-4 block text-[#E6B566]">
                            WoodenMind
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Premium wooden mind-game toys designed to inspire creativity, logic, and natural learning for children worldwide.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-[#E6B566] transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-[#E6B566] transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-[#E6B566] transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="font-serif text-lg mb-6 text-[#E6B566]">Shop</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/products?age=3-5" className="hover:text-white transition-colors">Age 3-5 Years</Link></li>
                            <li><Link href="/products?age=6-8" className="hover:text-white transition-colors">Age 6-8 Years</Link></li>
                            <li><Link href="/products?cat=logic" className="hover:text-white transition-colors">Logic Games</Link></li>
                            <li><Link href="/products?cat=montessori" className="hover:text-white transition-colors">Montessori</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-serif text-lg mb-6 text-[#E6B566]">Support</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
                            <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Exchange</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif text-lg mb-6 text-[#E6B566]">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="mt-1 shrink-0" />
                                <span>hello@woodenmind.com</span>
                            </li>
                            <li>123 Playful Street, Innovation Park, New York, NY 10001</li>
                            <li className="text-[#E6B566] cursor-pointer mt-2 hover:underline">
                                Start WhatsApp Chat
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} WoodenMind Toys. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
