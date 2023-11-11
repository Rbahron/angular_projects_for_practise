import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee?: string;
  announced:boolean = false;
  confirmed:boolean = false;
  task: string = "<topshiriq yo`q>";

  constructor(private taskService: TaskService ) {
    
    }

  ngOnInit() {
  }

  confirm() {
    this.confirmed =true;

  }

}
