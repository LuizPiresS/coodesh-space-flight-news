import { PopulateService } from './../populate/populate.service';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private populateService: PopulateService) {}
  @Cron(CronExpression.EVERY_DAY_AT_9AM)
  // @Cron(CronExpression.EVERY_10_MINUTES)
  handleCron() {
    this.logger.debug('Import articles');
    this.populateService.populateDatabase();
  }
}
