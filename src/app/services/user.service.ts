import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://localhost:44314/api/';

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    let newPath = this.apiUrl + 'Users/getall';
    return this.httpClient.get(newPath);
  }
  
  add(user:User){
    let newPath=this.apiUrl+"Users/add";
    return this.httpClient.post(newPath,user);
  }

  getByIdUser(id:number){
    let newPath=this.apiUrl+'Users/getbyid?id='+id;
    return this.httpClient.get(newPath);
  }
}
