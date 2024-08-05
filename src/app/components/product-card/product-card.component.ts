import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product?: ProductModel; // Truyền thông tin sản phẩm từ bên ngoài vào component
  @Output() addToCart = new EventEmitter<ProductModel>(); // Phát ra sự kiện khi người dùng thêm sản phẩm vào giỏ hàng

  // Được gọi khi người dùng nhấp vào "Add to Cart"
  onAddToCart() {
    if (this.product) {
      // Nếu product có giá trị
      this.addToCart.emit(this.product); // Phát sự kiện
    }
  }
}
