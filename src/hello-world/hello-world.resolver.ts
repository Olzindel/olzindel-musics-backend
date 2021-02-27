import { Query, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { HelloWorldService } from './hello-world.service';

@Resolver()
export class HelloWorldResolver {
  constructor(
    @Inject() private readonly helloWorldService: HelloWorldService,
  ) {}

  @Query(() => String, { name: 'hello' })
  sayHello() {
    return this.helloWorldService.sayHello();
  }
}
