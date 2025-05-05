import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Note } from '../../model/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  notes: Note[] = [];
  constructor(private noteService: NoteService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() : void {
    this.notes = this.noteService.getAll();
  }
  deleteNote(id: number): void {
    if(confirm("Do you want to delete?")) {
      this.noteService.delete(id);
      window.location.reload();
    } else {
      return;
    }
  }
   getBgColor(x: string | null): string {
    console.log(x); 
    if(x) {
      return `background-color : ${x}`;
    } else {
      return `background-color: black`;
    }
   }
}
