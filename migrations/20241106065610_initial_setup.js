exports.up = async function(knex) {
    await knex.raw(`
       ALTER TABLE MedicalExaminationForm ALTER COLUMN time datetime
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
       ALTER TABLE MedicalExaminationForm ALTER COLUMN time date
    `);
};