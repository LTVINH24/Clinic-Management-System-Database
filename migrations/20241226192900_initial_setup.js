exports.up = async function(knex) {
    await knex.raw(`
       ALTER TABLE Patient ALTER COLUMN residentId nchar(12)
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
       ALTER TABLE Patient ALTER COLUMN residentId nchar(15)
    `);
};
