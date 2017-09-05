import { Component, OnInit, EventEmitter } from '@angular/core';
import { Student } from './../student'

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  inputs: ['students'],
  outputs: ['SelectStudent']
})
export class StudentListComponent implements OnInit {

  public SelectStudent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(stu: Student){
  	this.SelectStudent.emit(stu);
  }
}
