import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit{
  posts: Post[] = [];

  constructor(private bs : BlogService){  }


  ngOnInit(): void {
    this.bs.getPosts().subscribe(p => {
      this.posts = p;
    });
  }
}
