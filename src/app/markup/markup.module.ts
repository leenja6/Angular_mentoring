import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './compoments/header/header.component'
import { FooterComponent } from './compoments/footer/footer.component'

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [CommonModule],
    exports: [HeaderComponent, FooterComponent],
})
export class MarkupModule {}
