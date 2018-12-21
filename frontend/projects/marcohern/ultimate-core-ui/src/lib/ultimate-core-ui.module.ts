import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UltimateCoreModule } from '@marcohern/ultimate-core';

import { UltimateCoreUiComponent } from './ultimate-core-ui.component';
import { CheckboxesComponent } from './cmps/checkboxes/checkboxes.component';
import { MenuComponent } from './cmps/menu/menu.component';
import { PagerComponent } from './cmps/pager/pager.component';
import { ParamEditableComponent } from './cmps/param-editable/param-editable.component';
import { ParamForm } from './forms/param/param.form';
import { ParamRow } from './tables/param/param.row';
import { ParamTable } from './tables/param/param.table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UltimateCoreUiComponent,
    CheckboxesComponent, MenuComponent, PagerComponent, ParamEditableComponent,

    ParamForm,

    ParamRow, ParamTable
  ],
  imports: [
    UltimateCoreModule, CommonModule, RouterModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    UltimateCoreUiComponent,
    CheckboxesComponent, MenuComponent, PagerComponent, ParamEditableComponent,

    ParamForm,

    ParamRow, ParamTable
  ]
})
export class UltimateCoreUiModule { }
