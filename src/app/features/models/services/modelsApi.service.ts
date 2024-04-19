import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelListItemDto } from '../models/model-list-item-dto';

@Injectable({
  providedIn: 'root',
})
export class ModelsApiService {
  constructor(private http: HttpClient) {}

  getList(brandId: number | null = null): Observable<ModelListItemDto[]> {
    const requestQueryParams : any = {}
    if (brandId !== null) requestQueryParams.brandId = brandId;

    return this.http.get<ModelListItemDto[]>('http://localhost:3000/models',
      {
        params: requestQueryParams
      });
    // .subscribe((httpResponse) => {
    //   return httpResponse;
    // });
  }
}
