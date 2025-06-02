//interfaces
import type { ITask } from "../../interfaces/Types";

interface Props {
  taskList: ITask[];
  handleDeleteTask?: (id: number) => void;
}

const TaskList = ({ taskList, handleDeleteTask }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div
            key={task.id}
            className="flex flex-col items-center justify-center gap-4 p-4 mb-4 bg-gray-100 rounded shadow-md"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold">{task.title}</h3>
              <p className="text-sm">Dificuldade: {task.difficulty}</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Editar
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleDeleteTask && handleDeleteTask(task.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Não tem tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
