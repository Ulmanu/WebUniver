import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadService } from '../modules/upload.service';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
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
  selector: 'app-souvenirsall',
  templateUrl: './souvenirsall.component.html',
  styleUrls: ['./souvenirsall.component.scss']
})
export class SouvenirsallComponent implements OnInit {

  exes: Object[];
  closeResult: string;
  urlSafe: SafeResourceUrl;
  url: string;
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,

    private modalService: NgbModal,
    private uploadFileService: UploadService,
    private httpClient: HttpClient,
    public sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.getObjects();


  }

  getObjects() {
    this.httpClient.get<any>('http://localhost:9191/souvenirss').subscribe(
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

  submit(f: NgForm,idsuva)
  {
    const url = 'http://localhost:9191/addpurchase/'+this.tokenStorage.getUser().id+'/'+idsuva;
    var headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const body = {
     date:new Date(),
     qty:f.value.qty
    };
    console.log(body);



    this.httpClient.post(url, body)
      .subscribe((result) => {
        alert(result);



      });

  }

}
