import { Field, InputType } from '@nestjs/graphql';
import { Upload } from './Upload.scalar';

@InputType()
export class MusicInput {
  @Field()
  file: Upload;
}
