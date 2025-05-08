import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class PingController {
  @Get('ping')
  getPing() {
    return { message: 'pong' };
  }
}
