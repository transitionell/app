import { Student } from './student'
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  private _getUrl = "/api/students";
  private _postUrl = "/api/student";
  private _putUrl = "/api/student/";
  private _deleteUrl = "/api/student/";

  constructor(private _http: Http) { }

  getStudents(){
  	return this._http.get(this._getUrl)
  		.map((response: Response) => response.json());
  }

  addStudent(student: Student) {
  	let headers = new Headers({ 'Content-Type': 'application/json'});
  	let options = new RequestOptions({ headers:headers });
  	return this._http.post(this._postUrl, JSON.stringify(student), options)
  		.map((response: Response) => response.json());
  }

  updateStudent(student: Student) {
  	let headers = new Headers({ 'Content-Type': 'application/json'});
  	let options = new RequestOptions({ headers:headers });
  	return this._http.put(this._putUrl + student._id, JSON.stringify(student), options)
  		.map((response: Response) => response.json());
  }

  deleteStudent(student: Student) {
    return this._http.delete(this._deleteUrl + student._id)
      .map((response: Response) => response.json());
  }
}
