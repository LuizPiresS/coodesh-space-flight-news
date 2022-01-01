import { ArticlesService } from './articles/articles.service';
import { ArticlesController } from './articles/articles.controller';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';
import { ConfigModule } from '@nestjs/config';
import { Article, ArticleSchema } from './articles/entities/article.entity';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
    ArticlesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB),
  ],
  controllers: [ArticlesController],
  providers: [AppService, ArticlesService],
})
export class AppModule {}
