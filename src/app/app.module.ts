import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { CommonsModule } from './commons/commons.module'
import { LayoutModule } from './layout/layout.module'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        LayoutModule,
        CommonsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
