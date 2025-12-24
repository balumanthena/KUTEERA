"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ProductsPage() {
    const [filterAge, setFilterAge] = useState<string | null>(null);
    const [filterCategory, setFilterCategory] = useState<string | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const filteredProducts = products.filter(p => {
        if (filterAge && !p.age.includes(filterAge.replace('+', ''))) return false; // Simple fuzzy match for now
        if (filterCategory && p.category !== filterCategory) return false;
        return true;
    });

    const ages = ["1-3", "3-5", "5-8", "8+"];
    const categories = ["montessori", "puzzles", "building", "mind-games"];

    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            <div className="bg-primary/5 py-12 text-center">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4">Our Collection</h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Thoughtfully curated wooden toys that grow with your child.
                </p>
            </div>

            <Section>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Filters Sidebar */}
                    <div className={cn(
                        "w-full md:w-64 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-shrink-0 transition-all duration-300 transform",
                        isFilterOpen ? "fixed inset-0 z-50 overflow-y-auto m-0 rounded-none md:static md:block md:rounded-xl md:z-auto" : "hidden md:block" // Mobile full screen logic simplified
                    )}>
                        <div className="flex justify-between items-center mb-6 md:hidden">
                            <h3 className="font-bold text-xl">Filters</h3>
                            <button onClick={() => setIsFilterOpen(false)}><X /></button>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="font-serif font-bold mb-4 text-[#2E2E2E]">Age Group</h4>
                                <div className="flex flex-col gap-2">
                                    {ages.map(age => (
                                        <label key={age} className="flex items-center gap-2 cursor-pointer hover:text-primary">
                                            <input
                                                type="checkbox"
                                                checked={filterAge === age}
                                                onChange={() => setFilterAge(filterAge === age ? null : age)}
                                                className="rounded border-gray-300 text-primary focus:ring-primary"
                                            />
                                            <span>{age} Years</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="font-serif font-bold mb-4 text-[#2E2E2E]">Category</h4>
                                <div className="flex flex-col gap-2">
                                    {categories.map(cat => (
                                        <label key={cat} className="flex items-center gap-2 cursor-pointer hover:text-primary capitalize">
                                            <input
                                                type="checkbox"
                                                checked={filterCategory === cat}
                                                onChange={() => setFilterCategory(filterCategory === cat ? null : cat)}
                                                className="rounded border-gray-300 text-primary focus:ring-primary"
                                            />
                                            <span>{cat.replace('-', ' ')}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t md:hidden">
                            <Button fullWidth onClick={() => setIsFilterOpen(false)}>Apply Filters</Button>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-500">{filteredProducts.length} results</p>
                            <Button
                                variant="outline"
                                size="sm"
                                className="md:hidden"
                                leftIcon={<Filter size={16} />}
                                onClick={() => setIsFilterOpen(true)}
                            >
                                Filter
                            </Button>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} {...product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-xl">
                                <p className="text-xl text-gray-500">No toys found matching your filters.</p>
                                <Button variant="ghost" className="mt-4" onClick={() => { setFilterAge(null); setFilterCategory(null); }}>Clear Filters</Button>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
}
