import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddcarComponent } from './admin/addcar/addcar.component';
import { AddvehicleComponent } from './owner/addvehicle/addvehicle.component';
import { FillDetailsComponent } from './owner/fill-details/fill-details.component';
import { CheckoptionsComponent } from './users/checkoptions/checkoptions.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuardAdminSevice } from './auth-guard-admin.service';
import { AuthGuardSevice } from './auth-guard.service';
import { ChoiceComponent } from './choice/choice.component';
import { BookingsComponent } from './booking/bookings/bookings.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'addcar',component:AddcarComponent,canActivate:[AuthGuardAdminSevice]},
  {path:'addcardetails',component:AddvehicleComponent,canActivate:[AuthGuardSevice]},
  {path:'filldetails',component:FillDetailsComponent,canActivate:[AuthGuardSevice]},
  {path:'users',component:CheckoptionsComponent,canActivate:[AuthGuardSevice]},
  {path:'register',component:RegistrationComponent},
  {path:'choice',component:ChoiceComponent,canActivate:[AuthGuardSevice]},
  {path:'bookings',component:BookingsComponent,canActivate:[AuthGuardAdminSevice]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
