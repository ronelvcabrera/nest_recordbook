import {MigrationInterface, QueryRunner} from "typeorm";
import * as data from "../data/data.json";

export class InitPetOwners1605100539090 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        data.forEach(async (dat) => {
            await queryRunner.query(`
                INSERT INTO pet_owner(id, first_name, email, state, pet_experience)
                VALUES('${dat.id}', '${dat.first_name}', '${dat.email}', '${dat.state}', '${dat.pet_experience}')
            `);
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
