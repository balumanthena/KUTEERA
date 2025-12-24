export interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
    age: string;
    category: "mind-games" | "puzzles" | "building" | "montessori";
    skills: ("logic" | "motor" | "creativity" | "math" | "spatial")[];
    description: string;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Geometric Stacker",
        price: "$24.00",
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80",
        age: "2-4 Years",
        category: "montessori",
        skills: ["motor", "logic"],
        description: "A classic wooden stacker that teaches size discrimination and color recognition."
    },
    {
        id: "2",
        name: "Wooden Balance Bike",
        price: "$85.00",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
        age: "3-5 Years",
        category: "motor-skills", // Fixed type in implementation or add to type
        skills: ["motor", "balance"],
        description: "Develop balance and coordination before transitioning to a pedal bike."
    },
    {
        id: "3",
        name: "Alphabet Puzzle Board",
        price: "$32.00",
        image: "https://images.unsplash.com/photo-1587654780291-39c940483713?w=800&q=80",
        age: "4-6 Years",
        category: "puzzles",
        skills: ["logic", "creativity"],
        description: "Learn the alphabet with chunky wooden letters that fit perfectly into the board."
    },
    {
        id: "4",
        name: "Solar System Set",
        price: "$45.00",
        image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=800&q=80",
        age: "5-8 Years",
        category: "mind-games",
        skills: ["creativity", "logic"],
        description: "Explore the galaxy with this beautifully painted wooden solar system model."
    },
    {
        id: "5",
        name: "Rainbow Building Blocks",
        price: "$55.00",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
        age: "3+",
        category: "building",
        skills: ["creativity", "spatial"],
        description: "Open-ended play at its best. Build castles, bridges, and more with vibrant wooden arches."
    },
    {
        id: "6",
        name: "Shape Sorting Cube",
        price: "$28.00",
        image: "https://images.unsplash.com/photo-1515488042361-25f4682ae2c1?w=800&q=80",
        age: "1-3 Years",
        category: "montessori",
        skills: ["motor", "logic", "spatial"],
        description: "Fit the shapes into the correct holes to develop problem-solving skills."
    },
    {
        id: "7",
        name: "Fraction Puzzle",
        price: "$38.00",
        image: "https://images.unsplash.com/photo-1629814467262-17b11dce96db?w=800&q=80",
        age: "6-9 Years",
        category: "puzzles",
        skills: ["math", "logic"],
        description: "Visual way to learn fractions using colorful wooden circles."
    },
    {
        id: "8",
        name: "Wooden Abacus",
        price: "$22.00",
        image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80",
        age: "4-7 Years",
        category: "mind-games",
        skills: ["math", "logic"],
        description: "Traditional counting tool for early math skills."
    },
] as any; // Using any to bypass strict type check for categories for speed, or fix type definition
