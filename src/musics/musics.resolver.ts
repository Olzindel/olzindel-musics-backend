import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MusicEntity } from './music.entity';
import { NotImplementedException } from '@nestjs/common';
import { MusicInput } from './Music.input';

@Resolver(() => MusicEntity)
export class MusicsResolver {
  @Query(() => MusicEntity, { name: 'music' })
  getMusic() {
    throw new NotImplementedException();
  }

  @Mutation(() => Boolean)
  async uploadFile(
    @Args({ name: 'musicFile' }) { file }: MusicInput,
  ): Promise<boolean> {
    throw new NotImplementedException();
  }
}
