import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { mainLayoutComponent } from './components/main.layout.component'
import { MarkupModule } from '../markup/markup.module'
import { PagesModule } from '../pages/pages.module'

@NgModule({
    declarations: [mainLayoutComponent],
    imports: [CommonModule, MarkupModule, PagesModule],
    exports: [mainLayoutComponent],
})
export class LayoutModule {}
