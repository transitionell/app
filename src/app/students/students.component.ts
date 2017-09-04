import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from './../student'
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  providers: [StudentService]
})

export class StudentsComponent implements OnInit {

  students: Array<Student>;

  selectedStudent: Student;
  private hidenewStudent: boolean = true;

  constructor(private _studentService: StudentService) { }

  ngOnInit() {
    this._studentService.getStudents()
      .subscribe(resStudentData => this.students = resStudentData);
  }

  onSelectStudent(student:any){
    this.selectedStudent = student;
    this.hidenewStudent = true;
    console.log(this.selectedStudent);
  }

  onSubmitAddStudent(student: Student){
    this._studentService.addStudent(student)
      .subscribe(resNewStudent => {
        this.students.push(resNewStudent);
        this.hidenewStudent = true;
        this.selectedStudent = resNewStudent;
      });
  }

  onUpdateStudentEvent(student: any){
    this._studentService.updateStudent(student)
      .subscribe(resUpdatedStudent => student = resUpdatedStudent);
    this.selectedStudent = null;
  };

  onDeleteStudentEvent(student: any){
    let studentArray = this.students;
    this._studentService.deleteStudent(student)
      .subscribe(resDeletedStudent => {
        for(let i=0; i < studentArray.length; i++)
        {
          if(studentArray[i]._id === student._id)
          {
            studentArray.splice(i,1);
          }
        }
      });
    this.selectedStudent = null;
  };

  newStudent(){
    this.hidenewStudent = false;
  }

}
