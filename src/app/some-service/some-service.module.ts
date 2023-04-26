import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SomeService } from './some.service';

@NgModule({})
export class SomeServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SomeServiceModule,
      providers: [
        { provide: SomeService, useClass: SomeService }
      ]
    };
  }
}
