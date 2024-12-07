exports.up = async function(knex) {
    await knex.raw(`
        ALTER TABLE MedicalExaminationForm ADD visitType ntext
    `);
};
exports.down = async function(knex) {
    await knex.raw(`
        ALTER TABLE MedicalExaminationForm DROP COLUMN visitType
    `);
};