import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NexosMedicalCenterDoctorService } from '../shared/nexos-medical-center.service';
import { NexosMedicalCenterDoctor } from '../shared/nexos-medical-center.model';
import { NexosMedicalCenterPatientService } from '../shared/nexos-medical-center.service';
import { NexosMedicalCenterPatient } from '../shared/nexos-medical-center.model';

@Component({
  selector: 'app-nexos-medical-center',
  templateUrl: './nexos-medical-center.component.html',
  styles: [
  ]
})
export class NexusMedicalCenterComponent implements OnInit {
  constructor(public doctorService: NexosMedicalCenterDoctorService, public patientService: NexosMedicalCenterPatientService) { }

  ngOnInit(): void {
    this.doctorService.refreshList();
    this.patientService.refreshList();
  }

  @ViewChild('doctorForm')
  doctorForm!: ElementRef;
  doctorsTableColumnHeight!: Number;

  @ViewChild('patientForm')
  patientForm!: ElementRef;
  patientsTableColumnHeight!: Number;

  ngAfterViewInit(): void {
    this.doctorsTableColumnHeight = this.doctorForm.nativeElement.offsetHeight;
    this.patientsTableColumnHeight = this.patientForm.nativeElement.offsetHeight;
  }

  populateDoctorForm(selectedRecord: NexosMedicalCenterDoctor) {
    this.doctorService.formData = Object.assign({}, selectedRecord);
  }

  populatePatientForm(selectedRecord: NexosMedicalCenterPatient) {
    this.patientService.formData = Object.assign({}, selectedRecord);
  }

  onDeleteDoctor(doctorId: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.doctorService.deleteDoctor(doctorId)
        .subscribe(res => {
          this.doctorService.refreshList();
        },
        err => { console.log(err); })
    }
  }

  onDeletePatient(patientId: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.patientService.deletePatient(patientId)
        .subscribe(res => {
          this.patientService.refreshList();
        },
        err => { console.log(err); })
    }
  }
}
