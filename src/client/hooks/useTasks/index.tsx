import { ITask } from "@/src/shared/entities";
import * as Recoil from "recoil";
import { generateUUID } from "../../utils";

const tasksState = Recoil.atom<ITask[]>({
  key: "tasks",
  default: [],
});

export const useTask = () => {
  const [tasks, setTasks] = Recoil.useRecoilState<ITask[]>(tasksState);

  const handleAddTask = (task: ITask) => {
    const taskWithId: ITask = { ...task, id: generateUUID() };
    setTasks((state) => [...state, taskWithId]);
  };

  const handleRemoveTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(() => updatedTasks);
  };

  const handleGetTasks = (): ITask[] => {
    return tasks;
  };

  return {
    handleAddTask,
    handleRemoveTask,
    handleGetTasks,
  };
};
