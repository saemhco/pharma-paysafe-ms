import { Test, TestingModule } from '@nestjs/testing';
import { PaysafeController } from './paysafe.controller';
import { PaysafeService } from './paysafe.service';

describe('PaysafeController', () => {
  let controller: PaysafeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaysafeController],
      providers: [PaysafeService],
    }).compile();

    controller = module.get<PaysafeController>(PaysafeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
