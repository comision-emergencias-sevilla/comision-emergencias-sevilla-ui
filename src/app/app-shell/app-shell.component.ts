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

  profilePhotoUrl = computed(() => this.myself()?.profile_photo_url );

  effect$ = effect(() => {
    console.log('Current Myself: ' + JSON.stringify(this.myself()))
    console.log('Current Photo Url: ' + this.myself()?.profile_photo_url)
  });
  
}
