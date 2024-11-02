exports.up = async function (knex) {
  await knex.raw(`
          ALTER TABLE MedicalExaminationForm ADD doctorId int
          ALTER TABLE MedicalExaminationForm ADD CONSTRAINT FK_MedicalExaminationForm_Doctor FOREIGN KEY(doctorId) REFERENCES EndUser(id)
      `);
};

exports.down = async function (knex) {
  await knex.raw(`
          ALTER TABLE MedicalExaminationForm DROP COLUMN doctorId
          ALTER TABLE MedicalExaminationForm DROP CONSTRAINT FK_MedicalExaminationForm_Doctor
      `);
};
