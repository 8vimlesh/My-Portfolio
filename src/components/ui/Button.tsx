import React from "react";
import { cn } from "../../utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const compClasses = cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-primary text-primary-foreground shadow hover:bg-primary/90": variant === "default",
        "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground": variant === "outline",
        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
        "text-primary underline-offset-4 hover:underline": variant === "link",
        "h-9 px-4 py-2": size === "default",
        "h-8 rounded-md px-3 text-xs": size === "sm",
        "h-10 rounded-md px-8": size === "lg",
        "h-9 w-9": size === "icon",
      },
      className
    );

    if (asChild && React.isValidElement(props.children)) {
      const child = props.children as React.ReactElement;
      const { children, ...restProps } = props;
      // @ts-ignore - cloning element props
      return React.cloneElement(child, {
        className: cn(compClasses, child.props.className),
        ...restProps,
      });
    }

    return (
      <button
        ref={ref}
        className={compClasses}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
