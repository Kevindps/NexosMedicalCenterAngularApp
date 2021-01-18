import { NexosMedicalCenterDoctor } from './nexos-medical-center.model';
import { NexosMedicalCenterPatient } from './nexos-medical-center.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NexosMedicalCenterDoctorService {
  formData : NexosMedicalCenterDoctor = new NexosMedicalCenterDoctor();
  readonly baseURL = 'http://localhost:51467/api/NexosMedicalCenterDoctors';
  list: NexosMedicalCenterDoctor[] = [];

  constructor(private http: HttpClient) { }

  postDoctor() {
    this.formData.doctorPatients = [];
    return this.http.post(this.baseURL, this.formData);
  }

  putDoctor() {
    return this.http.put(`${this.baseURL}/${this.formData.doctorId}`, this.formData);
  }

  deleteDoctor(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  deleteDoctorRelationships(id: number) {
    return this.http.delete(`${this.baseURL}/DeleteRelationships/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as NexosMedicalCenterDoctor[]);
  }
}

@Injectable({
  providedIn: 'root'
})
export class NexosMedicalCenterPatientService {
  formData: NexosMedicalCenterPatient = new NexosMedicalCenterPatient();
  readonly baseURL = 'http://localhost:51467/api/NexosMedicalCenterPatients';
  list: NexosMedicalCenterPatient[] = [];

  constructor(private http: HttpClient) { }

  postPatient() {
    this.formData.patientDoctors = [];
    return this.http.post(this.baseURL, this.formData);
  }

  putPatient() {
    return this.http.put(`${this.baseURL}/${this.formData.patientId}`, this.formData);
  }

  deletePatient(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  deletePatientRelationships(id: number) {
    return this.http.delete(`${this.baseURL}/DeleteRelationships/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as NexosMedicalCenterPatient[]);
  }
}
