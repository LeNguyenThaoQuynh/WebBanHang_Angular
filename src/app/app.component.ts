import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ProductListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'firstweb';
  currentView: string = 'products'; // biến để theo dõi view hiện tại. Ban đầu, được đặt là 'products', nghĩa là khi khởi động, web sẽ hiển thị danh sách sản phẩm.

  // Phương thức thay đổi giá trị của currentView. Khi có sự kiện từ NavbarComponent, phương thức này được gọi với giá trị của sự kiện
  navigateTo(view: string) {
    //(VD: 'products' hoặc 'cart').
    this.currentView = view;
    // Phương thức cập nhật currentView với giá trị mới, Angular sẽ tự động cập nhật giao diện để hiển thị component tương ứng (ProductListComponent hoặc CartComponent).
  }
}
