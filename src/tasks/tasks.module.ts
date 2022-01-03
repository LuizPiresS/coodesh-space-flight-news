import { PopulateModule } from './../populate/populate.module';
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Module({
  imports: [PopulateModule],
  providers: [TasksService],
})
export class TasksModule {}
