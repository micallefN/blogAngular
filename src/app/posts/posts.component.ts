import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: string;

  constructor() { }

  ngOnInit() {
  }

  upLikes(){
    this.loveIts ++;
  }

  downLikes(){
    this.loveIts --;
  }
}
