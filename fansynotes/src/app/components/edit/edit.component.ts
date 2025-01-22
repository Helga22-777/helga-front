import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { Note } from '../../model/note';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
 noteId: number | any; 
 note: Note |any;


 constructor(private noteService: NoteService, private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.noteId = params['id'];
      console.log(this.noteId);
      if(this.noteId >= 0) {
        this.note = this.noteService.get(this.noteId);
        console.log(this.note);
      } else {
        alert('Something Wrong!')
      }
    })
   
  }
  goBack() {  
    this.router.navigate([''])
  }
  update(): void {
    this.noteService.update(this.note);
    this.router.navigate(['']);
    alert("Record has been update!")
  }
}
