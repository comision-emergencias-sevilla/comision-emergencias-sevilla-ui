import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileNavigationService {

  readonly profileMenuHidden = signal(true);

  isClosed(): boolean {
    return this.profileMenuHidden();
  }

  isOpen(): boolean {
    return ! this.isClosed();
  }

  open(): void {
    this.profileMenuHidden.set(false);
  }

  close(): void {
    this.profileMenuHidden.set(true);
  }

  toogle(): void {
    if (this.isClosed()) {
      this.open();
    } else {
      this.close();
    }
  }

}
