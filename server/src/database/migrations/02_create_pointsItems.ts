import Knex from 'knex';

export async function up(knex: Knex){
    // CRIAR A TABELA
    return knex.schema.createTable('pointsItems', table => {
        table.increments('id').primary();
        table.integer('points_id').notNullable().references('id').inTable('colectPoints');
        table.integer('items_id').notNullable().references('id').inTable('items')
    });
}

export async function down(knex: Knex){
    // VOLTAR ATRAS (DELETAR A TABELA)
    knex.schema.dropTable('pointsItems');
}