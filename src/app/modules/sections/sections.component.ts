import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {UploadService} from '../upload.service';

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
   public type:string

  ) {
  }
}
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  exes: Object[];
  closeResult: string;
  exeSel:Object[];



  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private uploadFileService: UploadService
  ) {
  }

  ObjectFile: File;

  ngOnInit(): void {
    this.getObjects();
    this.getObjectsSel();

  }

  getObjects() {
    this.httpClient.get<any>('http://localhost:9191/sections').subscribe(
      response => {
        console.log(response);
        this.exes = response;
      }
    );
  }

  getObjectsSel() {
    this.httpClient.get<any>('http://localhost:9191/museums').subscribe(
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

    const url = 'http://localhost:9191/addsections';
    var headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const body = {
      title: f.value.title, description: f.value.description,
      image: 'images/museums/' + this.ObjectFile.name, type:f.value.type, idmus:2
    };
    this.uploadFileService.uploadFiles(this.ObjectFile);
    const body1 = JSON.stringify(body);
    console.log(body1);
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

    document.getElementById('title1').setAttribute('value', Object.title);
    document.getElementById('address1').setAttribute('value', Object.address);
    document.getElementById('description1').innerHTML = Object.description;
    document.getElementById('image1').setAttribute('value', Object.image);
    document.getElementById('lat1').setAttribute('value', Object.lat.toString());
    document.getElementById('lon1').setAttribute('value', Object.lon.toString());
  }

  temp: Object;

  openEdit(targetModal, Object: Object) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.temp = Object;
    document.getElementById('id').setAttribute('placeholder', Object.id.toString());
    document.getElementById('title').setAttribute('placeholder', Object.title);
    document.getElementById('address').setAttribute('placeholder', Object.address);
    document.getElementById('description').setAttribute('placeholder', Object.description);

    document.getElementById('image21').innerHTML = Object.image;
    document.getElementById('lat').setAttribute('placeholder', Object.lat.toString());
    document.getElementById('lon').setAttribute('placeholder', Object.lon.toString());

  }

  onEdit(f: NgForm) {


    const url1 = 'http://localhost:9191/update';
    var headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });


    document.getElementById('image21').innerHTML = this.ObjectFile.name;
    const body = {
      id: this.temp.id,
      title: f.value.title,
      address: f.value.address,
      description: f.value.description,
      image: 'images/museums/' + document.getElementById('image21').innerHTML.replace('images/Objects/', ''),
      lat: f.value.lat,
      lon: f.value.lon
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
    const deleteURL = 'http://localhost:9191/delete/' + this.deleteId;
    this.httpClient.delete(deleteURL)
      .subscribe((result) => {

      });
    this.modalService.dismissAll(); //dismiss the modal
    this.ngOnInit(); //reload the table

  }
}
