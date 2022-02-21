import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public product_url: string ="https://fakestoreapi.com/products";
  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>(this.product_url)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
