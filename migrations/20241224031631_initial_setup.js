exports.up = async function(knex) {
    await knex.raw(`
        ALTER TABLE Bill ADD CreateDate DATE;
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        ALTER TABLE Bill DROP COLUMN CreateDate;
    `);
};