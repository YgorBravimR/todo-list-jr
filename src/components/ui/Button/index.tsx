import React from "react";
import styles from "./styles.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "neutral";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = ({
  variant = "default",
  size = "default",
  ...props
}: Props) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      {...props}
    />
  );
};
