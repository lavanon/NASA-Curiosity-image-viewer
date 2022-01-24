import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPage } from './pages/landing/landing.page';
import { HomePage } from './pages/home/home.page';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { RoverListComponent } from './components/rover-list/rover-list.component';
import { RoverListItemComponent } from './components/rover-list-item/rover-list-item.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    HomePage,
    RoverListItemComponent,
    RoverListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatInputModule, 
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
