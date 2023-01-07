import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { SharedModule } from "./modules/shared/shared.module";
import { MarketModule } from "./modules/market/market.module";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        MarketModule,
        CoreModule,
        HttpClientModule
    ]
})
export class AppModule { }
