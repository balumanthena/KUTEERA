"use client";

import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";
import { Hammer, Trees, Heart } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            {/* Hero Quote */}
            <div className="bg-[#2E2E2E] text-white py-24 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-[#E6B566] rounded-full blur-[120px] opacity-10 -mr-20 -mt-20"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <FadeIn>
                        <span className="text-[#E6B566] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Our Origins</span>
                        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            From a Village Workshop <br /> to the World
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                            "He learned to understand wood not just as material, but as something that demands patience, respect, and care."
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* The Origin Story */}
            <Section className="py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/about-craftsman.png"
                            alt="Artisan woodworker measuring timber"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <p className="text-white/90 italic font-serif">"Every piece was shaped by hand, every joint carefully measured..."</p>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 space-y-8">
                        <FadeIn>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700">
                                    <Hammer size={24} />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-[#2E2E2E]">The Craftsman's Journey</h2>
                            </div>

                            <div className="prose prose-lg text-gray-600 prose-headings:font-serif">
                                <p>
                                    Kuteera did not begin in a factory or a boardroom. It began over 30 years ago in a small village, when our father carried his skills, his tools, and his determination from the village to the city in search of better opportunities.
                                </p>
                                <p>
                                    Starting from the ground up, he built a small carpentry workshop and spent decades doing honest, hands-on carpentry work — crafting doors, furniture, and everyday wooden essentials. Every piece was shaped by hand, every joint carefully measured, and every finish done with pride.
                                </p>
                                <p className="font-medium text-[#8B5E3C]">
                                    These values became the foundation of our family.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* The Shift */}
            <Section background="soft-green">
                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-12">The Question That Changed Everything</h2>
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border-l-8 border-[#E6B566]">
                            <p className="text-xl md:text-2xl font-serif text-gray-700 leading-relaxed italic">
                                "When we looked at the toys our children were surrounded by, a simple but powerful question arose: Why should childhood be filled with toxic plastics and short-lived products, when nature already offers something safer and more meaningful?"
                            </p>
                        </div>
                        <p className="mt-12 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            As the next generation, we grew up watching this quiet discipline and deep connection with natural materials. That question became the beginning of <strong>Kuteera</strong>.
                        </p>
                    </div>
                </FadeIn>
            </Section>

            {/* Philosophy & Values */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <FadeIn>
                            <h2 className="font-serif text-3xl font-bold text-[#2E2E2E] mb-6">Our Philosophy</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                We chose to return to wood — solid, natural, and timeless — and transform it into toys designed for curious minds and growing hands. Each Kuteera toy is crafted using skills refined over three decades.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <Trees className="text-secondary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-[#2E2E2E]">Pure & Non-Toxic</h4>
                                        <p className="text-sm text-gray-500">Carefully finished with non-toxic, child-safe oils and botanical colors. Completely free from harmful chemicals.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Heart className="text-secondary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-[#2E2E2E]">Purposeful Play</h4>
                                        <p className="text-sm text-gray-500">Inspired by Montessori. No screens. No noise. Just toys that encourage imagination, focus, and independent thinking.</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/about-child-playing.png"
                            alt="Child playing with wooden toys"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* Closing Statement */}
            <div className="bg-[#E6B566] py-20 text-center px-4">
                <FadeIn>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-6">A Legacy Carried Forward</h2>
                    <p className="text-xl text-[#2E2E2E]/80 max-w-3xl mx-auto leading-relaxed">
                        Kuteera exists to bring children closer to nature, to give parents peace of mind, and to carry forward a legacy of craftsmanship — from a small village, to a city workshop, and now into homes around the world.
                    </p>
                </FadeIn>
            </div>
        </div>
    );
}
