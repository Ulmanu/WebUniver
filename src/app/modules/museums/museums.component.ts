import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Museum {
  constructor(
    private id :number,
    private title :string,
    private address :string,
    private description :string,
    private image :string
  ) {
  }
}


@Component({
  selector: 'app-museums',
  templateUrl: './museums.component.html',
  styleUrls: ['./museums.component.scss']
})
export class MuseumsComponent implements OnInit {

  museums:Museum[];


  constructor(
     private httpClient:HttpClient
  ) { }

  ngOnInit(): void {
    this.getMuseums();

  }
  getMuseums(){
    this.httpClient.get<any>('http://localhost:9191/museums').subscribe(
      response => {
        console.log(response);
        this.museums = response;
      }
    );
  }
  lat:number= 23.13123;
    lng:number=79.23123;


}
