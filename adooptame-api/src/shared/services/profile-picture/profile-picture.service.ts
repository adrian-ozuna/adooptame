import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfilePictureService {
  generateProfilePicture(name = 'Anonymous'): string {
    const formattedName = name.split(' ').join('+');
    return `https://ui-avatars.com/api/?name=${formattedName}`.toString();
  }
}
