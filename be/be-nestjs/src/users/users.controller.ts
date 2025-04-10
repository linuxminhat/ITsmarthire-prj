import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  //Tao usersService o day 
  // constructor(private readonly usersService: UsersService) { }
  constructor(private readonly usersService: UsersService) { }

  @Post('')
  create(@Body() createUserDto: CreateUserDto) {

    return this.usersService.create(createUserDto);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }


  @Patch()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

}