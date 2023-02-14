import { ITask } from "@/src/shared/entities";
import * as Recoil from "recoil";
import { formatDate } from "../../utils";

const taskState = Recoil.atom<ITask>({
  key: "task",
  default: {
    category: "",
    date: formatDate(new Date())!,
    description: "",
    duration: 0.15,
    id: "",
    isDone: false,
  },
});

export const useTask = () => {
  const [task, setTask] = Recoil.useRecoilState<ITask>(taskState);

  const handleSetTask = (key: keyof ITask, value: string) => {
    setTask((prev) => ({ ...prev, [key]: value }));
  };

  const handleToggleTask = () => {
    setTask((prev) => ({ ...prev, isDone: !prev.isDone }));
  };

  return {
    state: {
      task: task,
    },
    methods: {
      handleSetTask: handleSetTask,
      handleToggleTask: handleToggleTask,
    },
  };
};
