import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
  inputs: ['student'],
  outputs: ['updateStudentEvent', 'deleteStudentEvent']
})
export class StudentDetailComponent implements OnInit {

  student: any;
  
  private editName: boolean = false;
  private updateStudentEvent = new EventEmitter();
  private deleteStudentEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  	this.editName = false;
  }

  onNameClick() {
  	this.editName = true;
  }

  updateStudent(){
    this.updateStudentEvent.emit(this.student);
  }

  deleteStudent(){
    this.deleteStudentEvent.emit(this.student);
  }
}
