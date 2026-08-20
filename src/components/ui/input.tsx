import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-brand-border bg-white px-4 text-sm text-brand-body placeholder:text-brand-muted/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
