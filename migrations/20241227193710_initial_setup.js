exports.up = async function(knex) {
    await knex.raw(`
       ALTER TABLE Bill ALTER COLUMN CreateDate datetime
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
       ALTER TABLE Bill ALTER COLUMN CreateDate date
    `);
};

