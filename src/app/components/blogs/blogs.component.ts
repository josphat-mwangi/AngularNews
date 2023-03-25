import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent  implements OnInit{

  constructor(private router: Router){}

  @Input() sources:any;
  @Output() onSelected = new EventEmitter<any>();


  ngOnInit(): void {}

  onSelectedBlog(title:{}){
    this.router.navigate(['blogs', title])
    
  }
}
