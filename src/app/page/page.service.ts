import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../Models/Products';
import configurl from '../../assets/config/config.json';
import { Page } from '../Models/Page';


var pages: Page[] = [
  {name: "Base Test", websiteUrl: "", pageUrl: "/base"}
];



@Injectable({
  providedIn: 'root',
})
export class PageService {
  url = configurl.apiServer.url + '/api/product/';
  constructor(private http: HttpClient) {}
  getPageConfiguration(websiteUrl: string, pageUrl: string): Page | null{
    var page= pages.find(page => page.pageUrl === pageUrl);
    if(page) {
      return page;
    }
    else {
      return null;
    }
    // return this.http.get<Products[]>(this.url + 'ProductsList');
  }
  postProductData(productData: Products): Observable<Products> {
    const httpHeaders = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Products>(
      this.url + 'CreateProduct',
      productData,
      httpHeaders
    );
  }
  updateProduct(product: Products): Observable<Products> {
    const httpHeaders = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Products>(
      this.url + 'UpdateProduct?id=' + product.productId,
      product,
      httpHeaders
    );
  }
  deleteProductById(id: number): Observable<number> {
    return this.http.post<number>(this.url + 'DeleteProduct?id=' + id, null);
  }
  getProductDetailsById(id: string): Observable<Products> {
    return this.http.get<Products>(this.url + 'ProductDetail?id=' + id);
  }
}
