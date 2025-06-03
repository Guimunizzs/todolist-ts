import { useState } from "react";

// components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Modal from "./components/Modal/Modal";
// interfaces
import type { ITask } from "./interfaces/Types";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskUpdate, setTaskUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const hiderOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hidden");
    } else {
      modal!.classList.add("hidden");
    }
  };

  const editTask = (task: ITask): void => {
    hiderOrShowModal(true);
    setTaskUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);

    hiderOrShowModal(false);
  };

  return (
    <>
      <Modal
        children={
          <TaskForm
            btnText="Editar Tarefa"
            taskList={taskList}
            task={taskUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className="flex flex-col items-center justify-center  ">
        <div className="flex flex-col items-center justify-center gap-4 p-8 bg-white rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4">Gerenciador de Tarefas</h1>
          <h2>o que você vai fazer?</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-8 bg-white rounded shadow-md mt-8">
          <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDeleteTask={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
