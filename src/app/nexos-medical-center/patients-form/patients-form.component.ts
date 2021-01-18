import { NexosMedicalCenterPatientService } from './../../shared/nexos-medical-center.service';
import { NexosMedicalCenterDoctorService } from './../../shared/nexos-medical-center.service';
import { NexosMedicalCenterPatient } from 'src/app/shared/nexos-medical-center.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patients-form',
  templateUrl: './patients-form.component.html',
  styles: []
})
export class PatientsFormComponent implements OnInit {

  constructor(public service: NexosMedicalCenterPatientService, public doctorService: NexosMedicalCenterDoctorService) { }

  ngOnInit():void {
    this.service.refreshList();
    this.doctorService.refreshList();
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new NexosMedicalCenterPatient();
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.patientId == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  updateRecord(form: NgForm) {
    this.service.deletePatientRelationships(this.service.formData.patientId).subscribe(
      res => {
        this.service.putPatient().subscribe(
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
    this.service.postPatient().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }
}
