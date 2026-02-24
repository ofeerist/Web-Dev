import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  currentImage: string = '';
  showShareMenu: boolean = false;

  like() { this.product.likes++; }
  deleteProduct() { this.remove.emit(this.product.id); }
  toggleShareMenu() { this.showShareMenu = !this.showShareMenu; }
  setCurrentImage(img: string) { this.currentImage = img; }

  share(platform: string) {
    const url = encodeURIComponent(this.product.link);
    const shareUrl = platform === 'whatsapp'
      ? `https://wa.me/?text=${url}`
      : `https://t.me/share/url?url=${url}`;
    window.open(shareUrl, '_blank');
    this.showShareMenu = false;
  }

  get starsArray() {
    const r = this.product.rating;
    return Array(5).fill(0).map((_, i) => r >= i + 1 ? 1 : (r > i ? 0.5 : 0));
  }
}
