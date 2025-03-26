//Chua nghiep vu business logic 
import { Injectable } from '@nestjs/common';

@Injectable()//Danh dau lop nay la 1 service co the inject vao cac thanh phan khac 
export class AppService {
  getHello(): string {
    return 'Hello World! & Dang Nhat Minh';
  }
}