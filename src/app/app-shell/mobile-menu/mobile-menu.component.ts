import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MobileMenuService } from './mobile-menu.service';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [NgClass],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileMenuComponent {

  readonly mobileMenuService = inject(MobileMenuService);

  readonly mobileMenuHidden = this.mobileMenuService.mobileMenuHidden; 

}
