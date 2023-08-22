import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChecklistItem } from '../models/checklistItem';

@Injectable({
  providedIn: 'root'
})
export class ChecklistItemService {

  apiUrl = 'https://localhost:44314/api/';

  constructor(private httpClient: HttpClient) { }

  addChecklistItem(checklistItem: ChecklistItem) {
    let newPath = this.apiUrl + 'ChecklistItems/add';
    return this.httpClient.post(newPath, checklistItem);
  }

  addChecklistItems(checklistItems: ChecklistItem[]) {
    let newPath = this.apiUrl + 'ChecklistItems/addall';
    return this.httpClient.post(newPath, checklistItems);
  }
}
