import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { StringComponent } from './components/form-control/string-control/string.component';
import { TextareaComponent } from './components/form-control/textarea-control/textarea.component';
import { DatepickerComponent } from './components/form-control/datepicker-control/datepicker.component';
import { ValidationErrorComponent } from './components/form-control/validation-error/validation-error.component';
import { AddClassDirective } from './directives/addClass.directive';
import { AddBorderDirective } from './directives/addBorder.directive';
import { dateTransformPipe } from './pipes/date-transform.pipe';
import { loreMorePipe } from './pipes/lore-more.pipe';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent,
    StringComponent,
    TextareaComponent,
    DatepickerComponent,
    ValidationErrorComponent,
    AddClassDirective,
    AddBorderDirective,
    dateTransformPipe,
    loreMorePipe,
    FormGroupComponent,
        
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    SearchComponent,
    StringComponent,
    TextareaComponent,
    DatepickerComponent,
    AddClassDirective,
    AddBorderDirective,
    dateTransformPipe,
    loreMorePipe,
    FormGroupComponent,
  ],
})
export class CommonsModule {}
