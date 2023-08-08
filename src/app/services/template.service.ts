import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Template } from '../models/template';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  apiUrl='https://localhost:44314/api/';
  constructor(private httpClient:HttpClient) { }

  getTemplates(){
    let newPath = this.apiUrl + 'Templates/getall';
    return this.httpClient.get(newPath);

  }

}
