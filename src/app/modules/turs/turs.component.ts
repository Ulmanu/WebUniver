import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {UploadService} from '../upload.service';

export class Object {
  idgal: any;
  idexp: any;
  price: string;
  idturtype: any;
  nametur: string;
  idsuv: any;
  name: string;
  amount: string;
  idsuva: any;
  date: string;
  idtur: any;


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
  selector: 'app-turs',
  templateUrl: './turs.component.html',
  styleUrls: ['./turs.component.scss']
})
export class TursComponent implements OnInit {


  exes: Object[];
  closeResult: string;
  exeSel:Object[];

  ObjectFile: File;
  exeSeluser: Object[];
  exeSelsect: Object[];
  exeSeltype: Object[];

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private uploadFileService: UploadService
  ) {
  }



  ngOnInit(): void {
    this.getObjects();

    this.getObjectsSelUser();
    this.getObjectsSelSect();
    this.getObjectsSelType();

  }

  getObjects() {
    this.httpClient.get<any>('http://localhost:9191/turs').subscribe(
      response => {
        console.log(response);
        this.exes = response;
      }
    );
  }



  getObjectsSelUser() {
    this.httpClient.get<any>('http://localhost:9191/users').subscribe(
      response => {
        console.log(response);
        this.exeSeluser = response;
      }
    );
  }


  getObjectsSelSect() {
    this.httpClient.get<any>('http://localhost:9191/sections').subscribe(
      response => {
        console.log(response);
        this.exeSelsect = response;
      }
    );
  }

  getObjectsSelType() {
    this.httpClient.get<any>('http://localhost:9191/turtypes').subscribe(
      response => {
        console.log(response);
        this.exeSeltype = response;
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

    const url = 'http://localhost:9191/addtur/'+f.value.id+'/'+f.value.idturtype;
    var headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const body = {
     date:f.value.date
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

    document.getElementById('date').setAttribute('value', Object.date);


    document.getElementById('id').setAttribute('value', Object.id.toString());


    document.getElementById('idturtype').setAttribute('value', Object.idturtype.toString());

  }

  temp: Object;

  openEdit(targetModal, Object: Object) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.temp = Object;
    document.getElementById('amount1').setAttribute('placeholder', Object.amount);



console.log(this.temp);
  }

  onEdit(f: NgForm) {


    const url1 = 'http://localhost:9191/updatetur';
    var headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });



    const body = {
      idtur: this.temp.idtur,
      id:f.value.id,


      idturtype:f.value.idturtype,
      date:f.value.date




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
    this.deleteId = Object.idtur.toString();
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    const deleteURL = 'http://localhost:9191/deletetur/' + this.deleteId;
    this.httpClient.delete(deleteURL)
      .subscribe((result) => {

      });
    this.modalService.dismissAll(); //dismiss the modal
    this.ngOnInit(); //reload the table

  }
}
