import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { DesktopSidebarComponent } from './desktop-sidebar/desktop-sidebar.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    MobileMenuComponent,
    DesktopSidebarComponent,
    TopNavigationComponent
  ],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppShellComponent {
  
}
