"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  type CSSProperties,
  type ElementType,
  memo,
  useMemo,
} from "react";

export type TextShimmerProps = {
  children: string;
  as?: ElementType;
  className?: string;
  duration?: number;
  spread?: number;
};

// Shared animation props factory
const getShimmerProps = (
  dynamicSpread: number,
  className: string | undefined,
  duration: number
) => ({
  animate: { backgroundPosition: "0% center" },
  className: cn(
    "relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent",
    "[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--color-background),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]",
    className
  ),
  initial: { backgroundPosition: "100% center" },
  style: {
    "--spread": `${dynamicSpread}px`,
    backgroundImage:
      "var(--bg), linear-gradient(var(--color-muted-foreground), var(--color-muted-foreground))",
  } as CSSProperties,
  transition: {
    repeat: Number.POSITIVE_INFINITY,
    duration,
    ease: "linear" as const,
  },
});

const ShimmerComponent = ({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) => {
  const dynamicSpread = useMemo(
    () => (children?.length ?? 0) * spread,
    [children, spread]
  );

  const props = getShimmerProps(dynamicSpread, className, duration);

  // Render the appropriate motion component based on `as` prop
  switch (Component) {
    case "span":
      return <motion.span {...props}>{children}</motion.span>;
    case "div":
      return <motion.div {...props}>{children}</motion.div>;
    case "h1":
      return <motion.h1 {...props}>{children}</motion.h1>;
    case "h2":
      return <motion.h2 {...props}>{children}</motion.h2>;
    case "h3":
      return <motion.h3 {...props}>{children}</motion.h3>;
    case "p":
    default:
      return <motion.p {...props}>{children}</motion.p>;
  }
};

export const Shimmer = memo(ShimmerComponent);
