import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {UploadService} from '../upload.service';
import {Museum} from '../museums/museums.component';

export class Section {
  constructor(
    public idsect: number,
    public title: string,
    public description: string,
    public image: string,
    public type: string,
    public idmus: number
  ) {
  }
}


@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private uploadFileService: UploadService
  ) {

  }


  sections: Section[];
  closeResult: string;
  museumFile: File;


  ngOnInit(): void {
    this.getSections();
  }


  getSections() {
    this.httpClient.get<any>('http://localhost:9191/sections').subscribe(
      response => {

        this.sections = response;
      }
    );

  }

}
