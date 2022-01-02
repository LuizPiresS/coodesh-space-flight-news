import { ArticlesService } from './articles/articles.service';
import { ArticlesController } from './articles/articles.controller';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { Article } from './articles/entities/article.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([Article]),
    ArticlesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [ArticlesController],
  providers: [AppService, ArticlesService],
})
export class AppModule {}
