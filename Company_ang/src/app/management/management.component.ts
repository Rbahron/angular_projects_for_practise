import { Component, OnInit } from '@angular/core';
import { TackService } from '../tack.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
  providers: [TackService]
})
export class ManagementComponent implements OnInit {
    nextTask = 0;
    tasks = ["Soat 9da yigilish","Yaponiyaga ish safari","Xisobot topshirilsin"];
  employees = ['Usmon Said','Salim Zohidov','Asadullo Qodiriy'];
  history: string[] = [];

  constructor(private taskService: TaskService ) { }

  ngOnInit(): void {
  }

  announce() {
    let task = this.tasks[this.nextTask++];
    this.taskService.announceTask(task);
    this.history.push(`"${task}" topshiriq elon qilindi`);
    if (this.nextTask >= this.tasks.length){
      this.nextTask = 0;
    }
  }

}
