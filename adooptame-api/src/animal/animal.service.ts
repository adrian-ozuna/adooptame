import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnimalService {
  constructor(private prisma: PrismaService) {}

  async createAnimal(dto) {
    try {
      const animal = await this.prisma.animal.create({
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
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new ForbiddenException('Animal already exists');
        }
      }
      throw e;
    }
  }

  async getAllAnimals() {
    const animals = await this.prisma.animal.findMany();

    if (!animals) {
      throw new ForbiddenException('Could not find animal.');
    }

    return animals;
  }

  async getAnimalById(id) {
    const animal = await this.prisma.animal.findUnique({
      where: {
        id: id,
      },
    });

    if (!animal) {
      throw new ForbiddenException('Could not find animal.');
    }

    return animal;
  }

  async getAnimalsBySpecies(species) {
    const animals = await this.prisma.animal.findMany({
      where: {
        species: species,
      },
    });

    if (!animals) {
      throw new ForbiddenException('Could not find animal.');
    }

    return animals;
  }

  async getAnimalsByShelter(shelter) {
    const animals = await this.prisma.animal.findMany({
      where: {
        shelterId: shelter.id,
      },
    });

    if (!animals) {
      throw new ForbiddenException('Could not find animal.');
    }

    return animals;
  }

  async updateAnimal(id, dto) {
    try {
      const animal = await this.prisma.animal.update({
        where: {
          id: id,
        },
        data: dto,
      });
  
      return animal;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException('Could not update animal.');
      }
      throw e;
    }
  }

  async deleteAnimal(id) {
    try {
      return await this.prisma.animal.delete({
        where: {
          id: id
        }
      });
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException('Could not delete animal.');
      }
      throw e;
    }
  }
}