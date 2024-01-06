import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserSignupDto } from './dto/user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { dot } from 'node:test/reporters';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  getCurrentUser(@Req() req) {
    return this.userService.getCurrentUser(req.user);
  }

  @Get(':username')
  getUserByName(@Param('username') username: any) {
    console.log(username)
    return this.userService.getUserByUsername(username);
  }
}
