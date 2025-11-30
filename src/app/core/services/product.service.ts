import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _products: IProduct[] = [
    {
      ingredients: `Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы`,
      name: 'Мясная Делюкс',
      imgSrc: 'assets/img/Layer 2.png',
      calories: '1800',
      weight: '0.5 kg',
      recipe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      ingredients: `Перец, сыр, креветки, кальмары, мидии, лосось`,
      name: 'Морская Премиум',
      imgSrc: 'assets/img/Layer 3.png',
      calories: '1200',
      weight: '0.4 kg',
      recipe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      ingredients: `Бекон, сыр, сосиски, ананас, томатная паста`,
      name: 'Бекон и Сосиски',
      imgSrc: 'assets/img/Layer 4.png',
      calories: '2000',
      weight: '1.0 kg',
      recipe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      ingredients: `Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста`,
      name: 'Куриная Делюкс',
      imgSrc: 'assets/img/Layer 5.png',
      calories: '1350',
      weight: '0.35 kg',
      recipe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      ingredients: `Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили`,
      name: 'Барбекю Премиум',
      imgSrc: 'assets/img/Layer 6.png',
      calories: '2300',
      weight: '0.5 kg',
      recipe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      ingredients: `Пепперони, сыр, колбаса 2 видов: обжаренная и вареная`,
      name: 'Пепперони Дабл',
      imgSrc: 'assets/img/Layer 7.png',
      calories: '1800',
      weight: '0.5 kg',
      recipe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      ingredients: `Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы`,
      name: 'Куриное трио',
      imgSrc: 'assets/img/Layer 8.png',
      calories: '1800',
      weight: '0.5 gramm',
      recipe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      ingredients: `Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный`,
      name: 'Сырная',
      imgSrc: 'assets/img/Layer 9.png',
      calories: '1800',
      weight: '0.5 gramm',
      recipe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  public getCatalogProducts(): Observable<IProduct[]> {
    return of(this._products);
  }
}
