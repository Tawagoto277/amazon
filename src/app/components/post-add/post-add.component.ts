import { Component } from '@angular/core';
import { PostDTO } from '../../models/post';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.css'
})
export class PostAddComponent {
  model : PostDTO = new PostDTO();

  //Template Driven Form - Form che si basano su template
  //form che viene guidato da un template 
  //parto scivendo un template e poi scrivo un form
  //diverse dalle Reactive Form - credo sia il contrario

  aggiungiPost(){
    console.log(this.model);
  };
}
