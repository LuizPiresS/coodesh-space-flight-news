import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticlesService],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('welcomeMessage', () => {
    it('should returns welcome message', async () => {
      expect(service.welcomeMessage()).toBe(
        'Back-end Challenge 2021 🏅 - Space Flight News',
      );
    });
  });
});
