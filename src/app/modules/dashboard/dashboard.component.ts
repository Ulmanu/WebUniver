import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { HttpClient } from '@angular/common/http';
// import {Component, OnInit} from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { UploadService } from '../../modules/upload.service';
// import { AuthService } from 'src/app/_services/auth.service';

export class Object {
  idpay: string;
  amount: string;
  iduser: string;
  cardnumber: string;


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
    public type: string,
    public idgal: number,
    public idexp: number,
    public price: number,
    public username: string,
    public name: string,
    public email: string,
    public password: string,
    public role: string

  ) {
  }
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService,
    private httpClient: HttpClient,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,

    private modalService: NgbModal,
    private uploadFileService: UploadService,
  ) {
  }

  ObjectFile: File;
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  closeResult: string;
  exeSel: any;
  exesp: any;


  ngOnInit(): void {
    this.getObjects();
    this.getObjectsp();
    this.selSouv();
    this.selTour();
    this.selSouv2();
    this.selTour2();
  }
  exes: Object[];
  getObjects() {
    this.httpClient.get<any>('http://localhost:9191/users/' + this.tokenStorage.getUser().id).subscribe(
      response => {
        console.log(response);
        this.exes = response;
      }
    );
  }
  logout(): void {
    this.tokenStorage.signOut();
    this.router.navigate(['/']);
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

  nameImage: string;
  onFileSelected1(event) {
    this.ObjectFile = event.target.files[0];
    this.nameImage = this.ObjectFile.name;


  }

  onFileSelected(event) {
    this.ObjectFile = event.target.files[0];


  }

  onSubmit() {
    this.form.image = 'images/museums/' + this.ObjectFile.name;
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
      id: this.tokenStorage.getUser().id,
      username: f.value.username,
      name: f.value.name,
      image: "images/museums/" + this.ObjectFile.name,
      password: this.temp.password,

      email: f.value.email,
      role: "ROLE_ADMIN"
    };
    console.log(body);


    this.httpClient.put(url1, body)
      .subscribe((result) => {
        this.uploadFileService.uploadFiles(this.ObjectFile);
        this.ngOnInit(); //reload the table

      });
    this.modalService.dismissAll(); //dismiss the modal

  }


  deleteId: any;

  openDelete(targetModal, Object: Object) {
    this.deleteId = this.tokenStorage.getUser().id;
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
      this.tokenStorage.signOut();
      this.router.navigate(['/']);
    this.modalService.dismissAll(); //dismiss the modal
    this.ngOnInit(); //reload the table

  }

  getObjectsp() {
    this.httpClient.get<any>('http://localhost:9191/getjoinmus6/' + this.tokenStorage.getUser().id).subscribe(
      response => {
        console.log(response);
        this.exesp = response;
      }
    );
  }

  getObjectsSel() {
    this.httpClient.get<any>('http://localhost:9191/users').subscribe(
      response => {
        console.log(response);
        this.exeSel = response;
      }
    );
  }

  openp(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReasonp(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  onFileSelected1p(event) {
    this.ObjectFile = event.target.files[0];
    document.getElementById('image21').innerHTML = this.ObjectFile.name;


  }

  onFileSelectedp(event) {
    this.ObjectFile = event.target.files[0];


  }

  onSubmitp(f: NgForm) {

    const url = 'http://localhost:9191/addpayment/' + this.tokenStorage.getUser().id;
    var headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const body = {
      cardnumber: f.value.cardnumber, amount: f.value.amount,
      idgal: this.tokenStorage.getUser().id
    };
    console.log(body);
    this.uploadFileService.uploadFiles(this.ObjectFile);
    const body1 = JSON.stringify(body);

    console.log(f.value.idmus);
    this.httpClient.post(url, body)
      .subscribe((result) => {
        alert(result);
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }

  openDetailsp(targetModal, Object: Object) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });

    document.getElementById('cardnumber').setAttribute('value', Object.cardnumber);


    document.getElementById('amount').setAttribute('value', Object.amount);


  }

  tempp: Object;

  openEditp(targetModal, Object: Object) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.tempp = Object;
    document.getElementById('cardnumber1').setAttribute('placeholder', Object.cardnumber);

    console.log(this.tempp.idpay);
    document.getElementById('amount1').setAttribute('placeholder', Object.amount);

    // document.getElementById('type').setAttribute('value', Object.type);
    // document.getElementById('idmus').setAttribute('value', Object.idmus.toString());
    console.log(this.temp);
  }

  onEditp(f: NgForm) {


    const url1 = 'http://localhost:9191/updatepayment';
    var headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });


    const body = {
      idpay: this.tempp.idpay,
      cardnumber: f.value.cardnumber,
      amount: f.value.amount,
      iduser: this.tokenStorage.getUser().id

    };
    console.log(body);


    this.httpClient.put(url1, body)
      .subscribe((result) => {
        this.uploadFileService.uploadFiles(this.ObjectFile);
        this.ngOnInit(); //reload the table

      });
    this.modalService.dismissAll(); //dismiss the modal

  }


  deleteIdp: string;

  openDeletep(targetModal, Object: Object) {
    this.deleteId = Object.idpay;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDeletep() {
    const deleteURL = 'http://localhost:9191/deletepayment/' + this.deleteId;
    this.httpClient.delete(deleteURL)
      .subscribe((result) => {

      });
    this.modalService.dismissAll(); //dismiss the modal
    this.ngOnInit(); //reload the table

  }

  exesf: any;
  selSouv() {
    this.httpClient.get<any>('http://localhost:9191/getjoinmus7/' + this.tokenStorage.getUser().id).subscribe(
      response => {
        console.log(response);
        this.exesf = response;
      }
    );
  }

  exest: any;
  selTour() {
    this.httpClient.get<any>('http://localhost:9191/getjoinmus8/' + this.tokenStorage.getUser().id).subscribe(
      response => {
        console.log(response);
        this.exest = response;
      }
    );
  }

  exesy: any;
  delSouv(idsuv) {
    const deleteURL = 'http://localhost:9191/deletejoin1/' + this.tokenStorage.getUser().id+'/'+idsuv;
    this.httpClient.delete(deleteURL)
    .subscribe((result) => {

    });
  }

  exesv: any;
  delTour(idsuv) {
    const deleteURL = 'http://localhost:9191/deletejoin2/' + this.tokenStorage.getUser().id+'/'+idsuv;
    this.httpClient.delete(deleteURL)
    .subscribe((result) => {

    });
  }
exast:any;
  selSouv2() {
    this.httpClient.get<any>('http://localhost:9191/getjoinmus9/' + this.tokenStorage.getUser().id).subscribe(
      response => {
        console.log(response);
        this.exast = response;

      }
    );
  }

exasdt:any;
  selTour2() {
    this.httpClient.get<any>('http://localhost:9191/getjoinmus10/' + this.tokenStorage.getUser().id).subscribe(
      response => {
        console.log(response);
        this.exasdt = response;

      }
    );
  }
}
