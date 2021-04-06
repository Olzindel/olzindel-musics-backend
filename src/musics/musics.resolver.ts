import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MusicEntity } from './music.entity';
import { GraphQLUpload } from 'apollo-server-express';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { MusicsService } from './musics.service';
import { Inject } from '@nestjs/common';

@Resolver(() => MusicEntity)
export class MusicsResolver {
  @Inject()
  private readonly musicsService: MusicsService;

  @Query(() => [MusicEntity], { name: 'musics' })
  getMusics() {
    console.debug('sq f ', this.musicsService.getMusics());
    return this.musicsService.getMusics();
  }

  @Mutation(() => Boolean)
  async uploadFile(
    @Args({ name: 'musicFile', type: () => GraphQLUpload })
    { filename, createReadStream },
  ): Promise<boolean> {
    console.log(filename);
    return new Promise(async (resolve, reject) => {
      const stream = createReadStream() as Readable;
      return stream
        .on('data', () => {
          console.log('coucou');
        })
        .on('error', (error) => reject(error))
        .pipe(
          createWriteStream('C:/Users/timot/Desktop/file.txt')
            .on('finish', () => {
              console.log('coucou');
              return resolve(true);
            })
            .on('end', () => {
              console.log('coucou');
              return resolve(true);
            })
            .on('error', (error) => reject(error)),
        );
    });
  }
}
