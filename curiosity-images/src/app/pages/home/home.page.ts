import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { Observable } from 'rxjs';
import { CuriosityAPIService } from 'src/app/services/curiosityAPI.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  public form!: FormGroup;
  selected!: string;
  doWeHaveImages: boolean = false;
  date = new FormControl(new Date());
  constructor(
    private curiosityAPIService: CuriosityAPIService, 
  ) { }

  public curiosityData$!: Observable<any[]>;

onSavePost() {
  console.log(this.selected)
  console.log(this.date.value);

  const newDate = this.date.value.toString().split(" ")
  const year = newDate[3];
  const month = new Date(Date.parse(newDate[1] +" 1, 2012")).getMonth()+1;
  const day = newDate[2];
  const fullDate = `${year}-${month}-${day}`
  console.log(fullDate);
  this.curiosityData$ = this.curiosityAPIService.getData(fullDate, this.selected).pipe(
    tap(data => console.log(data.length)),
    tap(data => this.doWeHaveImages = data.length ? true : false)

  );
    
}
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, { validators: [Validators.required] }),
      content: new FormControl(null, { validators: [Validators.required] }),
    });

    this.curiosityData$ = this.curiosityAPIService.getData().pipe(
      tap(data => console.log(data.length)),
      tap(data => this.doWeHaveImages = data.length ? true : false)
    );
  }
}
