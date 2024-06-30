import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  isRound?: boolean;
  setCount?: React.Dispatch<React.SetStateAction<number>>;
  count?: number;
}

const Button: React.FC<ButtonProps> = ({
  setCount,
  count,
  children,
  variant = "primary",
  size = "medium",
  className = "",
  isRound = false,
  onClick,
  ...props
}) => {
  const baseStyle =
    "font-bold transition duration-300 ease-in-out focus:outline-none focus:ring-0";

  const variants = {
    primary: isRound
      ? "bg-white rounded-full flex items-center justify-center"
      : "bg-white rounded-full",
    secondary: "bg-gray-600 text-white text-sm font-medium rounded",
    outline: "border bg-darkBlue text-white",
  };

  const sizes = {
    small: "",
    medium: isRound ? "w-12 h-12" : "px-5 py-[11px] bg-lightBlue",
    large: isRound ? "w-16 h-16" : "px-9 py-[11px]",
  };

  const classes = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (setCount && count !== undefined) {
      setCount(count + 1);
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button onClick={handleClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
