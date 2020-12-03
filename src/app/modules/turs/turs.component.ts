import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UploadService} from '../upload.service';
import {User} from '../users/users.component';



export class Tur {
  constructor(
    public idtur: number,
    public iduser: number,
    public idmus: number,
    public idsect: number,
    public date: string,
    public idturtype: number,
  ) {
  }
}
@Component({
  selector: 'app-turs',
  templateUrl: './turs.component.html',
  styleUrls: ['./turs.component.scss']
})
export class TursComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private uploadFileService: UploadService
  ) {

  }

  list: Tur[];
  closeResult: string;
  museumFile: File;

  ngOnInit(): void {
    this.getTurs();
  }

  getTurs() {
    this.httpClient.get<any>('http://localhost:9191/turs').subscribe(
      response => {
        console.log(response);
        this.list = response;
      }
    );
  }
}
