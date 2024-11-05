interface Task {
  taskName: string;
  courseName: string;
  dueDate: Date;
} 

interface Database {
  tasks: Task[];
}
