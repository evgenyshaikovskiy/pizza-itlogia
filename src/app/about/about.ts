import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  public benefits = [
    {
      title: 'Лучшее тесто',
      description: 'Мы создаем тесто только из отборной итальянской муки наивысшего качества',
      src: 'assets/img/hop.png',
    },
    {
      title: 'Лучшие повара',
      description: 'Пиццы готовят самые профессиональные итальянские повара',
      src: 'assets/img/kitchen-pack.png',
    },
    {
      title: 'Гарантия качества',
      description: 'Наша пиццерия получила множество наград и признаний по всему миру',
      src: 'assets/img/seo-and-web.png',
    },
    {
      title: 'Отборные рецепты',
      description: 'Мы используем рецепты от мировых лидеров в изготовлении пиццы',
      src: 'assets/img/holidays.png',
    },
  ];
}
