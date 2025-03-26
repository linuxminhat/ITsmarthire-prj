//Noi xu li cac yeu cau HTTP va tra ve cac phan hoi
//Chinh tai noi nay se dinh nghia cac route cua ung dung
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
