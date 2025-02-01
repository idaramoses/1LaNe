import * as React from "react";
import { Pressable, PressableProps, View, ViewStyle } from "react-native";
import { cn } from "../utils/cn";

interface ButtonProps extends PressableProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}) => {
  const baseStyles = "flex-row items-center justify-center rounded-full";

  const variantStyles = {
    default: "bg-indigo-500",
    outline: "border border-neutral-500",
    ghost: "bg-transparent",
  };

  const sizeStyles = {
    default: "px-6 py-3",
    sm: "px-4 py-2",
    lg: "px-8 py-4",
  };

  return (
    <Pressable
      {...props}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <View>{children}</View>
    </Pressable>
  );
};
