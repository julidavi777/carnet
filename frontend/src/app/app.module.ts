import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';

//set dates in Spanish
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { JwtInterceptor } from './helpers/jwt.interceptor';

registerLocaleData(localeEs, 'es')


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [
    { provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
