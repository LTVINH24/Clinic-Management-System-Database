exports.up = async function(knex) {
    await knex.raw(`
        ALTER TABLE Doctor ADD room nchar(20)
        ALTER TABLE Patient ADD residentId nchar(15)
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        ALTER TABLE Doctor DROP COLUMN room
        ALTER TABLE Patient DROP COLUMN residentId
    `);
};