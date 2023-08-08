import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './components/template/template.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'users/add', component: UserAddComponent },
  { path: 'templates', component: TemplateComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
