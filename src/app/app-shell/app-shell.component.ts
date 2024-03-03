import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss'
})
export class AppShellComponent {

  readonly sidebarOpen = signal(false);

  
}
