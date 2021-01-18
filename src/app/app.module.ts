import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NexusMedicalCenterComponent } from './nexos-medical-center/nexos-medical-center.component';
import { PatientsFormComponent } from './nexos-medical-center/patients-form/patients-form.component';
import { DoctorsFormComponent } from './nexos-medical-center/doctors-form/doctors-form.component';
import { IgxComboModule } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    NexusMedicalCenterComponent,
    PatientsFormComponent,
    DoctorsFormComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    IgxComboModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
