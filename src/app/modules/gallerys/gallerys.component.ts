import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {UploadService} from '../upload.service';
import {Museum} from '../museums/museums.component';
import {Section} from '../sections/sections.component';

export class Gallery {

  constructor(
    public idgal: number,
    public title: string,
    public description: string,
    public image: string,
    public idsect: number
  ) {
  }
}

@Component({
  selector: 'app-gallerys',
  templateUrl: './gallerys.component.html',
  styleUrls: ['./gallerys.component.scss']
})
export class GallerysComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private uploadFileService: UploadService
  ) {

  }

  list: Gallery[];
  closeResult: string;
  museumFile: File;

  ngOnInit(): void {
    this.getGallerys();
  }

  getGallerys() {
    this.httpClient.get<any>('http://localhost:9191/gallerys').subscribe(
      response => {
        console.log(response);
        this.list = response;
      }
    );
  }

}
