exports.up = async function(knex) {
    await knex.raw(`
        ALTER TABLE Doctor ADD CONSTRAINT FK_Doctor_EndUser FOREIGN KEY(userId) REFERENCES EndUser(Id)
        ALTER TABLE Doctor ADD CONSTRAINT FK_Doctor_Specialty FOREIGN KEY(specialtyId ) REFERENCES  Specialty(Id)
        ALTER TABLE MedicalExaminationForm ADD CONSTRAINT FK_MedicalExaminationForm_Patient  FOREIGN KEY(patientId) REFERENCES Patient(id)
        ALTER TABLE MedicalExaminationForm ADD CONSTRAINT FK_MedicalExaminationForm_EndUser FOREIGN KEY(staffId) REFERENCES EndUser(id)
        ALTER TABLE MedicalRecord ADD CONSTRAINT FK_MedicalRecord_EndUser FOREIGN KEY(doctorId) REFERENCES EndUser(id)
        ALTER TABLE MedicalRecord ADD CONSTRAINT FK_MedicalRecord_MedicalExaminationForm FOREIGN KEY(MedicalExaminationFormID) REFERENCES MedicalExaminationForm(id)
        ALTER TABLE Prescription ADD CONSTRAINT FK_Prescription_MedicalRecord FOREIGN KEY(medicalRecordId) REFERENCES MedicalRecord(id)
        ALTER TABLE Prescription ADD CONSTRAINT FK_Prescription_Medicine FOREIGN KEY(medicineId) REFERENCES Medicine(id)
        ALTER TABLE Bill ADD CONSTRAINT FK_Bill_Prescription FOREIGN KEY(prescriptionId) REFERENCES Prescription(id)
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        ALTER TABLE Doctor DROP CONSTRAINT FK_Doctor_EndUser 
        ALTER TABLE Doctor DROP CONSTRAINT FK_Doctor_Specialty 
        ALTER TABLE MedicalExaminationForm DROP CONSTRAINT FK_MedicalExaminationForm_Patient  
        ALTER TABLE MedicalExaminationForm DROP CONSTRAINT FK_MedicalExaminationForm_EndUser 
        ALTER TABLE MedicalRecord DROP CONSTRAINT FK_MedicalRecord_EndUser
        ALTER TABLE MedicalRecord DROP CONSTRAINT FK_MedicalRecord_MedicalExaminationForm
        ALTER TABLE Prescription DROP CONSTRAINT FK_Prescription_MedicalRecord 
        ALTER TABLE Prescription DROP CONSTRAINT FK_Prescription_Medicine 
        ALTER TABLE Bill DROP CONSTRAINT FK_Bill_Prescription
    `);
};