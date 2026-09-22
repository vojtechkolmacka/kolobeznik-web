import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-display text-lg tracking-wide uppercase transition-transform duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime",
  {
    variants: {
      variant: {
        primary: "bg-lime text-ink hover:bg-paper",
        ink: "bg-ink text-paper hover:bg-moss hover:text-lime",
        outline:
          "bg-transparent text-paper shadow-[0_0_0_1px_rgba(243,239,228,0.35)] hover:bg-paper hover:text-ink",
        ghost: "bg-transparent text-ink hover:bg-ink/8",
        limeOutline:
          "bg-transparent text-ink shadow-[0_0_0_1px_rgba(18,20,15,0.18)] hover:bg-ink hover:text-lime",
      },
      size: {
        md: "h-12 px-5 min-h-11",
        lg: "h-14 px-7 min-h-12",
        sm: "h-10 px-4 text-base min-h-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, size, asChild, ...props }: Props) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
