"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/ProductCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Heart, Shield, Smile, Leaf, Clock, Brain } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredProducts = [
    {
      id: "1",
      name: "Geometric Stacker",
      price: "$24.00",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80",
      age: "2-4 Years",
      skills: ["motor", "logic"] as any,
    },
    {
      id: "2",
      name: "Wooden Balance Bike",
      price: "$85.00",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
      age: "3-5 Years",
      skills: ["motor", "balance"] as any,
    },
    {
      id: "3",
      name: "Alphabet Puzzle Board",
      price: "$32.00",
      image: "https://images.unsplash.com/photo-1587654780291-39c940483713?w=800&q=80",
      age: "4-6 Years",
      skills: ["logic", "creativity"] as any,
    },
    {
      id: "4",
      name: "Solar System Set",
      price: "$45.00",
      image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=800&q=80",
      age: "5-8 Years",
      skills: ["creativity", "logic"] as any,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-[#FAF8F5] overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent-mustard/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold text-sm tracking-widest rounded-full uppercase">
              Premium Educational Toys
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#2E2E2E] leading-[1.1]">
              Where Play Builds <br />
              <span className="text-secondary italic">Brilliant Minds</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Handcrafted wooden toys designed to boost focus, logic, and creativity.
              The Montessori-approved choice for modern parents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/products">
                <Button size="lg" className="px-8 shadow-xl shadow-primary/20">
                  Explore Collection
                </Button>
              </Link>
              <Link href="/why-wooden">
                <Button variant="outline" size="lg">
                  Why Wooden Toys?
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl skew-y-1 rotate-1 border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1599623560574-39d485900c95?w=800&q=80"
              alt="Happy kid playing with wooden toys"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <Section background="white">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#2E2E2E]">Designed for Growing Minds</h2>
            <p className="text-gray-600">Our toys are more than just fun. They are tools for development, crafted with nature in mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-secondary" />,
                title: "Cognitive Growth",
                desc: "Enhances logic, problem-solving, and spatial awareness."
              },
              {
                icon: <Smile className="w-8 h-8 text-accent-mustard" />,
                title: "Emotional Focus",
                desc: "Calm, screen-free play that builds patience and attention span."
              },
              {
                icon: <Leaf className="w-8 h-8 text-primary" />,
                title: "Safe & Natural",
                desc: "100% non-toxic, eco-friendly wood and child-safe paints."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#FAF8F5] rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-[#2E2E2E]">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Featured Products */}
      <Section background="soft-blue">
        <FadeIn>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">Featured Collection</h2>
              <p className="text-gray-600">Bestsellers loved by parents and teachers.</p>
            </div>
            <Link href="/products" className="hidden md:block">
              <Button variant="ghost" rightIcon={<ArrowRight size={16} />}>View All Toys</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/products">
              <Button variant="outline" fullWidth>View All Toys</Button>
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* Trust Section */}
      <Section className="text-center">
        <div className="bg-primary rounded-3xl p-12 md:p-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="flex justify-center gap-2 mb-6 text-[#E6B566]">
              {[1, 2, 3, 4, 5].map(i => <Heart key={i} fill="currentColor" size={24} />)}
            </div>

            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              "These toys changed how my child plays. More focus, less screen time."
            </h2>

            <div>
              <p className="font-bold text-lg">Sarah Jenkins</p>
              <p className="opacity-80">Montessori Teacher & Mom</p>
            </div>

            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80 border-t border-white/20 mt-8">
              <div className="text-center">
                <h4 className="font-bold text-3xl">50k+</h4>
                <p className="text-sm">Happy Kids</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-3xl">100%</h4>
                <p className="text-sm">Eco Friendly</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-3xl">500+</h4>
                <p className="text-sm">Schools Partnered</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-3xl">4.9</h4>
                <p className="text-sm">Trust Score</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Strip */}
      <div className="bg-[#4F6F52] text-white py-4 md:py-6 overflow-hidden">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm md:text-base font-medium tracking-wide">
          <span className="flex items-center gap-2"><Shield size={18} /> Safety Certified</span>
          <span className="flex items-center gap-2"><Leaf size={18} /> Sustainable Wood</span>
          <span className="flex items-center gap-2"><Clock size={18} /> Handcrafted Durability</span>
        </div>
      </div>
    </div>
  );
}
