import styles from "./TaskForm.module.css";

interface Props {
  btnText: string;
}

function TaskForm({ btnText }: Props) {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" placeholder="Titutlo da terefa" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da terefa"
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
}

export default TaskForm;
