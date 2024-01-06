import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getCurrentUser(user) {
    return user;
  }

  async getUserByUsername(username) {
    const findUser = await this.prisma.user.findUnique({
      where: {
        username: username,
      }
    });

    if (!findUser) {
      throw new ForbiddenException('Provided user could not be found.');
    }

    const { password, ...user } = findUser;

    return user;
  }

  async getMatches(user) {
    const animals = await this.prisma.animal.findMany();
    const animalMatches = [];
    
    const userTraits = await this.prisma.trait.findMany({
      where: {
        Users: {
          some: {
            id: user.id
          }
        }
      }
    });

    if (!userTraits) {
      throw new NotFoundException(`User traits with the provided parameters were not found.`)
    }
    
    for (const animal of animals) {
      let matchingTraits = [];

      const animalTraits = await this.prisma.trait.findMany({
        where: {
          Animals: {
            some: {
              id: animal.id
            }
          }
        }
      });

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
