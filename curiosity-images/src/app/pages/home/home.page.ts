import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { Observable } from 'rxjs';
import { CuriosityAPIService } from 'src/app/services/curiosityAPI.service';
import { CuriosityDataModel } from 'src/shared/models/curiosityData.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  constructor(
    private curiosityAPIService: CuriosityAPIService
  ) { }

  public curiosityData$!: Observable<any[]>;

  ngOnInit(): void {
    this.curiosityData$ = this.curiosityAPIService.getData().pipe(
      tap(data => console.log(data))
    );
  }
}
