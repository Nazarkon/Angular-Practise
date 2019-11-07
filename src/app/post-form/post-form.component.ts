import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAdd = new EventEmitter<Post>();
  @ViewChild('titleInput', {static: true}) inputRef: ElementRef;
  title = '';
  text = '';
  constructor() { }

  ngOnInit() {
    // console.log(this.inputRef.nativeElement.focus());
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {
       const post: Post = {
         title: this.title,
         text: this.text
       };
       this.onAdd.emit(post);
       this.title = this.text = '';
    }
  }
}
