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
  selector: 'app-turtypes',
  templateUrl: './turtypes.component.html',
  styleUrls: ['./turtypes.component.scss']
})
export class TurtypesComponent implements OnInit {
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
    this.httpClient.get<any>('http://localhost:9191/turtypes').subscribe(
      response => {
        console.log(response);
        this.exes = response;
      }
    );
  }

  getObjectsSel() {
    this.httpClient.get<any>('http://localhost:9191/gallerys').subscribe(
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

    const url = 'http://localhost:9191/addturtype';
    var headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const body = {
      nametur: f.value.nametur, description: f.value.description,
       price:f.value.price
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

    document.getElementById('nametur').setAttribute('value', Object.nametur);

    document.getElementById('description').innerHTML = Object.description;

    document.getElementById('price').setAttribute('value', Object.price);

  }

  temp: Object;

  openEdit(targetModal, Object: Object) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.temp = Object;
    document.getElementById('nametur1').setAttribute('placeholder', Object.nametur);

    document.getElementById('description1').setAttribute('placeholder',Object.description);

    document.getElementById('price1').setAttribute('placeholder', Object.price);
console.log(this.temp);
  }

  onEdit(f: NgForm) {


    const url1 = 'http://localhost:9191/updateturtype';
    var headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });



    const body = {
      idturtype: this.temp.idturtype,
      nametur: f.value.nametur,
      description: f.value.description,

      price:f.value.price

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
    this.deleteId = Object.idturtype.toString();
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    const deleteURL = 'http://localhost:9191/deleteturtype/' + this.deleteId;
    this.httpClient.delete(deleteURL)
      .subscribe((result) => {

      });
    this.modalService.dismissAll(); //dismiss the modal
    this.ngOnInit(); //reload the table

  }

}
