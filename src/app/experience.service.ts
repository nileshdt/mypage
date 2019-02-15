import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import {Experience} from './experience'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class ExperienceService {

  private heroesUrl = 'api/experiences';  // URL to web api

  constructor( private http: HttpClient,
          private messageService : MessageService) { }
          
  getExperiences () : Observable<Experience[]> {
    //this.messageService.add('HeroSevices : fetched heroes') ;
    //return of( HEROES );
    return this.http.get<Experience[]>(this.heroesUrl)
    .pipe( 
      tap( _ => this.log('fetched Experience')),
      catchError(this.handleError('getExperience', []))

    );
  }
  getExperienceNo404<Data>(id: number): Observable<Experience> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Experience[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} Experience id=${id}`);
        }),
        catchError(this.handleError<Experience>(`getExperience id=${id}`))
      );
  }
  getExperience( id : number) : Observable<Experience> {
    const url = `${this.heroesUrl}/${id}`
    return this.http.get<Experience>(url).pipe(
      tap(_ => this.log(`fewtched Experience id=${id}`)),
      catchError( this.handleError<Experience>(`getExperience id=${id}`))
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