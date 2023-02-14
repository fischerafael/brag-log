export interface ITask {
  id: string;
  date: string;
  duration: number;
  isDone: boolean;
  description: string;
  category: string;
  other?: any;
}
