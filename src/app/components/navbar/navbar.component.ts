import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  title = 'Navbar';

  //EventEmitter: Cung cấp khả năng phát ra sự kiện từ component, thường được sử dụng với Output
  @Output() navigate = new EventEmitter<string>();

  constructor(private cartService: CartService) {}

  /* CartService: lấy dữ liệu từ giỏ hàng
     private: chỉ có thể sử dụng trong lớp này */

  navigateTo(view: string) {
    // Thực hiện hành động khi mình muốn chuyển đến một mục tiêu mới
    this.navigate.emit(view); // Phát ra thông tin về trang muốn điều hướng đến
  }
}
