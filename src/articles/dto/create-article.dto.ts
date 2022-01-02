import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
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
