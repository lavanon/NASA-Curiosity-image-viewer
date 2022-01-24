import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RoverListItemComponent } from './rover-list-item.component';

describe('RoverListItemComponent', () => {
    let component: RoverListItemComponent;
    let fixture: ComponentFixture<RoverListItemComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ RoverListItemComponent ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(RoverListItemComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
});
