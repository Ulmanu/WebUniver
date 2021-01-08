import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrls: ['./museum.component.scss']
})
export class MuseumComponent implements OnInit {
  id: number;
  private sub: any;
  exes: Object[];
  exest: Object[];
  exeses: Object[];
  urlSafe: SafeResourceUrl;
  url: string;
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer) {
    this.route.params.subscribe(params =>
      this.id = params['id']);
    console.log(this.id);
  }

  ngOnInit(): void {

    this.getObjects();
    this.getSections();
    this.getTurtypes();


  }
  getObjects() {
    this.httpClient.get<any>('http://localhost:9191/museums/' + this.id).subscribe(
      response => {
        console.log(response);
        this.exes = response;
      }
    );

  }
  getTurtypes() {
    this.httpClient.get<any>('http://localhost:9191/getjoinmus3/' + this.id).subscribe(
      response => {
        console.log(response);
        this.exest = response;
      }
    );
  }

  getSections() {
    this.httpClient.get<any>('http://localhost:9191/getjoinmus2/' + this.id).subscribe(
      response => {
        console.log(response);
        this.exeses = response;
      }
    );

  }
  click(lat, lon) {
    this.url = "https://maps.google.com/maps?q=" + lat + "," + lon + "&z=15&output=embed";
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    document.getElementsByTagName('iframe')[0].style.display = "flex";
  }
}
