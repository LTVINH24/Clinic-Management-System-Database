exports.up = async function(knex) {
    await knex.raw(`
       ALTER TABLE PrescriptionDetail ALTER COLUMN dosage nvarchar(200)
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
       ALTER TABLE PrescriptionDetail ALTER COLUMN dosage int
    `);
};
