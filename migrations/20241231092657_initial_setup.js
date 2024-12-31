exports.up = async function(knex) {
    await knex.raw(`
        ALTER TABLE Prescription DROP COLUMN nextExaminationDate;
        ALTER TABLE MedicalRecord ADD nextExaminationDate date;
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        ALTER TABLE Prescription ADD nextExaminationDate date;
        ALTER TABLE MedicalRecord DROP COLUMN nextExaminationDate;
    `);
};

