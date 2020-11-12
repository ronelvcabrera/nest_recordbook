import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repository } from 'typeorm';
import { PetOwner } from '../models/pet-owner.interface';
import { PetOwnerEntity } from '../models/pet_owner.entity';

@Injectable()
export class PetOwnerService {
    constructor(
        @InjectRepository(PetOwnerEntity) private readonly petOwnerRepository: Repository<PetOwnerEntity>
    ) {}
    findAll(params: Object): Observable<PetOwner[]> {
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          if (!params[key]) {
            delete params[key]
          }
        }
      }
      return from(
        this.petOwnerRepository.find({
          where: params
        })
      ).pipe(
        map((petOwner: PetOwner[]) => {
          return petOwner
        })
      );
    }
}
