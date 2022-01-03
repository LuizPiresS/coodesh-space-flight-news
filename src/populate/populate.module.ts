import { ArticlesModule } from './../articles/articles.module';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PopulateService } from './populate.service';
import { PopulateController } from './populate.controller';

@Module({
  imports: [
    HttpModule.register({
      // timeout: 5000,
      maxRedirects: 5,
    }),
    ArticlesModule,
  ],
  exports: [PopulateService],
  providers: [PopulateService],
  controllers: [PopulateController],
})
export class PopulateModule {}
