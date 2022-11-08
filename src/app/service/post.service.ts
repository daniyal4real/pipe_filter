import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts = ["First post", "Second post", "Third post"]
  constructor() { }


  addPost(newPost: string) {
    this.posts.push(newPost)
  }
}
