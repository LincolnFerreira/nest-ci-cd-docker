import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.getUserData(); // Chama o método do UserService
  }

  @Post()
  async createUser(@Body() createUserDto: any) {
    return this.userService.createUser(createUserDto); // Chama o método do UserService
  }
}
