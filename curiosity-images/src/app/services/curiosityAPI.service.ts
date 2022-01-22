import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
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

  // public getCuriosityAPIData(): Observable<CuriosityDataModel[]> {
  //   const url = `${this.API_BASE_URL}earth_date=2015-6-3${this.API_KEY_PARAMETER}`;
  //   return this.http.get<Array<any>>(url).pipe(
  //     tap(data => console.log(data)),
  //     tap(data => this.curiosityData$.next(data))
  //   ).subscribe();
  // }

  public getData(): Observable<CuriosityDataModel[]> {
    const url = `${this.API_BASE_URL}earth_date=2015-6-3${this.API_KEY_PARAMETER}`;
    return this.http.get<Array<PhotosModel>>(url)
    .pipe(
      map((data: any) => data.photos)
    );
  }

  // public getSelecterdCuriosityAPIData(id: number | string): void {
  //   const url = `${this.API_BASE_URL}/earth_date=2015-6-3${this.API_KEY_PARAMETER}`;
  //   this.http.get<CuriosityDataModel>(url).pipe(
  //     tap(recipe => this.selected$.next(recipe))
  //   ).subscribe();
  // }
}

