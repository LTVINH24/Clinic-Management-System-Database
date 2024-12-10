exports.up = async function(knex) {
    await knex.raw(`
        ALTER TABLE Prescription DROP CONSTRAINT FK_Prescription_MedicalRecord
        ALTER TABLE Prescription DROP COLUMN medicalRecordId
        ALTER TABLE Prescription ADD medicalExaminationFormId int
        ALTER TABLE Prescription ADD CONSTRAINT FK_Prescription_MedicalExaminationForm FOREIGN KEY(medicalExaminationFormId) REFERENCES MedicalExaminationForm(id)
        ALTER TABLE EndUser DROP COLUMN entropy

    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        ALTER TABLE Prescription ADD COLUMN medicalRecordId int
        ALTER TABLE Prescription ADD CONSTRAINT FK_Prescription_MedicalRecord FOREIGN KEY(medicalRecordId) REFERENCES MedicalRecord(id)
        ALTER TABLE Prescription DROP COLUMN medicalExaminationFormId 
        ALTER TABLE Prescription DROP CONSTRAINT FK_Prescription_MedicalExaminationForm
        ALTER TABLE EndUser ADD COLUMN entropy int
    `);
};