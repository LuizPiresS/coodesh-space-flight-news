import { Article } from 'src/articles/entities/article.entity';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TestingModule, Test } from '@nestjs/testing';

describe('ArticuleTes', () => {
  let controller: ArticlesController;
  let service: ArticlesService;
  let mockData;
  beforeEach(async () => {
    const mockService = {
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [
        {
          provide: ArticlesService,
          useFactory: () => mockService,
        },
      ],
    }).compile();

    controller = module.get<ArticlesController>(ArticlesController);
    service = module.get<ArticlesService>(ArticlesService);
    mockData = {
      title: 'Update: NASA Plans Coverage of Webb Space Telescope Deployments',
      url: 'http://www.nasa.gov/press-release/update-nasa-plans-coverage-of-webb-space-telescope-deployments',
      imageUrl:
        'https://www.nasa.gov/sites/default/files/thumbnails/image/48936479373_aedba34e60_o.jpg?itok=BsDzARwm',
      newsSite: 'NASA',
      summary:
        'Over about the next two weeks, NASA will provide broadcast coverage, media briefings, and other updates on major deployment milestones for the James Webb Space Telescope, the world’s largest and most powerful space science telescope.',
      publishedAt: '2021-12-30T22:36:00.000Z',
      updatedAt: '2021-12-31T08:24:25.838Z',
      featured: false,
      launches: [
        {
          id: 'd0fa4bb2-80ea-4808-af08-7785dde53bf6',
          provider: 'Launch Library 2',
        },
      ],
      events: [],
    } as unknown as Article;
  });
  test('should be defined', async () => {
    expect(controller).toBeDefined();
  });
});
