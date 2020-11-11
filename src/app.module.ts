import 'dotenv/config';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm'
import { PetOwnerModule } from './pet-owner/pet-owner.module';

import { PetOwnerController } from './pet-owner/controller/pet-owner.controller';
import { PetOwnerService } from './pet-owner/service/pet-owner.service';

const dbPort = parseInt(process.env.DB_PORT) || 5432;
const host = process.env.DB_HOST
const dbname = process.env.DB_NAME
const dbuser = process.env.DB_USER
const dbpassword = process.env.DB_PASSWORD

@Module({
  imports: [
    PetOwnerModule,
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": host,
      "port": dbPort,
      "username": dbuser,
      "password": dbpassword,
      "database": dbname,
      "synchronize": true,
      "logging": true,
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "migrationsTableName": "custom_migration_table",
      "migrations": ["dist/migrations/*.js"],
      "cli": {
        "migrationsDir": "src/migrations"
      },
      "migrationsRun": true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
