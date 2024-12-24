exports.up = async function(knex) {
    await knex.raw(`
        ALTER TABLE MedicalExaminationForm ADD isExaminated nchar(5);
        ALTER TABLE Prescription ADD nextExaminationDate DATE;

        ALTER TABLE Medicine ADD isDeleted nchar(5);
        ALTER TABLE EndUser ADD status nchar(6);
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        ALTER TABLE MedicalExaminationForm DROP COLUMN isExaminated;
        ALTER TABLE Prescription DROP COLUMN nextExaminationDate;

        ALTER TABLE Medicine DROP COLUMN isDeleted;
        ALTER TABLE EndUser DROP COLUMN status;
    `);
};