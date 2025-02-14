import * as React from "react";
import { cn } from "/Projects/All Practice/React Practice/DragCalulator/src/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
        variant === "default" && "bg-blue-500 text-white hover:bg-blue-600",
        variant === "secondary" && "bg-gray-300 text-gray-700 hover:bg-gray-400",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

