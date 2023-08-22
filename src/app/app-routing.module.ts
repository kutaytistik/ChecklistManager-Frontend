import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TemplateComponent } from './components/template/template.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserComponent } from './components/user/user.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TemplateAddComponent } from './components/template-add/template-add.component';
import { ChecklistAddComponent } from './components/checklist-add/checklist-add.component';
import { ChecklistComponent } from './components/checklist/checklist.component';


const routes: Routes = [
  
  { path: '', component:HomePageComponent},
  { path: 'users', component: UserComponent },
  { path: 'users/add', component: UserAddComponent },
  { path: 'templates', component: TemplateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'template/add', component: TemplateAddComponent },
  { path: 'template/id', component:TemplateComponent},
  { path: 'checklist/add', component: ChecklistAddComponent },
  { path: 'checklists', component: ChecklistComponent },


  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
