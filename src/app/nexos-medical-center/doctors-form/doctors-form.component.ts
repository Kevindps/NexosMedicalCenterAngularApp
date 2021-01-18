import { NexosMedicalCenterDoctorService } from './../../shared/nexos-medical-center.service';
import { NexosMedicalCenterDoctor } from 'src/app/shared/nexos-medical-center.model';
import { NexosMedicalCenterPatientService } from './../../shared/nexos-medical-center.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IgxComboComponent } from 'igniteui-angular';

@Component({
  selector: 'app-doctors-form',
  templateUrl: './doctors-form.component.html',
  styles: []
})
export class DoctorsFormComponent implements OnInit {
  constructor(public service: NexosMedicalCenterDoctorService, public patientService: NexosMedicalCenterPatientService) { }

  ngOnInit():void {
    this.service.refreshList();
    this.patientService.refreshList();
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new NexosMedicalCenterDoctor();
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.doctorId == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  updateRecord(form: NgForm) {
    this.service.deleteDoctorRelationships(this.service.formData.doctorId).subscribe(
      res => {
        this.service.putDoctor().subscribe(
          res => {
            this.resetForm(form);
            this.service.refreshList();
          },
          err => {
            console.log(err);
          }
        )
      },
      err => {
        console.log(err);
      }
    )
  }

  insertRecord(form: NgForm) {
    this.service.postDoctor().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }
}
