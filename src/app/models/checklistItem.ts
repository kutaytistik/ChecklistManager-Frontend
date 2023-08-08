import { Checklist } from "./checklist";
import { Template } from "./template";

export interface ChecklistItem {
    cheklistItemId: number;
    content: string;
    isCompleted: boolean;
    cheklistId: number | null;
    templateId: number | null;
    template: Template | null;
    checklist: Checklist | null;

}