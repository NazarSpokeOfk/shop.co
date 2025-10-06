import { Controller, Post, Body } from '@nestjs/common';
import { Login } from 'DTO/user.login.dto';
import { Register } from 'DTO/user.register.dto';
import { UsersService } from 'services/user.service';

import { sendResponseUtility } from 'utils/sendResponseUtility';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Post('register')
  async register(@Body() register: Register) {
    const {email,password,name} = register;
    try {
        const user = await this.UsersService.register({email,password,name});
        return sendResponseUtility(user,null)
    } catch (error) {
        return sendResponseUtility(null,error)
    }
  }

  @Post('login')
  async login(@Body() login : Login) {
    const {email,password} = login
    try {
        const user = await this.UsersService.login({email,password})
        return sendResponseUtility(user,null);
    } catch (error) {
        return sendResponseUtility(null,error)
    }
  }
}
