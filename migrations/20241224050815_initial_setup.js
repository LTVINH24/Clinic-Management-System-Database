exports.up = async function(knex) {
    await knex.raw(`
        ALTER TABLE MedicalExaminationForm ADD isExaminated varchar(5) DEFAULT 'false';
        ALTER TABLE Prescription ADD nextExaminationDate DATE;

        ALTER TABLE Medicine ADD isDeleted varchar(5) DEFAULT 'false';
        ALTER TABLE EndUser ADD status varchar(6) DEFAULT 'active';
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