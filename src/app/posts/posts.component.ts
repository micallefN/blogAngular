import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() post: object;
  constructor() { }

  ngOnInit() {
  }

  upLikes(){
    this.post.loveIts ++;
  }

  downLikes(){
    this.post.loveIts --;
  }
}
