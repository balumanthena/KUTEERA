import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

// Note: Ensure class-variance-authority is installed. 
// If not using cva, I can do simple switch or object map. 
// Since I didn't install cva in the beginning, I'll use simple props or install it.
// Re-checking dependencies: I installed framer-motion, lucide-react, clsx, tailwind-merge. 
// I missed cva. I will install it or implement without it. 
// I'll implement without CVA to save a step, using simple string maps & clsx.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", fullWidth, leftIcon, rightIcon, children, ...props }, ref) => {

        const variants = {
            primary: "bg-primary text-white hover:bg-[#7A5230] shadow-md hover:shadow-lg",
            secondary: "bg-secondary text-white hover:bg-[#3E5C40] shadow-md hover:shadow-lg",
            outline: "border-2 border-primary text-primary hover:bg-primary/5",
            ghost: "text-primary hover:bg-primary/10",
            accent: "bg-accent-mustard text-[#2E2E2E] hover:bg-[#D4A657] shadow-md hover:shadow-lg",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    fullWidth ? "w-full" : "",
                    className
                )}
                {...props}
            >
                {leftIcon && <span className="mr-1">{leftIcon}</span>}
                {children}
                {rightIcon && <span className="ml-1">{rightIcon}</span>}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
