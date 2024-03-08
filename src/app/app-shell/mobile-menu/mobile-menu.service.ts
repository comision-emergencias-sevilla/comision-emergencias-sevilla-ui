import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileMenuService {

  readonly mobileMenuHidden = signal(true);

  isClosed(): boolean {
    return this.mobileMenuHidden();
  }

  isOpen(): boolean {
    return ! this.isClosed();
  }

  open(): void {
    this.mobileMenuHidden.set(false);
  }

  close(): void {
    this.mobileMenuHidden.set(true);
  }

}
