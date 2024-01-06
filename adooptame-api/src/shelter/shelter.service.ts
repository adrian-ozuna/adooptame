import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShelterService {
  constructor(private prisma: PrismaService) {}
  async createShelter(dto) {
    try {
      const shelter = await this.prisma.shelter.create({
        data: {
          name: dto.name,
          address: dto.name,
          city: dto.city,
          email: dto.email,
          zipcode: dto.zipcode,
          website: dto.website,
          description: dto.description,
          tel: dto.tel
        }
      })
  
      return shelter;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new ForbiddenException('Shelter already exists.');
        }
      }
      throw e;
    }

  }

  async getAllShelters() {
    const shelters = await this.prisma.shelter.findMany();

    if (!shelters) {
      throw new NotFoundException('No shelters found.');
    }

    return shelters;
  }

  async getShelterById(id) {
    const shelter = await this.prisma.shelter.findUnique({
      where: {
        id: id
      }
    });

    if (!shelter) {
      throw new NotFoundException('No shelter found.');
    }

    return shelter;
  }

  async updateShelterById(id, dto) {
    try {
      const updateShelter = this.prisma.shelter.update({
        where: {
          id: id
        },
        data: dto
      });
  
      return updateShelter;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new ForbiddenException('Shelter already exists.');
        }
      }
      throw e;
    }
  }

  async deleteShelter(id) {
    const deleteShelter = this.prisma.shelter.delete({
      where: {
        id: id
      }
    });

    return deleteShelter;
  }
}
