import { cn } from "@/lib/utils";
import type { Experimental_Generatedimg } from "ai";

export type imgProps = Experimental_Generatedimg & {
  className?: string;
  alt?: string;
};

export const img = ({
  base64,
  uint8Array,
  mediaType,
  ...props
}: imgProps) => (
  <img
    {...props}
    alt={props.alt}
    className={cn(
      "h-auto max-w-full overflow-hidden rounded-md",
      props.className
    )}
    src={`data:${mediaType};base64,${base64}`}
  />
);
