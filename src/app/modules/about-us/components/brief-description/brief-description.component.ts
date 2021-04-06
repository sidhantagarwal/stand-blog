import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brief-description',
  templateUrl: './brief-description.component.html',
  styleUrls: ['./brief-description.component.css']
})
export class BriefDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() message:string|undefined;
  @Input() title:string|undefined;

}
