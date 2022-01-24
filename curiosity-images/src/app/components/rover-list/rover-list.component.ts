import { Component, Input, OnInit } from '@angular/core';
import { CuriosityDataModel } from 'src/shared/models/curiosityData.model';

@Component({
    selector: 'app-rover-list',
    templateUrl: './rover-list.component.html',
    styleUrls: ['./rover-list.component.scss']
})
export class RoverListComponent implements OnInit {
    @Input() public rovers: Array<CuriosityDataModel> | undefined;
    @Input() public doWeHaveImages: boolean | undefined;
    
    constructor() { }

    ngOnInit(): void {
    }
}
