import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: string | undefined;
  @Input() message: string | undefined;
  @Input() user: string | undefined;
  @Input() date: string | undefined ;
  @Input() comments: string | undefined;
}

