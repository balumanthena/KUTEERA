import { Section } from "@/components/ui/Section";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="font-serif text-5xl font-bold text-[#2E2E2E] mb-6">Our Story</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Crafting premium tools for little explorers.
                </p>
            </div>

            <Section className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1542699863-7e4d890637df?w=800&q=80"
                            alt="Craftsman working on wood"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="font-serif text-3xl font-bold text-[#2E2E2E]">Handcrafted with Intent</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            WoodenMind began with a simple question: <i>Why are most toys designed to be thrown away?</i>
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We traveled to artisan workshops across Europe and Asia to find the perfect blend of sustainable forestry and expert craftsmanship. Each toy is shaped from solid beechwood or maple, sanded to silken smoothness, and finished with beeswax or water-based botanical dyes.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Our mission is to bring the Montessori philosophy into modern homes—beautifully, sustainably, and joyfully.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
