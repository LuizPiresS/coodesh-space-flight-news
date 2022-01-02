import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
  @ApiProperty()
  featured: boolean;

  @ApiProperty()
  title: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  newsSite: string;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  publishedAt: string;

  @ApiProperty()
  launches: [
    {
      id: string;
      provider: string;
    },
  ];
  @ApiProperty()
  events: [
    {
      id: string;
      provider: string;
    },
  ];
}
