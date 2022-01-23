import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CuriosityDataModel, PhotosModel } from 'src/shared/models/curiosityData.model';

@Injectable({
  providedIn: 'root'
})
export class CuriosityAPIService {
  
  public curiosityData$ = new BehaviorSubject<Array<CuriosityDataModel>>([]);
  public selected$ = new BehaviorSubject<Array<CuriosityDataModel>>([]);
  private readonly API_BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
  private readonly API_KEY_PARAMETER = "&api_key=SJtLy0wNppl58fwcHcMcFKo9i4tkASgJlgLSmXkJ"

  constructor(
    private http: HttpClient
  ) { }

  public getData(date: string = "2015-6-3", camera: string = ""): Observable<CuriosityDataModel[]> {
    const url = `${this.API_BASE_URL}${camera}&earth_date=${date}${this.API_KEY_PARAMETER}`;
    return this.http.get<Array<PhotosModel>>(url)
    .pipe(
      map((data: any) => data.photos)
    );
  }
}

