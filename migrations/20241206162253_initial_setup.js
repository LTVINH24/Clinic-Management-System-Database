exports.up = async function(knex) {
    await knex.raw(`
        ALTER TABLE MedicalRecord DROP CONSTRAINT FK_MedicalRecord_MedicalExaminationForm 
        ALTER TABLE MedicalRecord ADD patientId int
        ALTER TABLE MedicalRecord ADD CONSTRAINT FK_MedicalRecord_Patient FOREIGN KEY(patientId) REFERENCES Patient(id)


    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        ALTER TABLE MedicalRecord ADD CONSTRAINT FK_MedicalRecord_MedicalExaminationForm FOREIGN KEY(MedicalExaminationFormID) REFERENCES MedicalExaminationForm(id)
        ALTER TABLE MedicalRecord DROP COLUMN patientId 
        ALTER TABLE MedicalRecord DROP CONSTRAINT FK_MedicalRecord_Patient 
    `);
};