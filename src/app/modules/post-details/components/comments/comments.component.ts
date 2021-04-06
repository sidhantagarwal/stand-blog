import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() { }
  @Input() image:string|undefined
  @Input() title:string|undefined
  @Input() paragraph:string|undefined
  @Input() date:string|undefined
  ngOnInit(): void {
  }

}
