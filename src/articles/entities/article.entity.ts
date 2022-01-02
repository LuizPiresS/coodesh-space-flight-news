import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  featured: boolean;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
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
