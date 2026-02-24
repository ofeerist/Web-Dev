import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnChanges {
  @Input() categoryId!: number;

  products: Product[] = [];
  private productService = inject(ProductService);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['categoryId']) {
      this.loadProducts();
    }
  }

  loadProducts() {
    this.products = this.productService.getProductsByCategory(this.categoryId);
  }

  onRemove(id: number) {
    this.productService.removeProduct(id);
    this.loadProducts();
  }
}
