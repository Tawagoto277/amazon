import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../models/post';
import { BlogService } from '../../../services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit{

  post? : Post;

  constructor(private bs : BlogService, private route : ActivatedRoute){  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('postId')!;
    
    this.bs.getPostsById(id).subscribe(p => {
      this.post = p;
    })
  }
}
