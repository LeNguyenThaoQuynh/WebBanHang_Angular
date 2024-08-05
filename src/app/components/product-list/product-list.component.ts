import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: ProductModel[] = []; // Mảng chứa danh sách các sản phẩm

  constructor(private cartService: CartService) {
    // Khởi tạo component và lấy danh sách sản phẩm từ CartService
    this.products = this.cartService.getProducts();
  }

  addToCart(product: ProductModel) {
    this.cartService.addToCart(product); // Thêm sản phẩm vào giỏ hàng thông qua CartService
    alert('Successful'); // Hiển thị thông báo khi sản phẩm được thêm vào giỏ hàng thành công
  }
}
