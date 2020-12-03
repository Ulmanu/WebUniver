import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UploadService} from '../upload.service';


export class Exponat {
  constructor(
    public idexp: number,
    public title: string,
    public description: string,
    public image: string,
    public idgal: number,
    public price: number
  ) {
  }
}

@Component({
  selector: 'app-exponats',
  templateUrl: './exponats.component.html',
  styleUrls: ['./exponats.component.scss']
})
export class ExponatsComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private uploadFileService: UploadService
  ) {

  }

  list: Exponat[];
  closeResult: string;
  museumFile: File;

  ngOnInit(): void {
    this.getExponats();
  }

  getExponats() {
    this.httpClient.get<any>('http://localhost:9191/exponats').subscribe(
      response => {
        console.log(response);
        this.list = response;
      }
    );
  }

}
