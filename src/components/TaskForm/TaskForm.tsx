import styles from "./TaskForm.module.css";
import { useState, useEffect } from "react";

// interfaces
import type { ITask } from "../../interfaces/Types";
import type { ChangeEvent } from "react";
import type { FormEvent } from "react";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function TaskForm({ btnText, taskList, setTaskList }: Props) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = { id, title, difficulty };

    setTaskList!([...taskList, newTask]);

    setTitle("");
    setDifficulty(0);

    console.log(taskList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "difficulty") {
      setDifficulty(parseInt(e.target.value));
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          name="title"
          placeholder="Titutlo da terefa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da terefa"
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
}

export default TaskForm;
