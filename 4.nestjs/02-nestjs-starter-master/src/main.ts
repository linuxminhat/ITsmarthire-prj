//Entry point cua NestJS
//Main.ts co vai tro la file khoi tao app NestJS
//NetFactory : la mot factory duoc cung cap boi NestJS tao ra instance ung dung nest
import { NestFactory } from '@nestjs/core';
//AppModule : la module goc cua ung dung 
import { AppModule } from './app.module';
//Ham boostrap la ham khoi chay app
async function bootstrap() {
  const app = await NestFactory.create(AppModule);//Tao ung dung NestJS tu AppModule
  await app.listen(3000);//app lang nghe tren cong 3000
}
bootstrap();
