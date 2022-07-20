import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { user } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient ) {}

  getUserByID(idToGet : number) : Observable<user> {
    return this.http.get<user>('http://localhost:3000/users/' + idToGet );
  }

  getAllUsers() : Observable<user[]> {
    return this.http.get<user[]>('http://localhost:3000/users');
  }





}