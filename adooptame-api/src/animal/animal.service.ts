import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnimalService {
  constructor(private prisma: PrismaService) {}

  async create(dto) {
    const animal = this.prisma.animal.create({
      data: {
        name: dto.name,
        species: dto.species,
        breed: dto.breed,
        age: dto.age,
        gender: dto.gender,
        description: dto.description,
        size: dto.size,
        image_url: dto.image_url,
        arrival_date: dto.arrival_date,
        status: dto.status,
        shelterId: dto.shelterId
      }
    })

    return animal;
  }
}
