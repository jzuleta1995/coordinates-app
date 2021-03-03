import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { filter, map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoordinateService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = 'http://localhost:8000/coordinates/all';
  }

  public getCoordinates(){
    return this._http.get(this.url);
  }

}
