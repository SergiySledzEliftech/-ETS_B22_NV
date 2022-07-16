import { Test, TestingModule } from '@nestjs/testing';
import { TestProductController } from './test-product.controller';

describe('TestProductController', () => {
  let controller: TestProductController;

  beforeEach(async () => {
	const module: TestingModule = await Test.createTestingModule({
		controllers: [TestProductController],
	}).compile();

	controller = module.get<TestProductController>(TestProductController);
  });

  it('should be defined', () => {
	expect(controller).toBeDefined();
  });
});
