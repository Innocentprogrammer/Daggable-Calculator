import React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className, ...props }) => (
  <div className={cn("p-4 border-b border-gray-200", className)} {...props}>
    {children}
  </div>
);

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className, ...props }) => (
  <h2 className={cn("text-lg font-semibold", className)} {...props}>
    {children}
  </h2>
);

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent: React.FC<CardContentProps> = ({ children, className, ...props }) => (
  <div className={cn("p-4", className)} {...props}>
    {children}
  </div>
);
