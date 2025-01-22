import { Injectable } from '@angular/core';
import { Note } from '../model/note';
import { generate } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
private localStorageKey = 'notes_with_fancy'

  constructor() { }

  getAll(): Note[] {
    const noteJson = localStorage.getItem(this.localStorageKey);
    return noteJson ? JSON.parse(noteJson) : [];
  }
  get(id: number): Note | any {
    const noteJson = localStorage.getItem(this.localStorageKey);
    const notes: Note[] = noteJson ? JSON.parse(noteJson) : [];
    console.log(typeof id);
    console.log(typeof notes[0]?.id);    
    console.log(notes.find(el => el.id === +id ));
    return notes.find(el => el.id === +id )
  }
  create(note: Note): Note {
    let notes: Note[] = JSON.parse(localStorage.getItem(this.localStorageKey) || "[]");
    note.id = this.generateId();
    notes.push(note);
    localStorage.setItem(this.localStorageKey, JSON.stringify(notes));
    return note;
  }
  update(note: Note): Note | undefined {
    let notes: Note[] = JSON.parse(localStorage.getItem(this.localStorageKey) || "[]");
    let index = notes.findIndex(el => el.id === note.id);

    if(index !== -1) {
      notes[index] = note;
      localStorage.setItem(this.localStorageKey, JSON.stringify(notes));
      return note;
    }
    return undefined;
  }
  delete(noteId:number) {
    let notes: Note[] = JSON.parse(localStorage.getItem(this.localStorageKey) || "[]");
    let index = notes.findIndex(el => el.id === noteId);
    if(index !== -1) {
      notes.splice(index, 1);
      localStorage.setItem(this.localStorageKey, JSON.stringify(notes));
    }
  }
  generateId() {
    const notes: Note[] = JSON.parse(localStorage.getItem(this.localStorageKey) || "[]");
    const ids = notes.map(el => el.id);
    const maxId = Math.max(...ids);
    return maxId >= 0 ? maxId + 1 : 0;
  }
 }
