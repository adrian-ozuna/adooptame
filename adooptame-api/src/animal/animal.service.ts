import { Injectable, NotFoundException } from '@nestjs/common';
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
        status: dto.status,
        shelterId: dto.shelterId
      }
    })

    return animal;
  }

  async getSelection(dto) {
    const { userId } = dto;
    const animals = await this.prisma.animal.findMany();
    const animalMatches = []
    
    const userTraits = await this.prisma.trait.findMany({
      where: {
        userId: userId
      }
    })

    if (!userTraits) {
      throw new NotFoundException(`User traits with the provided parameters were not found.`)
    }
    
    for (const animal of animals) {
      let matchingTraits = [];

      const animalTraits = await this.prisma.trait.findMany({
        where: {
          animalId: animal.id
        }
      })

      if (!animalTraits) {
        throw new NotFoundException(`Animal traits with the provided parameters were not found.`)
      }

      for (const userTrait of userTraits) {
        const isMatching = animalTraits.some(animalTrait => animalTrait.id === userTrait.id);
        if (isMatching) {
          matchingTraits.push(userTrait);
        }
      }

      let matchPercentage = (matchingTraits.length / userTraits.length) * 100;

      if (matchPercentage >= 50) {
        animalMatches.push(animal)
      }
    }

    return animalMatches;
  }
}
