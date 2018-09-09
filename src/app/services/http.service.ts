import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config.config';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }
  register(value){
    return this._http.post(Config.registerUrl,value);
  }

  login(value){
    return this._http.post(Config.loginUrl,value);
  }
}
