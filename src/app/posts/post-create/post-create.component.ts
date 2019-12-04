import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  // @Output is a decorator pass postCreated to another component
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost() {
    // create a post object
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);      // emit post data to outside
  }

  constructor() { }

  ngOnInit() {
  }

}
