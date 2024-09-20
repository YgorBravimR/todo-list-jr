"use client";
import { CheckIcon } from "../icons";
import styles from "./styles.module.scss";

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
      {label && (
        <span
          className={`${styles.label} ${isChecked ? styles.checkedLabel : ""}`}
        >
          {label}
        </span>
      )}
    </div>
  );
};
