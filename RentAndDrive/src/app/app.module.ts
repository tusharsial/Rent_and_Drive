import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddcarComponent } from './admin/addcar/addcar.component';
import { EditbookingComponent } from './admin/editbooking/editbooking.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddvehicleComponent } from './owner/addvehicle/addvehicle.component';
import { FillDetailsComponent } from './owner/fill-details/fill-details.component';
import { CheckoptionsComponent } from './users/checkoptions/checkoptions.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { ChoiceComponent } from './choice/choice.component';
import { BookingsComponent } from './booking/bookings/bookings.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDateRangeInput } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MatDialogModule } from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import { DateRangeDialogComponent } from './date-range-dialog/date-range-dialog.component';


@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    AddcarComponent,
    EditbookingComponent,
    AddvehicleComponent,
    FillDetailsComponent,
    CheckoptionsComponent,
    RegistrationComponent,
    HeaderComponent,
    ChoiceComponent,
    BookingsComponent,
    DateRangeDialogComponent
  ],
  imports: [
    
    MatDatepickerModule, MatInputModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    HttpClientModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    MatDialogModule,
    BrowserAnimationsModule,
    OverlayModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
