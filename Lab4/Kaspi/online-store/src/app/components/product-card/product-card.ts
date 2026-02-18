import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import {ProductList} from '../product-list/product-list';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {
  @Input() product!: Product;
  currentImage: string = '';

  showShareMenu: boolean = false;
  hidden : boolean = false;

  toggleShareMenu() {
    this.showShareMenu = !this.showShareMenu;
  }

  share(platform: string) {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Посмотри этот товар на Kaspi: ${this.product.name}`);

    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${text}%20${url}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    }

    window.open(shareUrl, '_blank');
    this.showShareMenu = false;
  }

  copyLink() {
    navigator.clipboard.writeText(this.product.link).then(() => {
      this.showShareMenu = false;
    }).catch(err => {
    });
  }

  get starsArray(): number[] {
    const rating = this.product.rating;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(1);
      } else if (rating > i - 1 && rating < i) {
        stars.push(0.5);
      } else {
        stars.push(0);
      }
    }
    return stars;
  }

  protected hide() {
    this.hidden = true;
  }
}
