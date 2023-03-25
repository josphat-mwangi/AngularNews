import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pipe } from 'rxjs';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog:any
  constructor(private route: ActivatedRoute, private restService: RestService){};

  ngOnInit(){
    const title:string = this.route.snapshot.paramMap.get('title') as string;
    this.restService.searchByTitle(title).subscribe(response =>{
      this.blog = response.articles
    });
  }
}
