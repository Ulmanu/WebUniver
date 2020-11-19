import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  SERVER_URL: string = "http://localhost:9191/upload";
  constructor(private httpClient: HttpClient) { }
  public uploadFiles(file) {

    const formData: FormData = new FormData();
    formData.append('file', file);

    console.log(formData);
    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );

}
}

