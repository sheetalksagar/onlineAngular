import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http-posts',
  templateUrl: './http-posts.component.html',
})
export class HttpPostsComponent implements OnInit {

  posts;
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:Http) { }

  ngOnInit(): void {
    this.http
    .get(this.url)
    .subscribe((res)=>{
      console.log('res : ',res.json());
      this.posts=res.json();
    })
  }

  createPost(newTitle: HTMLInputElement) {
    console.clear();
    console.log('newTitle : ', newTitle);

    let post = { title: newTitle.value };
    this.http.post(this.url, post).subscribe((res) => {
      console.log('res : ', res.json());
      let title = res.json().title;
      let id = res.json().id;
      // this.posts.push({ id, title });

      this.posts.splice(0, 0, { id, title });
    });
  }
}
