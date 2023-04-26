import { Component, OnInit } from '@angular/core';

import { SomeService } from './some-service/some.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public message: string = '';

  constructor(private someService: SomeService) {}

  ngOnInit() {
    this.message = this.someService.getSomeValue();
  }
}