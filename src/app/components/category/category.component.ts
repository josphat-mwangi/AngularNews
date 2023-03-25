import { Component, OnInit, EventEmitter, Output  } from '@angular/core';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  countries = [
    {
      "country": "United State",
      "countryCode": "us"
    },
    {
      "country": "Israel",
      "countryCode": "il"
    },
    {
      "country": "South Africa",
      "countryCode": "za"
    },
    {
      "country": "South Korea",
      "countryCode": "kr"
    },
    {
      "country": "UAE",
      "countryCode": "ae"
    },
    {
      "country": "Singapore",
      "countryCode": "sg"
    }
  ]
  constructor(){}

  @Output() dataEvent = new EventEmitter<string>();


  ngOnInit(): void{}

  onCountry(countryCode:string){
    console.log(countryCode)
    this.dataEvent.emit(countryCode)
  }
}
