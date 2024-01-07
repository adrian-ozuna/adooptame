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
        shelterId: dto.shelterId,
      },
    });

    return animal;
  }

  async getAllAnimals() {
    return this.prisma.animal.findMany();
  }

  async getAnimalById(id) {
    return this.prisma.animal.findUnique({
      where: {
        id: id,
      },
    });
  }

  async getAnimalBySpecies(species) {
    return this.prisma.animal.findMany({
      where: {
        species: species,
      },
    });
  }

  async getAnimalsByShelter(shelter) {
    return this.prisma.animal.findMany({
      where: {
        shelterId: shelter.id,
      },
    });
  }

  async updateAnimal(id, dto) {
    return this.prisma.animal.update({
      where: {
        id: id,
      },
      data: dto,
    });
  }

  async deleteAnimal(id) {
    return this.prisma.animal.delete({
      where: {
        id: id
      }
    });
  }
}
