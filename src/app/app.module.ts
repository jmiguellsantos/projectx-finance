import { CarouselComponent } from './components/carousel/carousel-component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { GraphicComponent } from './graphic/graphic.component';
import { NgChartsModule } from 'ng2-charts';
import { NgChartsConfiguration } from 'ng2-charts/public_api';

@NgModule({
  declarations: [AppComponent, HomeComponent, TableComponent, CarouselComponent, GraphicComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    HttpClientModule,
    NgbCarouselModule,
    NgChartsModule
  ],
  providers: [
    {
      provide: NgChartsConfiguration, useValue: { generateColors: false}
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
