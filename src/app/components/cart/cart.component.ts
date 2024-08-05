import { Component, OnInit } from '@angular/core'; // Mặc định
import { CommonModule } from '@angular/common'; // CommonModule để sử dụng *ngIf, *ngFor
import { ProductModel } from '../../models/product.model'; // ProductModel: định nghĩa cấu trúc của sản phẩm
import { CartService } from '../../services/cart.service'; // CartService: quản lý và thao tác với giỏ hàng

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})

// NgOninit được gọi khi component được tạo lần đầu tiên.
export class CartComponent implements OnInit {
  cart: ProductModel[] = []; // Khai báo mảng lưu trữ d.sách sản phẩm trong giỏ hàng

  constructor(private cartService: CartService) {} // Khởi tạo component với một instance của CartService

  ngOnInit() {
    // Lifecycle hook ngOnInit được gọi sau khi component đã được khởi tạo
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart; // Đăng ký vào getCart từ CartService và gán dữ liệu giỏ hàng cho biến cart
    });
  }

  removeFromCart(productId: number) {
    // Phương thức gọi removeFromCart của CartService để xóa sản phẩm khỏi giỏ hàng
    this.cartService.removeFromCart(productId);
  }

  getTotalPrice(): number {
    // Phương thức tính tổng giá của tất cả các sản phẩm trong giỏ hàng
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }
}


// ghi chú ngOnlnit: https://levunguyen.com/laptrinhweb/2021/06/29/vong-doi-cua-component-trong-angular/#3-ngoninit
