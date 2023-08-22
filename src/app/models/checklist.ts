import { ChecklistItem } from "./checklistItem";

export interface Checklist {
    checklistId: number;
    title: string;
    createdAt: Date;
    updatedAt: Date | null;
    items: ChecklistItem[];

}