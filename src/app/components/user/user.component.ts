import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  selectedUser:User|undefined;
  searchId:number|undefined;


  constructor(private userService: UserService, private toastrService: ToastrService) { }

  ngOnInit(): void {

    this.getUsers();

  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response as User[];
    });
  }


  add(user: User) {
    this.toastrService.success("Kullanıcı Başarıyla Eklendi", user.firstName + ' ' + user.lastName);
    this.userService.add(user);
  }

  getUserById(id:number) {
    this.userService.getByIdUser(id).subscribe((response)=>{
      const foundUser=response as User;
      if(foundUser){
        this.selectedUser=foundUser;
      }
      else{
        this.selectedUser=null;
        this.toastrService.error("Belirtilen Id Değerine Uygun Kullanıcı Bulunamadı");
      }
    });
  }

  searchUser(){
    if(this.searchId){
      this.getUserById(this.searchId);
      this.users=[];
    }
  }


}
