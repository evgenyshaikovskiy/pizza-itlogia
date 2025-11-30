import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-header',
  imports: [SvgIconComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public isMenuOpen = false;

  public menuLinks = [
    { href: '#pizzas', label: 'Пиццы' },
    { href: '#drinks', label: 'Напитки' },
    { href: '#delivery', label: 'Доставка и оплата' },
    { href: '#contacts', label: 'Контакты' },
  ];

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public closeMenu(): void {
    this.isMenuOpen = false;
  }
}
