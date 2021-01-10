import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
//import { Pipe, PipeTransform } from '@angular/core';
export class Object {


  constructor(
    public id: number,
    public title: string,
    public address: string,
    public description: string,
    public image: string,
    public lat: number,
    public lon: number,
    public idsect: number,
    public idmus: number,
    public type: string

  ) {
  }
}
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  exes: Object[];
  closeResult: string;
  urlSafe: SafeResourceUrl;
  url: string;
  constructor(
    private httpClient: HttpClient,
    public sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.getObjects();


  }

  getObjects() {
    this.httpClient.get<any>('http://localhost:9191/getjoinmus44').subscribe(
      response => {
        console.log(response);
        this.exes = response;
      }
    );


  }

  click(lat, lon) {
    this.url = "https://maps.google.com/maps?q=" + lat + "," + lon + "&z=15&output=embed";
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }


}
