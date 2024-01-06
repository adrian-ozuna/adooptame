import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  getCurrentUser(@Req() req) {
    return this.userService.getCurrentUser(req.user);
  }

  @Get('match')
  getMatches(@Req() req) {
    return this.userService.getMatches(req.user);
  }

  @Get(':username')
  getUserByName(@Param('username') username: any) {
    console.log(username);
    return this.userService.getUserByUsername(username);
  }
}
