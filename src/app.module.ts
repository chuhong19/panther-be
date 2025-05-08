import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteModule } from './note/note.module';
import { PingController } from './ping/ping.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>(
          'MONGO_URI',
          'mongodb://localhost:27017/panther',
        ),
      }),
      inject: [ConfigService],
    }),
    NoteModule,
  ],
  controllers: [PingController],
})
export class AppModule {}
