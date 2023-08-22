import { ChecklistItem } from "./checklistItem";

export interface Template{
    templateId:number;
    title:string;
    items:ChecklistItem[];
    
}