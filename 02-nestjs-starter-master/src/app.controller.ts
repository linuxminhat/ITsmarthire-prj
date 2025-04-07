
// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) { }

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
// import { Get, Controller, Render } from '@nestjs/common';
// @Controller()
// export class AppController {
//   @Get()
//   @Render('views')
//   root() {
//     return { message: 'Hello World!' };
//   }
// }
import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
@Controller()
export class AppController {
  //port from .env

  constructor(private readonly appService: AppService, private configService: ConfigService) { }
  @Get()
  @Render('views')
  root() {
    console.log(">>check port=", this.configService.get<string>('PORT'));
    console.log(">>port", this.configService.get<String>('PORT'));

    return { message: "Hello Worlds" };
  }
}