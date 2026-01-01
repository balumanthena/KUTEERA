"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ProductImageGalleryProps {
    mainImage: string;
    images?: string[];
    name: string;
    fit?: "contain" | "cover";
}

export function ProductImageGallery({ mainImage, images, name, fit = "contain" }: ProductImageGalleryProps) {
    const allImages = images && images.length > 0 ? images : [mainImage];
    const [activeImage, setActiveImage] = useState(allImages[0]);

    return (
        <div className="flex flex-col gap-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary/5 border border-gray-100 shadow-sm group cursor-zoom-in">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeImage}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={cn("absolute inset-0", fit === "contain" ? "p-4" : "p-0")}
                    >
                        <Image
                            src={activeImage}
                            alt={name}
                            fill
                            className={cn(
                                "transition-transform duration-500 group-hover:scale-110",
                                fit === "contain" ? "object-contain" : "object-cover"
                            )}
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {allImages.length > 1 && (
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {allImages.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveImage(img)}
                            className={cn(
                                "relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200",
                                activeImage === img
                                    ? "border-primary shadow-md scale-105"
                                    : "border-transparent hover:border-gray-200 opacity-70 hover:opacity-100"
                            )}
                        >
                            <Image
                                src={img}
                                alt={`${name} thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
