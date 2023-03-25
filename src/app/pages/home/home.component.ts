import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  sources:any;
  message:any;
  searchQuery:any;

 
  constructor(private restService: RestService) {}

 
  
  ngOnInit(){
    this.sendGetRequest();
  }

  sendGetRequest(){
    this.restService.sendGetRequest(this.message).subscribe(response =>{
      this.sources = response.articles;
    })
  
  }

  receiveData(data:string){
    if (data !== this.message) {
      this.message = data;
      this.sendGetRequest();
    }
  }

  search(){
    this.restService.searchByTitle(this.searchQuery).subscribe(response =>{
      this.sources = response.articles;
    })
  }

  
}
