import Image from "next/image";
import styles from "./styles.module.scss";

export const Header = () => {
  const parsedDate = new Date()
    .toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .split("-feira");

  return (
    <header className={styles.wrapper}>
      <Image src="/assets/logo.svg" width={156} height={36} alt="logo" />
      <h2>Bem vindo de volta, Marcus</h2>
      <span>
        {parsedDate[0].replace(/^\w/, (c) => c.toUpperCase()) + parsedDate[1]}
      </span>
    </header>
  );
};
