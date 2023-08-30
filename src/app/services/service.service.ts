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
      .get<any>(
        'cdn-frontdoor-rishi-f8b7aecxh6cudgf5.z01.azurefd.net/getProducts'
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
