import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { SpeciesInterest } from '@prisma/client';
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
    const userPreference = await this.prisma.preference.findUnique({
      where: {
        userId: user.id
      }
    });

    if (!userPreference) {
      throw new ForbiddenException('User preferences not set.')
    }

    let animals = [];

    // Only show the species the user is interested in.
    if (userPreference.SpeciesInterest !== SpeciesInterest.all) {
      animals = await this.prisma.animal.findMany({
        where: {
          species: userPreference.SpeciesInterest
        }
      });
    } else {
      animals = await this.prisma.animal.findMany();
    }

    if (animals.length < 1) {
      throw new ForbiddenException("No animals available.");
    }

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

  async updateUser(user, dto) {
    const updateUser = await this.prisma.user.update({
      where: {
        id: user.id
      },
      data: dto
    });

    const { password, ...result } = updateUser;

    return result;
  }

  async deleteUser(user) {
    const deleteUser = await this.prisma.user.delete({
      where: {
        id: user.id
      }
    });

    return deleteUser;
  }
}
