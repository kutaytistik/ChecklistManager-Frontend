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


}
