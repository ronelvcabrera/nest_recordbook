import { Controller, Get, Query } from '@nestjs/common';
import { PetOwner } from '../models/pet-owner.interface';
import { PetOwnerService } from '../service/pet-owner.service';
import { Observable } from 'rxjs';

@Controller('pet-owner')
export class PetOwnerController {
    constructor(private readonly petOwnerService: PetOwnerService) {}
    
    @Get()
    getAll(
        @Query('first_name')first_name: string, 
        @Query('email')email: string,
        @Query('state')state: string,
        @Query('pet_experience')pet_experience: string
    ): Observable<PetOwner[]> {
        return this.petOwnerService.findAll({ first_name, email, state, pet_experience });
    }
}
