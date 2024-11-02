exports.up = async function (knex) {
  await knex.raw(`
        ALTER TABLE EndUser ADD gender nchar(10)
        ALTER TABLE Patient ADD gender nchar(10)
    `);
};

exports.down = async function (knex) {
  await knex.raw(`
        ALTER TABLE EndUser DROP COLUMN gender
        ALTER TABLE Patient DROP COLUMN gender
    `);
};
