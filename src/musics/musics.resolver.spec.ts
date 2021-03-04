import { Test, TestingModule } from '@nestjs/testing';
import { MusicsResolver } from './musics.resolver';

describe('MusicsResolver', () => {
  let resolver: MusicsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicsResolver],
    }).compile();

    resolver = module.get<MusicsResolver>(MusicsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
