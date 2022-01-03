import { TasksModule } from './tasks/tasks.module';
import { PopulateModule } from './populate/populate.module';
import { AppController } from './app.controller';
import { ArticlesService } from './articles/articles.service';
import { ArticlesController } from './articles/articles.controller';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { Article } from './articles/entities/article.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './tasks/tasks.service';
@Module({
  imports: [
    TasksModule,
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([Article]),
    ArticlesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PopulateModule,
  ],
  controllers: [ArticlesController, AppController],
  providers: [AppService, ArticlesService, TasksService],
  exports: [ArticlesService],
})
export class AppModule {}
