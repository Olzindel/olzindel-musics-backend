import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class MusicEntity {
  @Field()
  id!: string;
  @Field()
  title!: string;
  @Field()
  description?: string;
  @Field()
  linkToFile!: string;
}
