// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [AppModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule { }
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    // imports: [MongooseModule.forRoot('mongodb+srv://minhnhatdang2810:sdytrkRaJ0AReGca@cluster0.k737ddv.mongodb.net/'),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<String>("MONGO_URL"),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}