import { Injectable } from '@angular/core';

@Injectable()
export class SomeService {
  constructor() { }

  getSomeValue() {
    return 'Hello from SomeService';
  }
}