import { useMemo, useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Modal } from "../ui/Modal";
import { TodoCard } from "./Card";
import styles from "./styles.module.scss";

interface TodoItem {
  id: string;
  text: string;
  isChecked: boolean;
}

interface Props {
  id?: number;
}

export const TodoList = ({}: Props) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [isNewTodoModalOpen, setIsNewTodoModalOpen] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);

  const checkedTodos = useMemo(
    () => todos.filter((item) => item.isChecked),
    [todos]
  );
  const uncheckedTodos = useMemo(
    () => todos.filter((item) => !item.isChecked),
    [todos]
  );

  const handleRemoveTodo = (id: string) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    setSelectedTodoId(null);
  };

  const handleAddTodo = () => {
    if (!newTodo) return;

    const newTodoItem = {
      id: (Math.random() + 1).toString(36).substring(7),
      text: newTodo,
      isChecked: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo("");
    setIsNewTodoModalOpen(false);
  };

  const handleToggleTodo = (id: string) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      }

      return item;
    });

    setTodos(newTodos);
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.listContainer}>
        <p className={styles.sectionTitle}>
          {uncheckedTodos.length === 0
            ? "Nenhuma tarefa para hoje"
            : "Suas tarefas de hoje"}
        </p>
        <ul className={styles.list}>
          {uncheckedTodos.map(({ id, text, isChecked }, index) => (
            <li key={`todo-${id}-${index}`}>
              <TodoCard
                text={text}
                isChecked={isChecked}
                handleToggleTodo={() => handleToggleTodo(id)}
                handleRemoveTodo={() => setSelectedTodoId(id)}
              />
            </li>
          ))}
        </ul>
        <p className={styles.sectionTitle}>
          {checkedTodos.length === 0
            ? "Nenhuma tarefa finalizada"
            : "Tarefas finalizadas"}
        </p>
        <ul className={styles.list}>
          {checkedTodos.map(({ id, text, isChecked }, index) => (
            <li key={`todo-${id}-${index}`}>
              <TodoCard
                text={text}
                isChecked={isChecked}
                handleToggleTodo={() => handleToggleTodo(id)}
                handleRemoveTodo={() => setSelectedTodoId(id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <Button onClick={() => setIsNewTodoModalOpen(true)}>
        Adicionar nova tarefa
      </Button>
      <Modal
        isOpen={isNewTodoModalOpen}
        onClose={() => setIsNewTodoModalOpen(false)}
        onConfirm={handleAddTodo}
        title="Nova tarefa"
        closeText="Cancelar"
        confirmText="Adicionar"
        confirmButtonVariant="default"
      >
        <div className={styles.modalConf}>
          <p>Título</p>
          <Input
            type="text"
            value={newTodo}
            placeholder="Digite"
            setValue={(value) => setNewTodo(value)}
          />
        </div>
      </Modal>
      <Modal
        isOpen={Boolean(selectedTodoId)}
        onClose={() => setSelectedTodoId(null)}
        onConfirm={() => handleRemoveTodo(selectedTodoId as string)}
        title="Nova tarefa"
        closeText="Cancelar"
        confirmText="Deletar"
        confirmButtonVariant="secondary"
      >
        <div className={styles.modalDlt}>
          <p>Tem certeza que você deseja deletar essa tarefa?</p>
        </div>
      </Modal>
    </main>
  );
};
