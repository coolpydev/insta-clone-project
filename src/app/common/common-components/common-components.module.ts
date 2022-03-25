import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedCardComponent } from './feed-card/feed-card.component';
import {MaterialModule} from "../../material/material.module";
import {GlobalService} from "../../services/global.service";
import { ZoomInDialogComponent } from './zoom-in-dialog/zoom-in-dialog.component';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';



@NgModule({
  declarations: [
    FeedCardComponent,
    ZoomInDialogComponent,
    FilterDialogComponent
  ],
  exports: [
    FeedCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [GlobalService]
})
export class CommonComponentsModule { }
