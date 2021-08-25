import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SearchComponent } from './components/search/search.component'
import { HttpClientModule } from '@angular/common/http'
import { addClassDirective } from './directives/addClass.directive'
import { addBorderDirective } from './directives/addBorder.directive'
import { dateTransformPipe } from './pipes/date-transform.pipe'
import { loreMorePipe } from './pipes/lore-more.pipe'

@NgModule({
    declarations: [
        SearchComponent,
        addClassDirective,
        addBorderDirective,
        dateTransformPipe,
        loreMorePipe,
    ],
    imports: [CommonModule, HttpClientModule],
    exports: [
        SearchComponent,
        addClassDirective,
        addBorderDirective,
        dateTransformPipe,
        loreMorePipe,
    ],
})
export class CommonsModule {}
