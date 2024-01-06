import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { UserUpdateDto } from './dto/user-update.dto';

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

  @Patch('edit')
  updateUser(@Req() req, @Body() dto: UserUpdateDto) {
    return this.userService.updateUser(req.user, dto);
  }

  @Delete('delete')
  deleteUser(@Req() req) {
    return this.userService.deleteUser(req.user);
  }

  @Get(':username')
  getUserByName(@Param('username') username: any) {
    console.log(username);
    return this.userService.getUserByUsername(username);
  }
}
