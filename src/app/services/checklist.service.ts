import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Checklist } from '../models/checklist';
import { ChecklistItem } from '../models/checklistItem';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  apiUrl = 'https://localhost:44314/api/';

  constructor(private httpClient: HttpClient) { }

  getChecklists() {
    let newPath = this.apiUrl + 'Checklists/getall';
    return this.httpClient.get(newPath);
  }

  getByIdChecklist(id:number){
    let newPath = this.apiUrl + 'Checklists/getbyid?id='+id;
    return this.httpClient.get(newPath);
  }

  addChecklist(checklist:Checklist){

    let newPath=this.apiUrl+'Checklists/add';
    return this.httpClient.post(newPath,checklist);
    
  }

  deleteChecklist(checklist:Checklist){

    let newPath=this.apiUrl+'Checklists/delete';
    return this.httpClient.delete(newPath);
  }

  updateChecklistItem(checklistItem:ChecklistItem){

    let newPath=this.apiUrl+'Checklists/updatecheckbox';
    return this.httpClient.put(newPath,checklistItem);
  }

}
