import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';

@NgModule({
  declarations: [
    AppComponent // Główny komponent aplikacji
  ],
  imports: [

    BrowserModule,
    CarsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Główny komponent, który będzie bootstrapowany
})
export class AppModule { }
