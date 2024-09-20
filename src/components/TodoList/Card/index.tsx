import { Checkbox } from "../../ui/Checkbox";
import { TrashIcon } from "../../ui/icons";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  isChecked: boolean;
  handleRemoveTodo: () => void;
  handleToggleTodo: (value: boolean) => void;
  isPlaceholder?: boolean;
}

export const TodoCard = ({
  text,
  isChecked,
  handleRemoveTodo,
  handleToggleTodo,
  isPlaceholder,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      {!isPlaceholder && (
        <Checkbox
          isChecked={isChecked}
          label={text}
          setIsChecked={(value) => handleToggleTodo(value)}
        />
      )}
      {isPlaceholder && <div className={styles.placeholder}>{text}</div>}
      {!isPlaceholder && (
        <button onClick={handleRemoveTodo}>
          <TrashIcon />
        </button>
      )}
    </div>
  );
};
