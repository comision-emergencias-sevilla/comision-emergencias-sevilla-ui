import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsrfProtectionService {

  readonly http = inject(HttpClient);

  enable(): Signal<String | undefined> {
    return toSignal(this.http.get<String>('/sanctum/csrf-cookie'));
  }

}
