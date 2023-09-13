import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import  {MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FooterComponent } from './footer/footer.component';
import { HizmetlerimizComponent } from './hizmetlerimiz/hizmetlerimiz.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { FormsModule } from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HizmetlerimizComponent,
    HakkimizdaComponent,
    IletisimComponent,
    AnasayfaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
    MatGridListModule,
    NgFor

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

