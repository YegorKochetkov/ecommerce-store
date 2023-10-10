import React from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          `inline-flex items-center justify-center rounded py-2 px-3 gap-2
          text-white bg-black border-transparent font-semibold
           disabled:opacity-50 disabled:cursor-not-allowed
           active:scale-95 hover:opacity-75 transition`,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
