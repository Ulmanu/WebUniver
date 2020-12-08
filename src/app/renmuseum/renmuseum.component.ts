import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

export class Object {


  constructor(
   public id: number,
   public title: string,
   public address: string,
   public description: string,
   public image: string,
   public lat: number,
   public lon: number,
   public idsect:number,
   public idmus:number,
   public type:string

  ) {
  }
}
@Component({
  selector: 'app-renmuseum',
  templateUrl: './renmuseum.component.html',
  styleUrls: ['./renmuseum.component.scss']
})
export class RenmuseumComponent implements OnInit {

  exes: Object[];
  closeResult: string;


  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getObjects();

  }

  getObjects() {
    this.httpClient.get<any>('http://localhost:9191/museums').subscribe(
      response => {
        console.log(response);
        this.exes = response;
      }
    );
  }



}
