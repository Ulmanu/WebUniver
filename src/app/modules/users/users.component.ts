import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {UploadService} from '../upload.service';
import { AuthService } from 'src/app/_services/auth.service';
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
   public type:string,
   public idgal:number,
   public idexp:number,
   public price:number,
   public username:string,
   public name:string,
   public email:string,
   public password:string,
   public role:string

  ) {
  }
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  exes: Object[];
  closeResult: string;


  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private uploadFileService: UploadService,
    private authService: AuthService
  ) {
  }

  ObjectFile: File;
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  ngOnInit(): void {
    this.getObjects();

  }

  getObjects() {
    this.httpClient.get<any>('http://localhost:9191/users').subscribe(
      response => {
        console.log(response);
        this.exes = response;
      }
    );
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  nameImage:string;
  onFileSelected1(event) {
    this.ObjectFile = event.target.files[0];
    this.nameImage = this.ObjectFile.name;


  }

  onFileSelected(event) {
    this.ObjectFile = event.target.files[0];


  }

  onSubmit() {
this.form.image='images/museums/' + this.ObjectFile.name;
console.log(this.form);

this.uploadFileService.uploadFiles(this.ObjectFile);
    this.authService.registeruser(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        this.ngOnInit();

      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;

      }
    );
    this.modalService.dismissAll(); //dismiss the modal
  }

  openDetails(targetModal, Object: Object) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });

    document.getElementById('username').setAttribute('value', Object.username);
    document.getElementById('name').setAttribute('value', Object.name);

    document.getElementById('image').setAttribute('value', Object.image);
    document.getElementById('email').setAttribute('value', Object.email);
    document.getElementById('password').setAttribute('value', Object.password);
  }

  temp: Object;

  openEdit(targetModal, Object: Object) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.temp = Object;

    document.getElementById('username1').setAttribute('placeholder', Object.username);
    document.getElementById('name1').setAttribute('placeholder', Object.name);

    document.getElementById('email1').setAttribute('placeholder', Object.email);
    document.getElementById('role1').setAttribute('placeholder', Object.role);

  }

  onEdit(f: NgForm) {


    const url1 = 'http://localhost:9191/updateuser';
    var headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });



    const body = {
      id: this.temp.id,
      username: f.value.username,
      name: f.value.name,
      image:"images/museums/"+this.ObjectFile.name,
      password:this.temp.password,

      email: f.value.email,
      role: f.value.role
    };
    console.log(body);


    this.httpClient.put(url1, body)
      .subscribe((result) => {
        this.uploadFileService.uploadFiles(this.ObjectFile);
        this.ngOnInit(); //reload the table

      });
    this.modalService.dismissAll(); //dismiss the modal

  }


  deleteId: string;

  openDelete(targetModal, Object: Object) {
    this.deleteId = Object.id.toString();
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    const deleteURL = 'http://localhost:9191/deleteuser/' + this.deleteId;
    this.httpClient.delete(deleteURL)
      .subscribe((result) => {

      });
    this.modalService.dismissAll(); //dismiss the modal
    this.ngOnInit(); //reload the table

  }
}
