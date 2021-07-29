import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SearchComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SearchComponent
    ]
})

export class CommonsModule { }