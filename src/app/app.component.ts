import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   posts: Post[] = [
     {title: 'Want learn Angular', text: 'I learn components still' , id: 1},
     {title: 'Next Block', text: 'Lorem ' , id: 2}
  ];
   ngOnInit(): void {
     setTimeout(() => {
       console.log('Timeout');
       this.posts[0].title = 'Changed!';
     }, 5000);
   }

  updatePosts(post: Post ) {
     this.posts.unshift(post);
     // console.log('Post', post);
   }
   removePost(id: number) {
     console.log(id);
     this.posts = this.posts.filter(p => p.id !== id);
   }
}
