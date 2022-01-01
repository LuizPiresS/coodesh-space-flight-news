import { ArticleSchema } from './entities/article.entity';
import { Article } from './entities/article.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
