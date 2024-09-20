"use client";
import { TodoList } from "../TodoList";
import styles from "./styles.module.scss";

export const HomePage = () => {
  return (
    <main className={styles.main}>
      <TodoList />
    </main>
  );
};
