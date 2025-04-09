import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './shemas/user.shema';
import mongoose, { Model } from 'mongoose';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  hashPassword = (password: string) => {

    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;

  }
  async create(createUserDto: CreateUserDto) {
    const hashPassword = this.hashPassword(createUserDto.password);
    let newUser = await this.userModel.create({
      email: createUserDto.email,
      password: hashPassword,
      name: createUserDto.name,
    })
    return newUser;

  }

  findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return "Not found a user !"
    }
    return this.userModel.findById(id);
  }


  //SignIn SignUp by Email
  findOneByUserName(username: string) {
    return this.userModel.findOne({
      email: username
    })
  }

  isValidPassword(password: string, hash: string) {
    return compareSync(password, hash);
  }
  async update(updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne({ _id: updateUserDto._id }, { ...updateUserDto });

  }
  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

}
