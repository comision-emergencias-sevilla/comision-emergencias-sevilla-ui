import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Myself } from './myself';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);

  constructor() { }

  myself(): Observable<Myself> {
    return this.http.get<Myself>('/api/user');
  }
}
