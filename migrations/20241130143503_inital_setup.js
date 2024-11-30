exports.up = async function(knex) {
    await knex.raw(`
       ALTER TABLE EndUser ALTER COLUMN Role nvarchar(20)
       ALTER TABLE EndUser ALTER COLUMN Gender nvarchar(10)

    `);
};

exports.down = async function(knex) {
    await knex.raw(`
       ALTER TABLE EndUser ALTER COLUMN Role nchar(20)
       ALTER TABLE EndUser ALTER COLUMN Gender nchar(10)
    `);
};