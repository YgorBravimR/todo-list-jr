import { Checkbox } from "../../ui/Checkbox";
import { TrashIcon } from "../../ui/icons";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  isChecked: boolean;
  handleRemoveTodo: () => void;
  handleToggleTodo: (value: boolean) => void;
}

export const TodoCard = ({
  text,
  isChecked,
  handleRemoveTodo,
  handleToggleTodo,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <Checkbox
        isChecked={isChecked}
        label={text}
        setIsChecked={(value) => handleToggleTodo(value)}
      />
      <button onClick={handleRemoveTodo}>
        <TrashIcon />
      </button>
    </div>
  );
};
