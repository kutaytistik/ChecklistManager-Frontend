import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChecklistItem } from 'src/app/models/checklistItem';
import { Checklist } from 'src/app/models/checklist';
import { ChecklistService } from 'src/app/services/checklist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checklist-add',
  templateUrl: './checklist-add.component.html',
  styleUrls: ['./checklist-add.component.css']
})
export class ChecklistAddComponent implements OnInit {

  checklistTitle: string = 'My Tasks';
  checklistItems: { task: ChecklistItem }[] = [];
  newChecklistItem: string = '';
  editTitle: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private checklistService: ChecklistService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  addItem() {
    if (this.newChecklistItem) {
      const newItem: ChecklistItem = {
        cheklistItemId: 0,
        content: this.newChecklistItem,
        isCompleted: false,
        cheklistId: null,
        templateId: null,
        template: null,
        checklist: null
      };
      this.checklistItems.push({ task: newItem });
      this.newChecklistItem = '';
    }
  }

  removeItem(index: number) {
    this.checklistItems.splice(index, 1);
  }

  submitChecklist() {
	if (this.checklistTitle && this.checklistItems.length > 0) {
	  const newChecklist: Checklist = {
		checklistId:0,
		title: this.checklistTitle,
		createdAt: new Date(),
		updatedAt: null,
		items: this.checklistItems.map(item => item.task)
	  };
  
	  this.checklistService.addChecklist(newChecklist).subscribe(
		(response) => {
		  this.toastrService.success('Checklist Başarıyla Eklendi.');
		 
		},
		(error) => {
		  this.toastrService.error('Checklist Eklenirken Bir Hata Oluştu.');
		}
	  );
	} else {
	  this.toastrService.warning('Lütfen Bir Başlık Ve En Az Bir Checklist Öğesi Giriniz.');
	}
  }
  
  
  
  }
  

