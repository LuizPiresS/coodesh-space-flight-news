import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  featured: boolean;

  title: string;

  url: string;

  imageUrl: string;

  @Column()
  newsSite: string;

  @Column()
  summary: string;

  @Column()
  publishedAt: string;

  @Column('json')
  launches: [
    {
      id: string;
      provider: string;
    },
  ];

  @Column('json')
  events: [
    {
      id: string;
      provider: string;
    },
  ];
}
