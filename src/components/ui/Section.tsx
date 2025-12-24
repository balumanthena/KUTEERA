import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    background?: "default" | "white" | "soft-green" | "soft-blue";
}

const Section = ({
    className,
    children,
    container = true,
    background = "default",
    ...props
}: SectionProps) => {
    const backgrounds = {
        default: "bg-background",
        white: "bg-white",
        "soft-green": "bg-[#E6F0E8]", // Very light green
        "soft-blue": "bg-[#E8F2F8]",  // Very light blue
    };

    return (
        <section
            className={cn(
                "py-16 md:py-24",
                backgrounds[background],
                className
            )}
            {...props}
        >
            {container ? (
                <div className="container mx-auto px-4 md:px-6">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};

export { Section };
