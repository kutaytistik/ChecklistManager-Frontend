import { Component, HostListener, OnInit } from '@angular/core';
import { Template } from 'src/app/models/template';
import { TemplateService } from 'src/app/services/template.service';
import { ToastrService } from 'ngx-toastr';
import { ChecklistItem } from 'src/app/models/checklistItem';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  templates: Template[] = [];
  selectedTemplate: Template | null = null;
  searchId: number | null = null;
  selectedTemplateItemsState: boolean[] = [];

  constructor(
    private templateService: TemplateService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getTemplates();
  }

  getTemplates() {
    this.templateService.getTemplates().subscribe(
      (response) => {
        this.templates = response as Template[];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getTemplateById(id: number) {
    this.templateService.getByIdTemplate(id).subscribe(
      (response) => {
        const foundTemplate = response as Template;
        if (foundTemplate) {
          this.selectedTemplate = foundTemplate;
          this.selectedTemplateItemsState = foundTemplate.items.map(item => item.isCompleted);
        } else {
          this.selectedTemplate = null;
          this.toastrService.error('Belirtilen Id Değerine Uygun Şablon Bulunamadı');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  searchTemplate() {
    if (this.searchId !== null) {
      this.getTemplateById(this.searchId);
    }
  }

  checklistItemCheckboxUpdated(checklistItem: ChecklistItem) {
    checklistItem.isCompleted = !checklistItem.isCompleted;
    this.templateService.updateChecklistItem(checklistItem).subscribe(
      (response) => {
        this.toastrService.success('Değişiklikler Veritabanında Başarılı Bir Şekilde Güncellendi');
      },
      (error) => {
        this.toastrService.error('Değişiklikler Veritabanında Güncellenirken Bir Hata Oluştu');
        checklistItem.isCompleted = !checklistItem.isCompleted;
      }
    );
  }

}
