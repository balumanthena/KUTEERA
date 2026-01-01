"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Brain, Lightbulb } from "lucide-react";
import { Button } from "./Button";
import { motion } from "framer-motion";

interface ProductCardProps {
    id: string;
    name: string;
    price: string; // Display price or placeholder
    image: string;
    age: string;
    skills: ("logic" | "motor" | "creativity" | "math" | "spatial")[];
}

export function ProductCard({ id, name, price, image, age, skills }: ProductCardProps) {
    const getSkillIcon = (skill: string) => {
        switch (skill) {
            case "logic": return <Brain size={14} />;
            case "creativity": return <Lightbulb size={14} />;
            default: return <Star size={14} />;
        }
    };

    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
        >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-secondary/5">
                {/* Placeholder for no backend images yet */}
                <div className="absolute inset-0 flex items-center justify-center text-primary/20 text-4xl font-serif">
                    {image ? (
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        "Toy"
                    )}
                </div>

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary shadow-sm">
                    {age}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                    {skills.map(skill => (
                        <span key={skill} className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded-md">
                            {getSkillIcon(skill)}
                            {skill}
                        </span>
                    ))}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#2E2E2E] mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {name}
                </h3>

                <div className="mt-auto pt-4">
                    <Link href={`/products/${id}`} className="w-full block">
                        <Button variant="outline" size="sm" fullWidth rightIcon={<ArrowRight size={14} />}>
                            View Details
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
