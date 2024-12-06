exports.up = async function(knex) {
    await knex.raw(`
        ALTER TABLE Medicine ADD ExpDate date
        ALTER TABLE Medicine ADD MfgDate date

    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        ALTER TABLE Medicine DROP COLUMN ExpDate
        ALTER TABLE Medicine DROP COLUMN MfgDate

    `);
};