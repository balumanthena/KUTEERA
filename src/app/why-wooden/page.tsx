import { Section } from "@/components/ui/Section";
import { Leaf, Shield, Brain, Monitor, Ban, Recycle } from "lucide-react";
import Image from "next/image";

export default function WhyWoodenPage() {
    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            {/* Hero */}
            <div className="relative h-[400px] flex items-center justify-center bg-[#8B5E3C] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 relative z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1617366374026-64c8c7dd73a4?w=800&q=80"
                        alt="Wooden texture"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 text-center px-4">
                    <span className="text-secondary-foreground/80 font-bold tracking-widest uppercase mb-4 block text-[#E6B566]">Nature's Best Teacher</span>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Why Choose Wooden Toys?</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                        In a world of flashing screens and plastic, we believe in the quiet power of natural play.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-serif text-3xl font-bold text-[#2E2E2E] mb-6">Plastic vs. Wooden</h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-sm">
                                <h3 className="font-bold text-red-500 mb-2 flex items-center gap-2"><Ban size={20} /> Plastic Toys</h3>
                                <p className="text-gray-600 text-sm">Often flashy with lights/sounds that do the playing for the child. Can overstimulate and limit imagination. Short lifespan.</p>
                            </div>
                            <div className="bg-[#4F6F52] p-8 rounded-xl border-l-4 border-[#E6B566] shadow-md text-white transform md:scale-105">
                                <h3 className="font-bold text-[#E6B566] mb-2 flex items-center gap-2"><Leaf size={20} /> Wooden Toys</h3>
                                <p className="text-white/90">Passive toys that require active play. The child leads the interaction. Durable, tactile, and aesthetically calming.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80"
                            alt="Wooden toys"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Section>

            <Section background="soft-green">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl font-bold text-[#2E2E2E]">Benefits for Development</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl text-center shadow-sm">
                        <div className="w-16 h-16 bg-blue-50 text-blue-500 mx-auto rounded-full flex items-center justify-center mb-6">
                            <Brain size={32} />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3">Deep Focus</h3>
                        <p className="text-gray-600">Without batteries or flashing lights, children focus longer and play deeper.</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl text-center shadow-sm">
                        <div className="w-16 h-16 bg-green-50 text-green-500 mx-auto rounded-full flex items-center justify-center mb-6">
                            <Shield size={32} />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3">Sensory Rich</h3>
                        <p className="text-gray-600">The weight, texture, and warmth of wood provide a grounding sensory experience.</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl text-center shadow-sm">
                        <div className="w-16 h-16 bg-yellow-50 text-yellow-600 mx-auto rounded-full flex items-center justify-center mb-6">
                            <Recycle size={32} />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3">Eco-Conscious</h3>
                        <p className="text-gray-600">Biodegradable and renewable. Teaching kids to care for the planet from day one.</p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
