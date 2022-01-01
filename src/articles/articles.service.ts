import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Model } from 'mongoose';
import { Article, ArticleDocument } from './entities/article.entity';
@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name)
    private articleModel: Model<ArticleDocument>,
  ) {}
  create(createArticleDto: CreateArticleDto) {
    const article = new this.articleModel(createArticleDto);
    return article.save();
  }

  findAll() {
    return `This action returns all articles`;
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
