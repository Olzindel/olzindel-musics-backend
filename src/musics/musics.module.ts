import { Module } from '@nestjs/common';
import { MusicsService } from './musics.service';
import { MusicsResolver } from './musics.resolver';

@Module({
  providers: [MusicsService, MusicsResolver]
})
export class MusicsModule {}
