import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UploadService} from '../upload.service';


export class User {
  constructor(
    public iduser: number,
    public name: string,
    public image: string,
    public password: string,
    public email: string,
    public role: string
  ) {
  }
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private uploadFileService: UploadService
  ) {

  }

  list: User[];
  closeResult: string;
  museumFile: File;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.httpClient.get<any>('http://localhost:9191/users').subscribe(
      response => {
        console.log(response);
        this.list = response;
      }
    );
  }

}
