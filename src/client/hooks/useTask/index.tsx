import { ITask } from "@/src/shared/entities";
import * as Recoil from "recoil";
import { formatDate } from "../../utils";

const INITIAL_STATE = {
  category: "",
  date: formatDate(new Date())!,
  description: "",
  duration: 0.15,
  id: "",
  isDone: false,
};

const taskState = Recoil.atom<ITask>({
  key: "task",
  default: INITIAL_STATE,
});

export const useTask = () => {
  const [task, setTask] = Recoil.useRecoilState<ITask>(taskState);

  const setTaskProperty = (key: keyof ITask, value: string) => {
    setTask((prev) => ({ ...prev, [key]: value }));
  };

  const toggleTask = () => {
    setTask((prev) => ({ ...prev, isDone: !prev.isDone }));
  };

  const getTask = () => {
    return task;
  };

  const isTaskValid = () => {
    return (
      !!task.category && !!task.date && !!task.description && !!task.duration
    );
  };

  const resetTask = () => {
    setTask(() => INITIAL_STATE);
  };

  return {
    toggleTask,
    getTask,
    setTaskProperty,
    isTaskValid,
    resetTask,
  };
};
