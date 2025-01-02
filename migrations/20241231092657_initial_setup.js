exports.up = async function(knex) {
    await knex.raw(`
        ALTER TABLE Prescription ADD isBilled varchar(5) DEFAULT 'false';
        ALTER TABLE Patient ALTER COLUMN gender varchar(6);
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        ALTER TABLE Prescription DROP COLUMN isBilled;
        ALTER TABLE Patient ALTER COLUMN gender nchar(10);
    `);
};

