import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((res) => {
      this.tasks = res;
    });
  }
  deleteTask(task: Task) {
    this.taskService
      .deleteTasks(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((item) => item.id !== task.id))
      );
  }
  updateReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateReminder(task).subscribe();
  }
  addNewTask(task: Task) {
    this.taskService.addNewTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }
}
