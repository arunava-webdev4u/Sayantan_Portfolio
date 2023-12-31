import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectcardComponent } from './portfolio/projectcard/projectcard.component';

@NgModule({
    declarations: [
        AppComponent,
        LoadingComponent,
        NavbarComponent,
        HomeComponent,
        PortfolioComponent,
        ProjectcardComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
