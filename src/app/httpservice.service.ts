import { formModel } from './inputform/form.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpserviceService {
  
  sub:any = new Subject();
  constructor(private http: HttpClient) {}

  public getstate() {
    return this.http.get('http://localhost:8090/form');
  }

  postDetails(data: formModel) {
    return this.http.post('http://localhost:8090/process', data);
  }

  public getlist() {
    return this.http.get('http://localhost:8090/list');
  }
  public getListFromList(state) {
    return this.http.get('http://localhost:8090/list/' + state);
  }
}
