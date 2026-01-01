import { products } from "@/lib/products";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, Star, Shield, MessageCircle, ShoppingBag, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { ProductImageGallery } from "@/components/ui/ProductImageGallery";

interface PageProps {
    params: { id: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}

// In Next.js 15 this needs to be async, but for 14 it can be sync or async. 
// However, params is a promise in recent canary, but stable 14 is object.
// I'll stick to basic sync or simple async component.
// Wait, for generateMetadata it's recommended.

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const p = await params; // Await params just in case (Next 15 compat)
    const product = products.find((p_item) => p_item.id === p.id);

    if (!product) {
        return { title: "Product Not Found" };
    }

    return {
        title: `${product.name} | WoodenMind Toys`,
        description: product.description,
    };
}

export default async function ProductDetailsPage({ params }: PageProps) {
    const p_params = await params;
    const product = products.find((p) => p.id === p_params.id);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#FAF8F5] pb-20">
            <Section className="py-8 md:py-12">
                <Link href="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors">
                    <ArrowLeft size={16} /> Back to Toys
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Image Gallery */}
                    <ProductImageGallery
                        mainImage={product.image}
                        images={product.images}
                        name={product.name}
                        fit={product.imageFit}
                    />

                    {/* Details */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-4 flex items-center gap-4">
                            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary font-bold text-xs rounded-full uppercase tracking-wider">
                                {product.category}
                            </span>
                            <span className="text-gray-500 text-sm">Age: {product.age}</span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4">
                            {product.name}
                        </h1>

                        <p className="text-2xl font-medium text-gray-900 mb-6">{product.price}</p>

                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            {product.description}
                            <br /><br />
                            Crafted from sustainably sourced beechwood and finished with non-toxic, water-based paints. Perfectly sized for little hands to grasp, stack, and explore.
                        </p>

                        <div className="space-y-4 mb-10">
                            <h3 className="font-bold text-[#2E2E2E]">What kids learn:</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {product.skills.map(skill => (
                                    <li key={skill} className="flex items-center gap-2 text-gray-600 capitalize">
                                        <div className="w-6 h-6 rounded-full bg-accent-mustard/20 flex items-center justify-center text-accent-mustard">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        {skill}
                                    </li>
                                ))}
                                <li className="flex items-center gap-2 text-gray-600">
                                    <div className="w-6 h-6 rounded-full bg-accent-mustard/20 flex items-center justify-center text-accent-mustard">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    Focus & Patience
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="flex-1 gap-2">
                                <ShoppingBag size={20} /> Add to Cart
                            </Button>
                            <Button variant="outline" size="lg" className="flex-1 gap-2 border-green-600 text-green-700 hover:bg-green-50">
                                <MessageCircle size={20} /> Enquire on WhatsApp
                            </Button>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                            <span className="flex items-center gap-1"><Shield size={14} /> 1 Year Warranty</span>
                            <span className="flex items-center gap-1"><Star size={14} /> 5-Star Reviews</span>
                            <span className="flex items-center gap-1"><Check size={14} /> In Stock</span>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
