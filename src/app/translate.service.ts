import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TranslateService {

  private _getUrl = "/api/detect-text";

  constructor(private _http: Http) { }

  getTranslation(){
  	return this._http.get(this._getUrl)
  		.map((response: Response) => response.json());
  }

  postData(data){
  	return this._http.post(this._getUrl, data)
  		.map((response:Response) => response.json())
  }
}