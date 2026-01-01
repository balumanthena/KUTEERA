"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "Why Wooden?", href: "/why-wooden" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-primary/10">
            <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative h-16 w-52 md:h-20 md:w-72">
                        <Image
                            src="/logo2.png"
                            alt="Kuteera Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-base font-medium text-muted-foreground hover:text-[#8B5E3C] transition-colors group py-1"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#8B5E3C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center rounded-full opacity-80"
                                style={{
                                    backgroundImage: "linear-gradient(90deg, #8B5E3C, #A06B46, #8B5E3C)",
                                    boxShadow: "0 1px 2px rgba(0,0,0,0.1)"
                                }}
                            />
                        </Link>
                    ))}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Button size="sm" variant="primary" className="hidden md:flex">
                        Explore Toys
                    </Button>

                    <button
                        className="md:hidden p-2 text-primary"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-primary/10 bg-background"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium py-2 text-foreground/80 hover:text-primary border-b border-dashed border-primary/10 last:border-none"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full mt-2" onClick={() => setIsOpen(false)}>
                                Explore Toys
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
