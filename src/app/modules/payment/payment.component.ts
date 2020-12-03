import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {UploadService} from '../upload.service';
import {Museum} from '../museums/museums.component';
import {Section} from '../sections/sections.component';

export class Payment {

  constructor(
    public idpay: number,
    public cardnumber: string,
    public amount: string,
    public iduser: number
  ) {
  }
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private uploadFileService: UploadService
  ) {

  }

  list: Payment[];
  closeResult: string;
  museumFile: File;

  ngOnInit(): void {
    this.getObjects();
  }

  getObjects() {
    this.httpClient.get<any>('http://localhost:9191/payments').subscribe(
      response => {
        console.log(response);
        this.list = response;
      }
    );
  }

}
