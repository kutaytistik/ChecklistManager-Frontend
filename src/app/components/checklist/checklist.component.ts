import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Checklist } from 'src/app/models/checklist';
import { ChecklistItem } from 'src/app/models/checklistItem';
import { ChecklistService } from 'src/app/services/checklist.service';


@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  checklists: Checklist[] = [];
  newChecklistTitle: string = '';
  editTitle: boolean = false;
  selectedChecklist:Checklist|undefined;
  searchId:number|undefined;
  checklist:any;

  constructor(private checklistService: ChecklistService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getChecklists();
  }

  getChecklists() {
    this.checklistService.getChecklists().subscribe(
      (response) => {
        this.checklists = response as Checklist[];
      },
      (error) => {
        this.toastrService.error('Kontrol listeleri alınırken bir hata oluştu.');
      }
    );
  }

  addChecklist() {
    if (this.newChecklistTitle.trim() !== '') {
      const newChecklist: Checklist = {
        checklistId: 0,
        title: this.newChecklistTitle,
        createdAt: new Date(),
        updatedAt: null,
        items: []
      };
  
      this.checklistService.addChecklist(newChecklist).subscribe(
        (response) => {
          this.checklists.push(response as Checklist);
          this.newChecklistTitle = '';
          this.toastrService.success('Checklist Başarıyla Eklendi.');
        },
        (error) => {
          this.toastrService.error('Checklist Eklenirken Bir Hata Oluştu.');
        }
      );
    }
  }
  
  removeChecklist(index: number) {
    const removedChecklist = this.checklists[index];
    if (confirm(`${removedChecklist.title} adlı Checklist'i silmek istediğinizden emin misiniz?`)) {
      this.checklistService.deleteChecklist(removedChecklist).subscribe(
        () => {
          this.checklists.splice(index, 1);
          this.toastrService.success('Checklist Başarıyla ilindi.');
        },
        (error) => {
          this.toastrService.error('Checklist Silinirken Bir Hata Oluştu.');
        }
      );
    }
  }

  getChecklistById(id:number){
    this.checklistService.getByIdChecklist(id).subscribe((response)=>{
      const foundChecklist=response as Checklist;
      if(foundChecklist){
        this.selectedChecklist=foundChecklist;
      }
      else{
        this.selectedChecklist=null;
        this.toastrService.error("Belirtilen Id Değerine Uygun Checklist Bulunamadı")
      }
    })
  }

  searchChecklist(){
    if (this.searchId) {
      this.getChecklistById(this.searchId);
      this.checklists=[];
    }
  }

  checklistItemCheckboxUpdated(checklistItem: ChecklistItem) {
    
    
    checklistItem.isCompleted=!checklistItem.isCompleted;
    this.checklistService.updateChecklistItem(checklistItem).subscribe((response)=>
    {
      this.toastrService.success("Değişiklikler Veritabanında Başarılı Bir Şekilde Güncellendi")
    },
    (error)=>{
      this.toastrService.error("Değişiklikler Veritabanında Güncellenirken Bir Hata Oluştu");
      checklistItem.isCompleted=!checklistItem.isCompleted;
    })
    
  }

}
