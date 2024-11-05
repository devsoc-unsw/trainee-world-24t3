interface Task {
  taskName: string;
  courseName: string;
  dueDate: Date;
} 

interface Database {
  tasks: Task[];
}

export function save(data: Database) {
  localStorage.setItem("data", JSON.stringify(data));
}

export function fetch(): Database {
  const data = localStorage.getItem("data") as string;
  return JSON.parse(data);
}