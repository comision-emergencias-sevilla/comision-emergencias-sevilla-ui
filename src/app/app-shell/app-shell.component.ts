import { Component, computed, effect, inject, signal } from '@angular/core';
import { UserService } from '../user/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss'
})
export class AppShellComponent {

  myself = toSignal(inject(UserService).myself());

  readonly sidebarOpen = signal(false);
  
}
