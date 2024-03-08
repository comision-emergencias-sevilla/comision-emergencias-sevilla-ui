import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MobileMenuService } from '../mobile-menu/mobile-menu.service';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';

@Component({
  selector: 'app-top-navigation',
  standalone: true,
  imports: [ProfileNavigationComponent],
  templateUrl: './top-navigation.component.html',
  styleUrl: './top-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavigationComponent {

  readonly mobileMenuService = inject(MobileMenuService);

}
