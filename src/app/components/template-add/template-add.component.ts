import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Template } from 'src/app/models/template';
import { ChecklistItemService } from 'src/app/services/checklistitem.service';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-template-add',
  templateUrl: './template-add.component.html',
  styleUrls: ['./template-add.component.css']
})
export class TemplateAddComponent {
  templateTitle: string = 'My Tasks';
  newChecklistItem: string = '';
  newTemplateName: string = '';
  newChecklistItemContent: string = '';
  checklistItems: Array<{ task: string }> = [];
  editTitle: boolean = false;

  constructor(
    private templateService: TemplateService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private checklistItemService: ChecklistItemService
  ) { }

  addItem() {
    if (this.newChecklistItem) {
      this.checklistItems.push({ task: this.newChecklistItem });
      this.newChecklistItem = '';
    }
  }

  removeItem(index: number) {
    this.checklistItems.splice(index, 1);
  }
  
  



  submitTemplate() {
    if (!this.templateTitle || this.checklistItems.length === 0) {
      this.toastrService.error('Lütfen Bir Başlık Ve ChecklistItem Ögesi Ekleyiniz');
      return;
    }

    const newTemplateAdded: Template = {
      templateId: 0,
      title: this.templateTitle,
      items: this.checklistItems.map(item => ({
        cheklistItemId: 0, 
        content: item.task,
        isCompleted: false,
        cheklistId: null,
        templateId: null,
        template: null,
        checklist: null
      }))
    };

    this.templateService.addTemplate(newTemplateAdded).subscribe(
      (response) => {
        this.toastrService.success('Şablon Başarıyla Eklendi.');
        this.templateTitle = 'My Tasks'; 
        this.checklistItems = [];
      },
      (error) => {
        this.toastrService.error('Şablon Eklenirken Bir Hata Oluştu.');
      }
    );
  }
}







