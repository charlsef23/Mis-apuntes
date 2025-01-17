export interface Note {
    id: number;
    title: string;
    content: string;
    category: string;
    tags: string[];
  }
  
  export interface Folder {
    id: number;
    name: string;
    notes: Note[];
  }