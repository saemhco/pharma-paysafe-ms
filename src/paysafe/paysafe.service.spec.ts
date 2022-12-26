import { Test, TestingModule } from '@nestjs/testing';
import { PaysafeService } from './paysafe.service';

describe('PaysafeService', () => {
  let service: PaysafeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaysafeService],
    }).compile();

    service = module.get<PaysafeService>(PaysafeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
