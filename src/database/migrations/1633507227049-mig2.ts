import {MigrationInterface, QueryRunner} from "typeorm";

export class mig21633507227049 implements MigrationInterface {
    name = 'mig21633507227049'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Discount\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`percentage\` int NOT NULL, \`dateStart\` datetime NOT NULL, \`dateEnd\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`image\` varchar(255) NOT NULL, \`category\` varchar(255) NOT NULL, \`discountId\` int NULL, \`shopId\` int NULL, UNIQUE INDEX \`REL_2e0ad0f12da92cbeeb97ee9953\` (\`discountId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Shop\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`location\` varchar(255) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`User\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`phoneNumber\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Bid\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`amount\` int NOT NULL, \`comment\` varchar(255) NOT NULL, \`bidderId\` int NULL, \`auctionId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Auction\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`image\` varchar(255) NOT NULL, \`category\` varchar(255) NOT NULL, \`dateStart\` varchar(255) NOT NULL, \`dateEnd\` varchar(255) NOT NULL, \`shopId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Product\` ADD CONSTRAINT \`FK_2e0ad0f12da92cbeeb97ee99533\` FOREIGN KEY (\`discountId\`) REFERENCES \`Discount\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Product\` ADD CONSTRAINT \`FK_40fcaeed4aa63549eeb179e82cf\` FOREIGN KEY (\`shopId\`) REFERENCES \`Shop\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Shop\` ADD CONSTRAINT \`FK_eb54f3890b6376579100ef14318\` FOREIGN KEY (\`userId\`) REFERENCES \`User\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Bid\` ADD CONSTRAINT \`FK_b1281d23b68d121f88d66acafa8\` FOREIGN KEY (\`bidderId\`) REFERENCES \`User\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Bid\` ADD CONSTRAINT \`FK_80ec15cf5f1739ea86b330d3651\` FOREIGN KEY (\`auctionId\`) REFERENCES \`Auction\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Auction\` ADD CONSTRAINT \`FK_68333a4dd38f3a534c68c6b0a17\` FOREIGN KEY (\`shopId\`) REFERENCES \`Shop\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Auction\` DROP FOREIGN KEY \`FK_68333a4dd38f3a534c68c6b0a17\``);
        await queryRunner.query(`ALTER TABLE \`Bid\` DROP FOREIGN KEY \`FK_80ec15cf5f1739ea86b330d3651\``);
        await queryRunner.query(`ALTER TABLE \`Bid\` DROP FOREIGN KEY \`FK_b1281d23b68d121f88d66acafa8\``);
        await queryRunner.query(`ALTER TABLE \`Shop\` DROP FOREIGN KEY \`FK_eb54f3890b6376579100ef14318\``);
        await queryRunner.query(`ALTER TABLE \`Product\` DROP FOREIGN KEY \`FK_40fcaeed4aa63549eeb179e82cf\``);
        await queryRunner.query(`ALTER TABLE \`Product\` DROP FOREIGN KEY \`FK_2e0ad0f12da92cbeeb97ee99533\``);
        await queryRunner.query(`DROP TABLE \`Auction\``);
        await queryRunner.query(`DROP TABLE \`Bid\``);
        await queryRunner.query(`DROP TABLE \`User\``);
        await queryRunner.query(`DROP TABLE \`Shop\``);
        await queryRunner.query(`DROP INDEX \`REL_2e0ad0f12da92cbeeb97ee9953\` ON \`Product\``);
        await queryRunner.query(`DROP TABLE \`Product\``);
        await queryRunner.query(`DROP TABLE \`Discount\``);
    }

}
