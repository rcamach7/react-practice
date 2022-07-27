export interface Todo {
  title: string;
  description: string;
  date: Date;
  done: boolean;
  priority: "high" | "normal";
}
