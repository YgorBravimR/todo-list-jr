import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.scss";
import { Button } from "../Button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmText?: string;
  closeText?: string;
  children: ReactNode;
  title: string;
  confirmButtonVariant?: "default" | "secondary" | "neutral";
}

export const Modal = ({
  isOpen,
  children,
  onClose,
  onConfirm,
  confirmText = "Confirmar",
  closeText = "Voltar",
  title,
  confirmButtonVariant = "default",
}: Props) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.content}>
        <h2>{title}</h2>
        {children}
        <div className={styles.footer}>
          <Button variant="neutral" onClick={onClose}>
            {closeText}
          </Button>
          <Button variant={confirmButtonVariant} onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
