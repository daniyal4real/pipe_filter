import { Component, OnInit } from '@angular/core';
import {PostService} from "../../service/post.service";
import * as stream from "stream";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
    public service: PostService
  ) { }


  addPost(value: string) {
    this.service.addPost(value);
  }
  ngOnInit(): void {
  }

}
