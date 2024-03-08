import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject } from '@angular/core';
import { Profile } from './profile';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  http = inject(HttpClient);

  constructor() { }

  me(): Signal<Profile | undefined> {
    return toSignal(this.http.get<Profile>('/api/user'));
  }

  profile(): void {
    window.document.location = '/user/profile';
  }

  logout(): void {
    this.http.post('/api/logout', {})
      .subscribe(_ => {
        window.document.location = '/';
      })
  }
}
