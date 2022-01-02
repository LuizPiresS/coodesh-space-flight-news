import { Article } from './entities/article.entity';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}
  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const logger = new Logger(Article.name);
    logger.log('Create new article');
    return await this.articleRepository.save(createArticleDto);
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<Article>> {
    const queryBuilder = this.articleRepository.createQueryBuilder('article');
    queryBuilder.select([
      'article.id',
      'article.featured',
      'article.title',
      'article.url',
      'article.imageUrl',
      'article.newsSite',
      'article.summary',
      'article.publishedAt',
      'article.launches',
      'article.events',
      // 'article.created_at',
      // 'article.updated_at',
    ]);

    queryBuilder.orderBy('article.id', 'ASC');

    return paginate<Article>(queryBuilder, options);
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
