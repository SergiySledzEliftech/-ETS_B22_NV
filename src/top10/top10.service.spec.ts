import { Test, TestingModule } from '@nestjs/testing';
import { Top10Service } from './top10.service';

describe('Top10Service', () => {
  let service: Top10Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Top10Service],
    }).compile();

    service = module.get<Top10Service>(Top10Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
