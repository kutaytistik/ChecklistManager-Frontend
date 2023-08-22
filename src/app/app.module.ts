import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { UserComponent } from './components/user/user.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { ToastrModule } from 'ngx-toastr';
import { TemplateAddComponent } from './components/template-add/template-add.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { ChecklistAddComponent } from './components/checklist-add/checklist-add.component';
import { MapComponent } from './components/map/map.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';



@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    UserComponent,
    UserAddComponent,
    TemplateAddComponent,
    NaviComponent,
    FooterComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    ChecklistComponent,    
    ChecklistAddComponent, MapComponent, ContactFormComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right',
    }
      
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
