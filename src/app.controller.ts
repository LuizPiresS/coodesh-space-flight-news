import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  @ApiTags('coodesh')
  @Get()
  public welcomeMessage() {
    return 'Back-end Challenge 2021 🏅 - Space Flight News';
  }
}
