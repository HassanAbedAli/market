const ormconfig = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'capstone',
  synchronize: false,
  entities: ['./dist/database' + '/entity/**/*.entity.js', './dist/database' + '/entity/**/*.entity.ts'],
  migrations: ['./dist/database' + '/migrations/**/*.js', './dist/database' + '/migrations/**/*.ts'],
  cli: {
    entitiesDir: './dist/database/entity/*.{js,ts}',
    migrationsDir: './dist/database/migrations/*.{js,ts}',
  },
};
module.exports = ormconfig;
