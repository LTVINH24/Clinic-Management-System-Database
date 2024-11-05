exports.up = async function(knex) {
    await knex.raw(`
        ALTER TABLE Medicine ADD quantity int
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        ALTER TABLE Medicine DROP COLUMN quantity
    `);
};