import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent implements OnInit {

  constructor() { }
@Input() message:string|undefined
@Input() date:string|undefined
  ngOnInit(): void {
  }

}
