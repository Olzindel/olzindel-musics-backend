import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MusicsModule } from './musics/musics.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',

    }),
    MusicsModule,
  ],
})
export class AppModule {}
