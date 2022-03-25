import { Component, OnInit } from '@angular/core';
import {instaData, InstaDataServiceService} from "../../services/insta-data-service/insta-data-service.service";
import {GlobalService} from "../../services/global.service";
import { lastValueFrom } from 'rxjs';
import {coerceStringArray} from "@angular/cdk/coercion";
import {ZoomInDialogComponent} from "../../common/common-components/zoom-in-dialog/zoom-in-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {FilterDialogComponent} from "../../common/common-components/filter-dialog/filter-dialog.component";

@Component({
  selector: 'app-insta-clone',
  templateUrl: './insta-clone.component.html',
  styleUrls: ['./insta-clone.component.scss']
})
export class InstaCloneComponent implements OnInit {

  instaDataArray: Array<instaData> = []
  constructor(private instaService: InstaDataServiceService,
              private globalService: GlobalService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getInstaData();
  }

  async  getInstaData() {
    const res = await lastValueFrom(this.instaService.getInstaData()) || [];
    console.log(res);
    //@ts-ignore
    res.forEach((i:any) => {this.instaDataArray.push(new instaData(i))} );
    console.log(this.instaDataArray);
  }

  updataData(event:any) {
    console.log(event);
  }

  openFilterDialog() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      panelClass: 'submit-dialog',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.filterBooks(result)
    });
  }

  async filterBooks(mode: string) {
    const books = this.instaDataArray;
    switch (mode) {
      case 'priceLow':
        this.instaDataArray = books.sort(this.globalService.compareValues('likes', 'asc'));
        break;
      case 'priceHigh':
        this.instaDataArray = books.sort(this.globalService.compareValues('likes', 'desc'));
        break;
    }
    console.log(this.instaDataArray);
  }


}
