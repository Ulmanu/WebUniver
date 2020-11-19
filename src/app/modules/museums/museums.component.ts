import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { UploadService } from '../upload.service';
export class Museum {
  title: string;
  address: string;
  description: string;
  image: string;
  lat: string;
  lon: string;
  id: string;

  constructor(
    id: number,
    title: string,
    address: string,
    description: string,
    image: string,
    lat: number,
    lon: number
  ) {
  }
}


@Component({
  selector: 'app-museums',
  templateUrl: './museums.component.html',
  styleUrls: ['./museums.component.scss']
})
export class MuseumsComponent implements OnInit {

  museums: Museum[];
  closeResult: string;


  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private uploadFileService: UploadService
  ) { }

  museumFile: File;
  ngOnInit(): void {
    this.getMuseums();

  }
  getMuseums() {
    this.httpClient.get<any>('http://localhost:9191/museums').subscribe(
      response => {
        console.log(response);
        this.museums = response;
      }
    );
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

  onFileSelected1(event) {
    this.museumFile = event.target.files[0];
    document.getElementById('image21').innerHTML = this.museumFile.name;


  }
  onFileSelected(event) {
    this.museumFile = event.target.files[0];


  }

  onSubmit(f: NgForm) {

    const url = 'http://localhost:9191/addmuseum';
    var headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });

    const body = {
      title: f.value.title, address: f.value.address, description: f.value.description,
      image: 'images/museums/' + this.museumFile.name, lat: f.value.lat, lon: f.value.lon
    };
    this.uploadFileService.uploadFiles(this.museumFile);
    const body1 = JSON.stringify(body);
    console.log(body1);
    this.httpClient.post(url, body)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }

  openDetails(targetModal, museum: Museum) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });

    document.getElementById('title1').setAttribute('value', museum.title);
    document.getElementById('address1').setAttribute('value', museum.address);
    document.getElementById('description1').innerHTML = museum.description;
    document.getElementById('image1').setAttribute('value', museum.image);
    document.getElementById('lat1').setAttribute('value', museum.lat);
    document.getElementById('lon1').setAttribute('value', museum.lon);
  }

  temp: Museum;
  openEdit(targetModal, museum: Museum) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.temp = museum;
    document.getElementById('id').setAttribute('placeholder', museum.id);
    document.getElementById('title').setAttribute('placeholder', museum.title);
    document.getElementById('address').setAttribute('placeholder', museum.address);
    document.getElementById('description').setAttribute('placeholder', museum.description);

    document.getElementById('image21').innerHTML = museum.image;
    document.getElementById('lat').setAttribute('placeholder', museum.lat);
    document.getElementById('lon').setAttribute('placeholder', museum.lon);

  }

  onEdit(f: NgForm) {


    const url1 = 'http://localhost:9191/update';
    var headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });


    document.getElementById('image21').innerHTML = this.museumFile.name;
    const body = {
      id: this.temp.id,
      title: f.value.title,
      address: f.value.address,
      description: f.value.description,
      image: 'images/museums/' + document.getElementById('image21').innerHTML.replace('images/museums/', ''),
      lat: f.value.lat,
      lon: f.value.lon
    };
    console.log(body);


    this.httpClient.put(url1, body)
      .subscribe((result) => {
        this.uploadFileService.uploadFiles(this.museumFile);
        this.ngOnInit(); //reload the table

      });
    this.modalService.dismissAll(); //dismiss the modal

  }


  deleteId: string;
  openDelete(targetModal, museum: Museum) {
    this.deleteId = museum.id;
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
