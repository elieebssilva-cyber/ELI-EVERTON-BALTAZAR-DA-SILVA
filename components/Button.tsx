import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  fullWidth?: boolean;
  pulse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false,
  className = '',
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg tracking-wide uppercase";
  
  const variants = {
    primary: "bg-[#8d6e63] text-white hover:bg-[#795548] border-2 border-[#8d6e63]", // Brownish/Earthy
    secondary: "bg-white text-[#8d6e63] border-2 border-[#8d6e63] hover:bg-[#f5f5f5]",
    accent: "bg-yellow-400 text-brand-brown hover:bg-yellow-300 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1", // High conversion yellow
  };

  const widthClass = fullWidth ? "w-full" : "";
  const pulseClass = pulse ? "animate-pulse" : "";

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${widthClass} ${pulseClass} ${className}`}
      {...props}
    >
      <span className="mr-2">{children}</span>
      <ArrowRight className="w-5 h-5" />
    </button>
  );
};