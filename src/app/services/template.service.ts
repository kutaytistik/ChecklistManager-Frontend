import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChecklistItem } from '../models/checklistItem';

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

  getByIdTemplate(id:number){
    let newPath=this.apiUrl+'Templates/getbyid?id='+id;
    return this.httpClient.get(newPath);
  }

  updateChecklistItem(checklistItem:ChecklistItem){

    let newPath=this.apiUrl+'Templates/updatecheckbox';
    return this.httpClient.put(newPath,checklistItem);
  }

  addTemplate(template:Template){
    let newPath=this.apiUrl+"Templates/add";
    return this.httpClient.post(newPath,template);
  }
}
