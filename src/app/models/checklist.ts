import { ChecklistItem } from "./checklistItem";

export interface Checklist {
    checklistId: number;
    title: string;
    createdAt: string;
    updatedAt: string | null;
    items: ChecklistItem[];

}