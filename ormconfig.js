const ormconfig = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'capstone',
  synchronize: true,
  entities: ['./dist/database' + '/entity/**/*.entity.ts', './dist/database' + '/entity/**/*.entity.js'],
  migrations: ['./dist/database' + '/migration/**/*.ts', './dist/database' + '/migration/**/*.js'],
  cli: {
    entitiesDir: './dist/database/entity/*.{js,ts}',
    migrationsDir: './dist/database/migration/*.{js,ts}',
  },
};
module.exports = ormconfig;
