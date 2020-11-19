import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
	SERVER_URL: string = "http://localhost:9191/upload";
  constructor(private http: HttpClient) { }

  uploadFiles(file: File): Observable<HttpEvent<{}>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const request = new HttpRequest('POST', '/upload', formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(request);
  }
}
