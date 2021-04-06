import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Music')
export class MusicEntity {
  @Field()
  id!: string;
  @Field()
  title!: string;
  @Field({ nullable: true })
  description?: string;
  @Field()
  linkToFile!: string;
}
