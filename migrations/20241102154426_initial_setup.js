exports.up = async function (knex) {
    await knex.raw(`
            ALTER TABLE EndUser ADD entropy ntext
            ALTER TABLE EndUser ALTER COLUMN password ntext
        `);
  };
  
  exports.down = async function (knex) {
    await knex.raw(`
            ALTER TABLE EndUser DROP COLUMN entropy
            ALTER TABLE EndUser ALTER COLUMN password nchar(100)
        `);
  };
  