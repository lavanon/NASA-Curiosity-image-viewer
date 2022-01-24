import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Observable } from 'rxjs';
import { CuriosityAPIService } from 'src/app/services/curiosityAPI.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
    public cameraSelected!: string;
    public date = new FormControl(new Date());

    public doWeHaveImages: boolean = false;

    public curiosityData$!: Observable<any[]>;

    constructor(
        private curiosityAPIService: CuriosityAPIService, 
    ) { }

    ngOnInit(): void {
        this.curiosityData$ = this.curiosityAPIService.getData().pipe(
            tap(data => this.doWeHaveImages = data.length ? true : false)
        );
    }

    public searchImages() {
        this.curiosityData$ = this.curiosityAPIService.getData(this._trasformDate(), this.cameraSelected).pipe(
            tap(data => this.doWeHaveImages = data.length ? true : false)
        );
    }

    private _trasformDate() {
        // this.date looks like => Sat Jul 03 2021 00:00:00 GMT+0100 (Western European Summer Time)
        const newDate = this.date.value.toString().split(" ")
        const year = newDate[3];
        const month = new Date(Date.parse(newDate[1] +" 1, 2012")).getMonth()+1;
        const day = newDate[2];
        return`${year}-${month}-${day}`
    }
}
