import styles from "./App.module.css";
import { useState } from "react";

// components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

// interfaces
import type { ITask } from "./interfaces/Types";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>o que você vai fazer?</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
