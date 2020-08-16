exports.up = function (knex) {
    
    return knex.schema.createTable("projects", (tbl) => {
    tbl.increments();   
    tbl.string("title", 255).notNullable().unique();
    tbl.string("description", 510).notNullable();
    tbl.string("bullets").notNullable();
    tbl.string("img", 255).notNullable().unique();
    tbl.string("url", 255).notNullable();
    tbl.string("git", 255).notNullable();
    tbl.boolean("hide").notNullable().default(false);
  })
};

exports.down = function (knex) {
  // undo the operation in up
  return knex.schema.dropTableIfExists("projects");
};
