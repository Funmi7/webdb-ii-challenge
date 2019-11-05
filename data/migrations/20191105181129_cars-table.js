
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        table.increments('id');
        table.integer('VIN').unique().notNullable();
        table.text('make', 128).notNullable();
        table.text('model', 128).notNullable();
        table.integer('mileage').notNullable();
        table.text('transmissiontype', 128);
        table.text('title', 128);
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
