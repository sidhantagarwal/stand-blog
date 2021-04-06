import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-module-banner',
  templateUrl: './module-banner.component.html',
  styleUrls: ['./module-banner.component.css']
})
export class ModuleBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() message:string|undefined;
  @Input() title:string|undefined;
}
