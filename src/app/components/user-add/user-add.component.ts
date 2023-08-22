import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createUserAddForm();
  }

  createUserAddForm() {
    this.userAddForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      password:["",Validators.nullValidator],
      age: ["", Validators.required]
    });
  }

  add() {
    if (this.userAddForm.valid) {
      let userModel = Object.assign({}, this.userAddForm.value);
      this.userService.add(userModel).subscribe(response => {
        this.toastrService.success("Kullanıcı Başarılı Bir Şekilde Eklendi");
      }, 
      responseError => {
        this.toastrService.error("Kullanıcı Eklenirken Bir Hata Oluştu");
      });
    }
    else {
      this.toastrService.warning("Formunuz Eksik Lütfen Formun Tamamını Doldurunuz");
    }
  }
}



