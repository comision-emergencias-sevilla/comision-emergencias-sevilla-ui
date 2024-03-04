import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsrfProtectionService {

  http = inject(HttpClient);

  constructor() { }

  enable(): Observable<String> {
    return this.http.get<String>('/sanctum/csrf-cookie');
  }

}
