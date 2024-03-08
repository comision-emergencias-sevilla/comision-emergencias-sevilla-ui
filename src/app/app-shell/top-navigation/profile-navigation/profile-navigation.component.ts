import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProfileService } from './profile.service';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { ProfileNavigationService } from './profile-navigation.service';
import { ClickOutsideDirective } from './click-outside.directive';

@Component({
  selector: 'app-profile-navigation',
  standalone: true,
  imports: [NgOptimizedImage, NgClass, ClickOutsideDirective],
  templateUrl: './profile-navigation.component.html',
  styleUrl: './profile-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileNavigationComponent {

  readonly profileService = inject(ProfileService);

  readonly me = this.profileService.me();

  readonly profileNavigationService = inject(ProfileNavigationService);

  myProfile(event: MouseEvent): void {
    event.stopImmediatePropagation();

    this.profileService.profile();
  }

  logout(event: MouseEvent): void {
    event.stopImmediatePropagation();

    this.profileService.logout();
  }

}
