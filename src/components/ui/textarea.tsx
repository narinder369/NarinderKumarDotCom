import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-body placeholder:text-brand-muted/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
