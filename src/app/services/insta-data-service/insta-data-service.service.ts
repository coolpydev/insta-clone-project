import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, retry, tap} from "rxjs/operators";
import {handleError} from '../error-handler/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class InstaDataServiceService {

  constructor(public httpClient: HttpClient) { }

  getInstaData() {
    const url = `https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json`;

    return this.httpClient.get(url).pipe(retry(1), catchError(handleError), tap());
  }
}

export class instaData {
  Image: string;
  likes: number;
  timestamp: Date;
  isLiked: boolean;
  constructor(data:any) {
    this.Image = data.Image || '';
    this.likes = data.likes || 0;
    this.timestamp = data.timestamp || Date;
    this.isLiked = false;
  }
}
