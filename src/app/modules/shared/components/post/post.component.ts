import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input () title : string | undefined;
@Input () message : string | undefined;
@Input () user : string | undefined;
@Input () date : string | undefined;
@Input () comments : string | undefined;
@Input () paragraph: string | undefined;
@Input () icon: string | undefined;
@Input () icon2: string | undefined;
@Input () icon3: string | undefined;
@Input () icon4: string | undefined;
@Input ()image :string|undefined;


}
