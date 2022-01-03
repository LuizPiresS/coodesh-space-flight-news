import { ArticlesService } from './../articles/articles.service';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
@Injectable()
export class PopulateService {
  logger = new Logger(PopulateService.name);
  constructor(
    private httpService: HttpService,
    private articleService: ArticlesService,
  ) {}
  async populateDatabase(): Promise<void> {
    try {
      const countArticles = this.httpService
        .get('https://api.spaceflightnewsapi.net/v3/articles/count')
        .toPromise();

      const totalArticles = (await countArticles).data;
      const requestArticles = this.httpService
        .get(
          `https://api.spaceflightnewsapi.net/v3/articles?_limit=${totalArticles}&_sort=id`,
        )
        .toPromise();

      const response: [] = (await requestArticles).data;
      response.map((article) => {
        this.articleService.create(article);
      });

      this.logger.log(`Successfully retrieved articles: ${totalArticles}`);
    } catch (error) {}
    this.logger.log(
      `An unexpected error occurred and the database could not be populated`,
    );
  }
}
