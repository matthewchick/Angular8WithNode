import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredValue = '';
  newPost = 'NO CONTENT';
  onAddPost(postInput: HTMLTextAreaElement) {
    console.log(postInput);
    this.newPost = postInput.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
