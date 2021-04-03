import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit {

  constructor() { }
@Input () message: string|undefined;
@Input () date: string|undefined;
  ngOnInit(): void {
  }

}
