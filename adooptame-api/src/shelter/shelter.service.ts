import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShelterService {
  constructor(private prisma: PrismaService) {}
  async create(dto) {
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
  }
}
