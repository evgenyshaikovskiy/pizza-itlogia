import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoDots]',
})
export class NoDotsDirective {
  @HostListener('keypress', ['$event'])
  public keyPressed(event: KeyboardEvent): void {
    if (event.key === '.') event.preventDefault();
  }
}
