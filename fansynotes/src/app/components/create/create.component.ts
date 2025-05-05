import { Component } from '@angular/core';
import { Note } from '../../model/note';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  isNoteCreated: boolean = false
  newNote: Note = {
    id: 0,
    title: '',
    description: '',
    date: new Date(),
    color: ''
  }
  
  constructor(private noteService: NoteService, activetedRoute: ActivatedRoute, private router: Router) {}

  createNewNote() {
    this.noteService.create(this.newNote);
    console.log(this.newNote);
    this.newNote = {
      id: 0,
      title: '',
      description: '',
      date: new Date(),
      color: ''
    }
    this.goBack();
  }
  goBack() {
    this.router.navigate([''])
  }
}
