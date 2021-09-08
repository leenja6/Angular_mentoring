import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SearchComponent } from './components/search/search.component'
import { HttpClientModule } from '@angular/common/http'
import { StringComponent } from './components/form-control/string-control/string.component'
import { TextareaComponent } from './components/form-control/textarea-control/textarea.component'
import { DatepickerComponent } from './components/form-control/datepicker-control/datepicker.component'

@NgModule({
    declarations: [SearchComponent, StringComponent, TextareaComponent, DatepickerComponent],
    imports: [CommonModule, HttpClientModule],
    exports: [SearchComponent, StringComponent, TextareaComponent, DatepickerComponent],
})
export class CommonsModule {}
