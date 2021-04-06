import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
@Component({
  selector: 'app-blog-entries',
  templateUrl: './blog-entries.component.html',
  styleUrls: ['./blog-entries.component.css']
})
export class BlogEntriesComponent implements OnInit {

  constructor( private user:UserServiceService) { 
    this.user.getData().subscribe((data:any)=>
      {
        console.warn(data)
      })
  }

  ngOnInit(): void {
  }

}
