import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // downloadPDF(url): any {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };
  //       return this.http.get(url, httpOptions).map(
  //   (res) => {
  //       return new Blob([res.blob()], { type: 'application/pdf' });
  //   });
  // }
  // $http.get(any, { responseType: 'arraybuffer' })
  // .then(function success(response) {
  //     var file = new Blob([response.data], {
  //         type: 'application/pdf'
  //     }),
  //     url = $window.URL || $window.webkitURL;
  //     $scope.fileUrl = $sce.trustAsResourceUrl(url.createObjectURL(file));
  // });
}
