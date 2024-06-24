import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}) => {
  const baseStyle =
    "font-bold rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary: "bg-gray-600 text-white rounded",
    outline:
      "bg-transparent hover:bg-blue-100 text-blue-700 border border-blue-500 hover:border-transparent focus:ring-blue-500",
  };

  //დავამთავრე მხოლოდ medium
  const sizes = {
    small: "px-2 py-1 text-sm",
    medium: "px-5 py-[11px] bg-lightBlue",
    large: "px-6 py-3 text-lg",
  };

  const classes = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
