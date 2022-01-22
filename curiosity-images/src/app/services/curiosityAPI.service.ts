import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CuriosityDataModel } from 'src/shared/models/curiosityData.model';

@Injectable({
  providedIn: 'root'
})
export class CuriosityAPIService {
  public curiosityData$ = new BehaviorSubject<Array<CuriosityDataModel>>(undefined);
  public selected$ = new BehaviorSubject<CuriosityDataModel>(undefined);
  private readonly API_BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
  private readonly API_KEY_PARAMETER = "&api_key=SJtLy0wNppl58fwcHcMcFKo9i4tkASgJlgLSmXkJ"

  constructor(
    private http: HttpClient
  ) { }

  public getCuriosityAPIData(): void {
    const url = `${this.API_BASE_URL}?earth_date=2015-6-3${this.API_KEY_PARAMETER}`;
    this.http.get<Array<CuriosityDataModel>>(url).pipe(
      tap(data => this.curiosityData$.next(data))
    ).subscribe();
  }

  public getSelecterdCuriosityAPIData(id: number | string): void {
    const url = `${this.API_BASE_URL}/earth_date=2015-6-3${this.API_KEY_PARAMETER}`;
    this.http.get<CuriosityDataModel>(url).pipe(
      tap(recipe => this.selected$.next(recipe))
    ).subscribe();
  }
}
https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY

