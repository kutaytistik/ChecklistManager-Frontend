import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Template } from 'src/app/models/template';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  templates:Template[]=[];
  
  
  constructor(private templateService:TemplateService,toastrService:ToastrService){}

  ngOnInit(): void {
    this.getTemplates();
  }

  
  getTemplates() {
    this.templateService.getTemplates().subscribe((response) => {
      this.templates = response as Template[];
    });
    
  }
  
  
}
