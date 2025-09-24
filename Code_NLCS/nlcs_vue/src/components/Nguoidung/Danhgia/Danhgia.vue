<template>
  <div class="container">
   <div class="row">
        <div class="col-12">
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <form class="container-fluid justify-content-start">
                        <button class="btn btn-outline-warning me-2" type="button" @click="gotoTaikhoancanhan()">Xem thông tin tài khoản</button>
                        <!-- <button class="btn btn-outline-warning me-2" type="button" @click="">Chờ xác nhận</button>
                        <button class="btn btn-outline-warning me-2" type="button" @click="">Đang vận chuyển</button> -->
                        <div class="dropdown">
                          <button class="btn btn-outline-warning dropdown-toggle me-2" type="button" @click="gotoChoXacNhan()">Xác nhận đơn hàng</button>
                          <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#" @click="gotoChoXacNhan()">Chưa xác nhận</a></li>
                          <li><a class="dropdown-item" href="#" @click="gotoDaXacNhan()">Đã xác nhận</a></li>
                          </ul>
                      </div>
                        <!-- Dropdown cho nút Đánh giá -->
                        <div class="dropdown">
                            <button class="btn btn-outline-warning dropdown-toggle me-2" type="button" @click="gotoDanhgia()">Đánh giá</button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" @click="gotoDanhgia()">Chưa đánh giá</a></li>
                            <li><a class="dropdown-item" href="#" @click="gotoDaDanhgia()">Đã đánh giá</a></li>
                            </ul>
                        </div>
                        <button class="btn btn-outline-warning me-2 btn1" type="button" @click="gotoTrangchu()">Quay lại Trang chủ</button>
                    </form>
                    
                </div>
            </nav>
        </div>
    </div>

    
    <br>
    
    <div class="container">
      <h2 class="text-center mb-4">Sản phẩm chưa đánh giá</h2>
      <table class="table table-striped table-hover text-center">
        <thead>
          <tr>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Thành tiền</th>
            <th>Đánh giá</th>
            <th>Số sao</th>
            <th>Lưu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="#" alt="Product Image" class="img-thumbnail" style="width: 80px; height: 80px;" />
            </td>
            <td>Tên sản phẩm</td>
            <td>100.000 VNĐ</td>
            <td class="d-flex justify-content-center align-items-center">
              <textarea 
                aria-label="Đánh giá" 
                class="form-control" 
                style="resize: none; width: 20rem;" 
                rows="1" 
                @input="autoResize" 
                placeholder="Nhập đánh giá"></textarea>
            </td>
            <td class="star-rating">
              <span class="star" @click="setRating(1)" :class="{ 'filled': rating >= 1 }">&#9733;</span>
              <span class="star" @click="setRating(2)" :class="{ 'filled': rating >= 2 }">&#9733;</span>
              <span class="star" @click="setRating(3)" :class="{ 'filled': rating >= 3 }">&#9733;</span>
              <span class="star" @click="setRating(4)" :class="{ 'filled': rating >= 4 }">&#9733;</span>
              <span class="star" @click="setRating(5)" :class="{ 'filled': rating >= 5 }">&#9733;</span>
            </td>
            <td>
              <div class="trash-icon" @click="removeProduct()">
                
                <i class="fa-solid fa-floppy-disk" style="cursor: pointer; "></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      
      
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Danhgia",
  data() {
    return {
      rating: 0, // Biến để lưu trữ số sao
    };
  },
  methods: {
    gotoDanhgia() {
      this.$router.replace("/Danhgia");
    },
    gotoTaikhoancanhan() {
      this.$router.replace("/Taikhoancanhan");
    },
    gotoDaDanhgia() {
      this.$router.replace("/DaDanhgia");
    },
    setRating(stars) {
      this.rating = stars; // Cập nhật số sao
    },
    gotoTrangchu() {
      this.$router.replace("/");
    },
    gotoChoXacNhan(){
        this.$router.replace("/ChoXacNhan")
    },
    gotoDaXacNhan(){
      this.$router.replace("/DaXacNhan")
    },
    autoResize(event) {
      const textarea = event.target;
      textarea.style.height = 'auto'; // Đặt chiều cao về tự động để tính toán chính xác
      textarea.style.height = `${textarea.scrollHeight}px`; // Đặt chiều cao theo nội dung
    }
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.table th, .table td {
  vertical-align: middle;
}

.star-rating {
  font-size: 1.5rem;
  color: #ddd; /* Màu mặc định cho sao chưa được chọn */
}

.star {
  cursor: pointer;
  transition: color 0.3s;
}

.star.filled {
  color: goldenrod; /* Màu vàng cho sao đã được chọn */
}

.trash-icon {
  cursor: pointer;
}

h2 {
  color: #ff9800;
  font-weight: bold;
}

.btn {
  transition: background-color 0.3s;
  background-color: goldenrod;
  color: white;
}

.btn:hover {
  background-color: white;
  color: goldenrod;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  display: none; /* Ẩn menu theo mặc định */
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 0; /* Bỏ padding để căn chỉnh tốt hơn */
}

.dropdown-menu li {
  list-style: none; /* Bỏ dấu đầu dòng */
}

.dropdown-menu a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-menu a:hover {
  background-color: rgb(247, 244, 239); /* Màu nền khi hover */
  color: goldenrod;
  border: 1px solid goldenrod;
}

/* Hiện menu khi hover vào dropdown */
.dropdown:hover .dropdown-menu {
  display: block; /* Hiện menu khi hover */
}
.fa-floppy-disk{
    font-size: 20px;
}

.fa-floppy-disk:hover{
    color: goldenrod;
    font-size: 22px;
}
.btn1{
    background-color: black;
}
.btn1:hover{
    background-color: white;
    color: goldenrod;
}
</style>
