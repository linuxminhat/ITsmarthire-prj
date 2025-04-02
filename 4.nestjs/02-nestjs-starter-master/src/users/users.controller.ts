import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')// => /users

export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('')// empty POST: create a new data
  create(
    @Body("email") email: string, //const email : string  = req.body.email
    @Body("password") password: string,
    @Body("name") name: string,

  ) {
    return this.usersService.create(email, password, name);
    // return this.usersService.create(createUserDto);
    //const myEmail : string = req.body.email //string
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
