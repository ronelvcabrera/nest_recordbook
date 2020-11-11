import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('pet_owner')
export class PetOwnerEntity {
    @PrimaryColumn('uuid') id: string;
    @Column('text') first_name: string;
    @Column('text') email: string;
    @Column('text') state: string;
    @Column('char') pet_experience: string;
}