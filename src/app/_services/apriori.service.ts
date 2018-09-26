import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config.config';
import { Result } from '../_model/result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AprioriService {

  constructor(private http:HttpClient) { }


  aprioriRun(){
    return this.http.get(Config.aprioriUrl.concat("/run"));
  }

  aprioriResult(){
    return this.http.get<Result>(Config.aprioriUrl.concat("/result"));
  }
}
