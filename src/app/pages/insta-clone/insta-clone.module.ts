import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstaCloneRoutingModule } from './insta-clone-routing.module';
import { InstaCloneComponent } from './insta-clone.component';
import {MaterialModule} from "../../material/material.module";
import {InstaDataServiceService} from "../../services/insta-data-service/insta-data-service.service";
import {GlobalService} from "../../services/global.service";
import {CommonComponentsModule} from "../../common/common-components/common-components.module";


@NgModule({
  declarations: [
    InstaCloneComponent
  ],
  imports: [
    CommonModule,
    InstaCloneRoutingModule,
    MaterialModule,
    CommonComponentsModule
  ],
  providers : [InstaDataServiceService , GlobalService]
})
export class InstaCloneModule { }
