import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import { Education } from './education'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class EducationService {
  private heroesUrl = 'api/educations';  // URL to web api

  constructor( private http: HttpClient,
          private messageService : MessageService) { }
          
  getEducations () : Observable<Education[]> {
    console.log("EducationService :: getEducations")
    //this.messageService.add('HeroSevices : fetched heroes') ;
    //return of( HEROES );
    return this.http.get<Education[]>(this.heroesUrl)
    .pipe( 
      tap( _ => this.log('fetched Education')),
      catchError(this.handleError('getEducation', []))

    );
  }
  getEducationNo404<Data>(id: number): Observable<Education> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Education[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} Education id=${id}`);
        }),
        catchError(this.handleError<Education>(`getEducation id=${id}`))
      );
  }
  getEducation( id : number) : Observable<Education> {
    const url = `${this.heroesUrl}/${id}`
    return this.http.get<Education>(url).pipe(
      tap(_ => this.log(`fewtched Experience id=${id}`)),
      catchError( this.handleError<Education>(`getEducation id=${id}`))
    )
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}