import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http
      .get<any>('https://ms007.azurewebsites.net/getProducts')
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
