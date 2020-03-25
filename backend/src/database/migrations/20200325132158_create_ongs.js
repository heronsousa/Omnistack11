// Up cria tabela no banco de dados
exports.up = function(knex) {
    knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();   // Id como string pois será gerado pela própria aplicação
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('name').notNullable();
        table.string('uf', 2).notNullable();
    });
};

// Down trata erros que possam ocorrer
exports.down = function(knex) {
    knex.schema.dropTable('ongs');
};
