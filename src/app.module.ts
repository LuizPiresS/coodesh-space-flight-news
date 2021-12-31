import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticlesController } from './articles/articles.controller';
import { ArticlesService } from './articles/articles.service';

@Module({
  imports: [],
  controllers: [ArticlesController],
  providers: [AppService, ArticlesService],
})
export class AppModule {}
