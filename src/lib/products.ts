export interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
    age: string;
    category: "mind-games" | "puzzles" | "building" | "montessori";
    skills: ("logic" | "motor" | "creativity" | "math" | "spatial")[];
    images?: string[];
    imageFit?: "contain" | "cover";
    description: string;
}

export const products: Product[] = [
    {
        id: "jigsaw-puzzle",
        name: "Wooden Jigsaw Puzzle",
        price: "₹599",
        image: "/kuteera_jigsaw_1.png",
        images: [
            "/kuteera_jigsaw_1.png",
            "/kuteera_jigsaw_2.png",
            "/kuteera_jigsaw_3.png",
            "/kuteera_jigsaw_4.png",
            "/kuteera_jigsaw_5.png"
        ],
        imageFit: "cover",
        age: "3+ Years",
        category: "puzzles",
        skills: ["logic", "creativity"],
        description: "Vibrant wooden jigsaw puzzle to sharpen visual memory and concentration."
    },
    {
        id: "tangram-puzzle",
        name: "Classic Wooden Tangram",
        price: "₹699",
        image: "/kuteera_tangram_1.png",
        images: [
            "/kuteera_tangram_1.png",
            "/kuteera_tangram_2.png",
            "/kuteera_tangram_3.png",
            "/kuteera_tangram_4.png",
            "/kuteera_tangram_5.png"
        ],
        imageFit: "cover",
        age: "3+ Years",
        category: "puzzles",
        skills: ["logic", "creativity", "spatial"],
        description: "An ancient Chinese puzzle game consisting of 7 distinct shapes. Create thousands of figures and improve geometric thinking."
    },
    {
        id: "tictactoe-game",
        name: "Classic Wooden TicTacToe",
        price: "₹899",
        image: "/kuteera_tictactoe_1.png",
        images: [
            "/kuteera_tictactoe_1.png",
            "/kuteera_tictactoe_2.png",
            "/kuteera_tictactoe_3.png",
            "/kuteera_tictactoe_4.png"
        ],
        imageFit: "cover",
        age: "4-99 Years",
        category: "mind-games",
        skills: ["logic", "creativity"],
        description: "A handcrafted wooden version of the classic game. Perfect for coffee tables and family game nights."
    },
    {
        id: "ring-stacker",
        name: "Rainbow Ring Stacker",
        price: "₹1,499",
        image: "/ring_stacker.png",
        images: [
            "/ring_stacker.png",
            "/ring_stacker_1.png",
            "/ring_stacker_2.png",
            "/ring_stacker_3.png",
            "/ring_stacker_4.png"
        ],
        imageFit: "contain",
        age: "1-3 Years",
        category: "montessori",
        skills: ["motor", "logic", "spatial"],
        description: "A timeless wooden toy featuring graduated colorful rings and a solid wood base. Perfect for developing hand-eye coordination and fine motor skills."
    }
];
