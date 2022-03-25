import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {instaData} from "../../../services/insta-data-service/insta-data-service.service";
import {GlobalService} from "../../../services/global.service";
import {MatDialog} from "@angular/material/dialog";
import {ZoomInDialogComponent} from "../zoom-in-dialog/zoom-in-dialog.component";

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent implements OnInit {


  @Input('instadata') instadata !: instaData;
  @Output('instaData') instaData: EventEmitter<any> =
    new EventEmitter<any>();
  @Output('emitsortOrder') emitSortOrder: EventEmitter<string> = new EventEmitter<string>();
  constructor(private globalService: GlobalService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  likePhoto() {
    if(!this.instadata.isLiked) {
      this.instadata.likes +=1;
      this.instadata.isLiked = true;
      this.globalService.showSnackBar('You Liked This Photo');
    } else {
      this.instadata.likes -=1;
      this.instadata.isLiked = false;
      this.globalService.showSnackBar('You UnLiked This Photo');
    }
    this.instaData.emit(this.instadata);
  }

  openImageDialog(image:instaData) {
    const dialogRef = this.dialog.open(ZoomInDialogComponent,{
      panelClass: 'image-dialog',
      data : {
        image : image
      }
    });

    dialogRef.afterClosed().subscribe((res)=>{
      console.log(res);
    })
  }

}
