import React, { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: (value: string) => void;
}

export const Input = ({ type = "text", setValue, value, ...props }: Props) => {
  return (
    <input
      type={type}
      className={styles.base}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
};
