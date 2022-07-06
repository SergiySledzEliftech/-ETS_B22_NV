import { Test, TestingModule } from '@nestjs/testing';
import { TestProductService } from './test-product.service';

describe('TestProductService', () => {
  let service: TestProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestProductService],
    }).compile();

    service = module.get<TestProductService>(TestProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
