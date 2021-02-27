import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWorldService {
  sayHello = () => 'Hello world !';
}
