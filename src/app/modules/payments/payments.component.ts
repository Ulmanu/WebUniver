import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {UploadService} from '../upload.service';

export class Object {
  idgal: any;
  idexp: any;
  price: string;
  cardnumber: string;
  amount: string;
  iduser: string;
  idpay: any;


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
   public type:string

  ) {
  }
}
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  exes: Object[];
  closeResult: string;
  exeSel:Object[];

  ObjectFile: File;

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private uploadFileService: UploadService
  ) {
  }



  ngOnInit(): void {
    this.getObjects();
    this.getObjectsSel();

  }

  getObjects() {
    this.httpClient.get<any>('http://localhost:9191/payments').subscribe(
      response => {
        console.log(response);
        this.exes = response;
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


  onFileSelected1(event) {
    this.ObjectFile = event.target.files[0];
    document.getElementById('image21').innerHTML = this.ObjectFile.name;


  }

  onFileSelected(event) {
    this.ObjectFile = event.target.files[0];


  }

  onSubmit(f: NgForm) {

    const url = 'http://localhost:9191/addpayment/'+f.value.iduser;
    var headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const body = {
      cardnumber: f.value.cardnumber, amount: f.value.amount,
     idgal:f.value.iduser
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

  openDetails(targetModal, Object: Object) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });

    document.getElementById('cardnumber').setAttribute('value', Object.cardnumber);


    document.getElementById('amount').setAttribute('value', Object.amount);
    document.getElementById('iduser').setAttribute('value', Object.iduser);

  }

  temp: Object;

  openEdit(targetModal, Object: Object) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.temp = Object;
    document.getElementById('cardnumber1').setAttribute('placeholder', Object.cardnumber);


    document.getElementById('amount1').setAttribute('placeholder', Object.amount);
    document.getElementById('iduser').setAttribute('value', Object.iduser);
    // document.getElementById('type').setAttribute('value', Object.type);
    // document.getElementById('idmus').setAttribute('value', Object.idmus.toString());
console.log(this.temp);
  }

  onEdit(f: NgForm) {


    const url1 = 'http://localhost:9191/updatepayment';
    var headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });


    const body = {
      idpay: this.temp.idpay,
      cardnumber:f.value.cardnumber,
      amount:f.value.amount,
      iduser:f.value.iduser

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
    this.deleteId = Object.idpay.toString();
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    const deleteURL = 'http://localhost:9191/deletepayment/' + this.deleteId;
    this.httpClient.delete(deleteURL)
      .subscribe((result) => {

      });
    this.modalService.dismissAll(); //dismiss the modal
    this.ngOnInit(); //reload the table

  }
}
