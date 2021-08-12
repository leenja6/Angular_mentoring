import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SearchComponent } from './components/search/search.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, HttpClientModule],
    exports: [SearchComponent],
})
export class CommonsModule {}
