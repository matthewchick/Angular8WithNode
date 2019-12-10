import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  // @Output is a decorator pass postCreated to another component
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // create a post object
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    // emit post data to outside
    this.postCreated.emit(post);
  }

  constructor() { }

  ngOnInit() {
  }
}
