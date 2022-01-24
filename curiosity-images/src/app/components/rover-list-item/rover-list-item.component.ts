import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-rover-list-item',
    templateUrl: './rover-list-item.component.html',
    styleUrls: ['./rover-list-item.component.scss']
})
export class RoverListItemComponent implements OnInit {
    @Input() public rover: any | undefined;

    constructor() { }

    ngOnInit(): void {
    }
}
