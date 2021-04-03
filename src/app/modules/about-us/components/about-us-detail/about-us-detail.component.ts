import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-detail',
  templateUrl: './about-us-detail.component.html',
  styleUrls: ['./about-us-detail.component.css']
})
export class AboutUsDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() message:string|undefined;
  @Input() title:string|undefined;

}
