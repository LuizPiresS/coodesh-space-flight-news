import { Controller, Get } from '@nestjs/common';
import { PopulateService } from './populate.service';

@Controller('api/v1/populate')
export class PopulateController {
  constructor(private readonly populateService: PopulateService) {}

  @Get()
  async populate() {
    return await JSON.stringify(await this.populateService.populateDatabase());
  }
}
