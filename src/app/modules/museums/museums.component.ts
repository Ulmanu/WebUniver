import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
export class Museum {
  constructor(
    private id :number,
    private title :string,
    private address :string,
    private description :string,
    private image :string
  ) {
  }
}


@Component({
  selector: 'app-museums',
  templateUrl: './museums.component.html',
  styleUrls: ['./museums.component.scss']
})
export class MuseumsComponent implements OnInit {

  museums:Museum[];
  closeResult:string;


  constructor(
     private httpClient:HttpClient,
     private modalService: NgbModal
  ) { }

  museumFile:File;
  ngOnInit(): void {
    this.getMuseums();

  }
  getMuseums(){
    this.httpClient.get<any>('http://localhost:9191/museums').subscribe(
      response => {
        console.log(response);
        this.museums = response;
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

  onFileSelected(event){
    this.museumFile=event.target.files[0];
    console.log(event);
    console.log(this.museumFile);

  }


  onSubmit(f: NgForm) {

    const url = 'http://localhost:9191/addmuseum';
    var headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json"
  });
    console.log(f.value.title);
    console.log(f.value.address);
    console.log(f.value.description);
    console.log(f.value.image);
    console.log(f.value.lat);
    console.log(f.value.lon);
    const body = {title: f.value.title, address:f.value.address,description:f.value.description,
      image:'images/museums/'+this.museumFile.name,lat:f.value.lat,lon:f.value.lon};
    const body1=JSON.stringify(body);
    console.log(body1);
    this.httpClient.post(url, body)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }




}
