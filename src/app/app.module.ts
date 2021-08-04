import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { LayoutModule } from './layout/layout.module'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, LayoutModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
