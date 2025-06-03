import { useState, useEffect } from "react";

// interfaces
import type { ITask } from "../../interfaces/Types";
import type { ChangeEvent } from "react";
import type { FormEvent } from "react";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

function TaskForm({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
      setTitle("");
      setDifficulty(0);
      setId(0);
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "difficulty") {
      setDifficulty(parseInt(e.target.value));
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 p-8 bg-gray-100 rounded shadow-md"
    >
      <div className="flex flex-col w-80">
        <label htmlFor="title" className="font-bold">
          Titulo
        </label>
        <input
          type="text"
          name="title"
          placeholder="Titutlo da terefa"
          onChange={handleChange}
          value={title}
          className="mb-2 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="flex flex-col w-80">
        <label htmlFor="difficulty" className="font-bold">
          Dificuldade:
        </label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da terefa"
          onChange={handleChange}
          value={difficulty}
          className="mb-2 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <input
        type="submit"
        className="bg-blue-700 max-w-screen px-4 py-2 rounded border border-blue-700 text-white font-bold hover:bg-blue-800 transition-colors duration-300 cursor-pointer"
        value={btnText}
      />
    </form>
  );
}

export default TaskForm;
