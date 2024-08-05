import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product.model';

// Đánh dấu service này có thể được sử dụng ở bất kỳ nơi nào trong web
@Injectable({
  providedIn: 'root',
})

// QUẢN LÝ GIỎ HÀNG
export class CartService {
  private cart: ProductModel[] = []; //Mảng lưu trữ danh sách sản phẩm hiện có trong giỏ hàng. Ban đầu nó là mảng rỗng.
  private cartSubject = new BehaviorSubject<ProductModel[]>(this.cart);
  // Cập nhật về giỏ hàng đến các phần khác của ứng dụng. BehaviorSubject bắt đầu với giá trị this.cart và có thể phát ra các giá trị mới khi giỏ hàng thay đổi.

  // Danh sách các sản phẩm mẫu
  private products: ProductModel[] = [
    {
      proName: 'Product New 1',
      price: 100,
      description: 'Description Product New 1',
      image: '../assets/Anh1.jpg',
      quantity: 1,
      id: 1,
    },
    {
      proName: 'Product New 2',
      price: 200,
      description: 'Description Product New 2',
      image: '../assets/Anh2.jpg',
      quantity: 1,
      id: 2,
    },
    {
      proName: 'Product New 3',
      price: 300,
      description: 'Description Product New 3',
      image: '../assets/Anh3.jpg',
      quantity: 1,
      id: 3,
    },
    {
      proName: 'Product New 4',
      price: 400,
      description: 'Description Product New 4',
      image: '../assets/Anh4.jpg',
      quantity: 1,
      id: 4,
    },
    {
      proName: 'Product New 5',
      price: 500,
      description: 'Description Product New 5',
      image: '../assets/Anh5.jpg',
      quantity: 1,
      id: 5,
    },
    {
      proName: 'Product New 6',
      price: 600,
      description: 'Description Product New 6',
      image: '../assets/Anh6.jpg',
      quantity: 1,
      id: 6,
    },
    {
      proName: 'Product New 7',
      price: 700,
      description: 'Description Product New 7',
      image: '../assets/Anh7.jpg',
      quantity: 1,
      id: 7,
    },
    {
      proName: 'Product New 8',
      price: 800,
      description: 'Description Product New 8',
      image: '../assets/Anh8.jpg',
      quantity: 1,
      id: 8,
    },
  ];

  getCart() {
    return this.cartSubject.asObservable();
  }

  // TRẢ VỀ DANH SÁCH SẢN PHẨM CÓ SẴN
  getProducts() {
    return this.products;
  }

  // THÊM SẢN PHẨM
  addToCart(product: ProductModel) {
    const productInCart = this.cart.find((item) => item.id === product.id); // Ktra xem sản phẩm đã có trong giỏ hàng chưa

    // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm mới với số lượng là 1
    if (!productInCart) {
      this.cart.push({ ...product, quantity: 1 });
    } else {
      productInCart.quantity += 1; // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng của sản phẩm đó.
    }
    this.cartSubject.next(this.cart); //Cập nhật BehaviorSubject với trạng thái giỏ hàng mới
  }

  // XÓA SẢN PHẨM KHỎI GIỎ HÀNG
  removeFromCart(productId: number) {
    const productInCart = this.cart.find((item) => item.id === productId);

    if (productInCart) {
      if (productInCart.quantity > 1) {
        productInCart.quantity -= 1; // Giảm số lượng sản phẩm xuống 1
      } else {
        this.cart = this.cart.filter((item) => item.id !== productId); // Nếu số lượng bằng 1, xóa sản phẩm khỏi giỏ hàng
      }
      this.cartSubject.next(this.cart);
    }
  }
}


/* GHI CHÚ */
/*CartService và Component Giỏ Hàng:
    Component giỏ hàng (CartComponent) sử dụng CartService để lấy thông tin giỏ hàng và hiển thị nó. Khi sản phẩm được
    thêm vào giỏ hàng hoặc xóa khỏi giỏ hàng, CartService sẽ phát ra thông tin mới qua BehaviorSubject, và component giỏ hàng
    sẽ cập nhật giao diện người dùng dựa trên dữ liệu mới.


  CartService và Component Danh Sách Sản Phẩm:
    Component danh sách sản phẩm (ProductListComponent) sử dụng CartService để lấy danh sách sản phẩm và hiển thị nó.
    Khi người dùng thêm sản phẩm vào giỏ hàng, component sẽ gọi addToCart của CartService, và dịch vụ sẽ cập nhật giỏ hàng.
    Các thay đổi trong giỏ hàng sẽ được phản ánh ngay lập tức nhờ vào sự phát ra của BehaviorSubject.
*/
