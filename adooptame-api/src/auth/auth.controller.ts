import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserSigninDto, UserSignupDto } from './dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  
  @Post('user/signin')
  signinUser(@Body() dto: UserSigninDto) {
    return this.authService.signinUser(dto)
  }

  @Post('user/signup')
  signupUser(@Body() dto: UserSignupDto) {
    return this.authService.signupUser(dto);
  }
}