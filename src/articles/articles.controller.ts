import { Article } from './entities/article.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiQuery, ApiTags, ApiParam } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('/api/v1/articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiTags('coodesh')
  @ApiBody({ type: CreateArticleDto })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  @ApiTags('coodesh')
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<Pagination<Article>> {
    return await this.articlesService.findAll({ page, limit });
  }

  @ApiTags('coodesh')
  @ApiParam({ name: 'id', required: true, type: String })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @ApiTags('coodesh')
  @ApiBody({ type: UpdateArticleDto })
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @ApiTags('coodesh')
  @ApiParam({ name: 'id', required: true, type: String })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(id);
  }
}
