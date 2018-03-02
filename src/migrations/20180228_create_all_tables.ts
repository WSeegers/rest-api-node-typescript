import * as knex from 'knex';

export const up = async (db: knex): Promise<any> => {
  await Promise.resolve(db.schema.createTable('users', (table: knex.CreateTableBuilder) => {
    table.increments('id').primary();
    table.string('firstname').nullable();
    table.string('lastname').nullable();
    table.text('bio').nullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.dateTime('createdAt').nullable();
    table.dateTime('updatedAt').nullable();
    table.dateTime('deletedAt').nullable();
  }));

  await Promise.resolve(db.schema.createTable('posts', (table: knex.CreateTableBuilder) => {
    table.increments('id').primary();
    table.integer('userId').unsigned();
    table.string('title').nullable();
    table.text('body').nullable();
    table.dateTime('createdAt').nullable();
    table.dateTime('updatedAt').nullable();
    table.dateTime('deletedAt').nullable();
    table.foreign('userId').references('users.id');
  })); 

  await Promise.resolve(db.schema.createTable('comments', (table: knex.CreateTableBuilder) => {
    table.increments('id').primary();
    table.integer('userId').unsigned();
    table.integer('postId').unsigned();
    table.text('body').nullable();
    table.dateTime('createdAt').nullable();
    table.dateTime('updatedAt').nullable();
    table.dateTime('deletedAt').nullable();
    table.foreign('postId').references('posts.id');
    table.foreign('userId').references('users.id');
  }));

  await Promise.resolve(db.schema.createTable('roles', (table: knex.CreateTableBuilder) => {
    table.increments('id').primary();
    table.string('name').nullable();
    table.text('description').nullable();
    table.dateTime('createdAt').nullable();
    table.dateTime('updatedAt').nullable();
    table.dateTime('deletedAt').nullable();
  }));

  await Promise.resolve(db.schema.createTable('user_role', (table: knex.CreateTableBuilder) => {
    table.increments('id').primary();
    table.integer('userId').references('users.id');
    table.integer('roleId').references('roles.id');
  }));

  await Promise.resolve(db.schema.createTable('permissions', (table: knex.CreateTableBuilder) => {
    table.increments('id').primary();
    table.string('name').nullable();
    table.string('label').nullable();
    table.text('description').nullable();
    table.dateTime('createdAt').nullable();
    table.dateTime('updatedAt').nullable();
    table.dateTime('deletedAt').nullable();
  }));

  await Promise.resolve(db.schema.createTable('role_permission', (table: knex.CreateTableBuilder) => {
    table.increments('id').primary();
    table.integer('roleId').references('roles.id');
    table.integer('permissionId').references('permissions.id');
  }));

  await Promise.resolve(db.schema.createTable('reset_password_tokens', (table: knex.CreateTableBuilder) => {
    table.increments('id').primary();
    table.integer('userId').unsigned();
    table.string('token').nullable();
    table.dateTime('createdAt').nullable();
    table.dateTime('updatedAt').nullable();
    table.dateTime('deletedAt').nullable();
    table.foreign('userId').references('users.id');
  }));

};

export const down = async (db: knex): Promise<any> => {
  const rollback = db.schema
    .raw('SET FOREIGN_KEY_CHECKS=0;')
    .dropTable('users')
    .dropTable('posts')
    .dropTable('comments')
    .dropTable('roles')
    .dropTable('user_role')
    .dropTable('permissions')
    .dropTable('role_permission')
    .dropTable('reset_password_tokens')
    .raw('SET FOREIGN_KEY_CHECKS=1;');
  await Promise.resolve(rollback);
};