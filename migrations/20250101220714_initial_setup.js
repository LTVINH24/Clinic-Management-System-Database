exports.up = async function(knex) {
    await knex.raw(`
        ALTER TABLE Bill ADD isGetMedicine varchar(5);
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        ALTER TABLE Bill DROP COLUMN isGetMedicine;
    `);
};

