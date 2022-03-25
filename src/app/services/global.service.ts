import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {BehaviorSubject} from "rxjs";
import {instaData} from "./insta-data-service/insta-data-service.service";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(public httpClient: HttpClient,
              private _snackBar: MatSnackBar) { }


  compareValues(key:any, order = 'asc') {
    return function innerSort(a:any, b:any) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  showSnackBar(message: string, buttonText = 'Ok') {
    this._snackBar.open(message, buttonText, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }

}
