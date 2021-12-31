import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesService {
  welcomeMessage(): string {
    return 'Back-end Challenge 2021 🏅 - Space Flight News';
  }
}
