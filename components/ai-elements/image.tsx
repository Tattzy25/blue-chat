import { cn } from "@/lib/utils";
import type { Experimental_GeneratedImage } from "ai";

export type imgProps = Experimental_GeneratedImage & {
  className?: string;
  alt?: string;
};

export const img = ({
  base64,
  uint8Array,
  mediaType,
  ...props
}: imgProps) => {
  // Use base64 if available, otherwise convert uint8Array to base64
  const imageSrc = base64
    ? `data:${mediaType};base64,${base64}`
    : uint8Array
      ? `data:${mediaType};base64,${Buffer.from(uint8Array).toString("base64")}`
      : "";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={props.alt}
      className={cn(
        "h-auto max-w-full overflow-hidden rounded-md",
        props.className
      )}
      src={imageSrc}
    />
  );
};
