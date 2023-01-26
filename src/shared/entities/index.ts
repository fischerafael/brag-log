export interface ITask {
  id: string;
  date: Date;
  duration: number;
  isDone: false;
  description: string;
  category: string[];
  value: string[];
  other?: any;
}
