import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetOwnerController } from './controller/pet-owner.controller';
import { PetOwnerEntity } from './models/pet_owner.entity';
import { PetOwnerService } from './service/pet-owner.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PetOwnerEntity])
  ],
  providers: [PetOwnerService],
  controllers: [PetOwnerController]
})
export class PetOwnerModule {}
