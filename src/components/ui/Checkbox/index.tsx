"use client";
import React from "react";
import styles from "./styles.module.scss";
import { CheckIcon } from "../icons";

interface Props {
  label?: string;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

export const Checkbox = ({ label, isChecked, setIsChecked }: Props) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.checkbox}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <svg>
          <use xlinkHref="#checkbox-30" className={styles.checkboxIcon}></use>
        </svg>
      </span>
      <CheckIcon stroke="#0796D3" />
      <label>{label}</label>
    </div>
  );
};