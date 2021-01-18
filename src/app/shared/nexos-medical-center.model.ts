export class NexosMedicalCenterDoctor {
  doctorId: number=0;
  doctorFullName: string='';
  doctorCredentialNumber: string='';
  doctorSpecialty: string='';
  doctorHospital: string='';
  doctorPatients: NexosMedicalCenterPatient[] = [];
}

export class NexosMedicalCenterPatient {
  patientId: number=0;
  patientFullName: string='';
  patientSocialSecurityNumber: string='';
  patientPostalCode: string='';
  patientContactNumber: string='';
  patientDoctors: NexosMedicalCenterDoctor[] = [];
}
