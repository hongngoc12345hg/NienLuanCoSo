<template>
  <div class="container">
    <!-- Menu -->
    <div class="row">
      <div class="col-12">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="container-fluid justify-content-start">
              <button class="btn btn-outline-warning me-2" type="button" @click="gotoTaikhoancanhan()">Xem thông tin tài khoản</button>
              <!-- <button class="btn btn-outline-warning me-2" type="button">Chờ xác nhận</button>
              <button class="btn btn-outline-warning me-2" type="button">Đang vận chuyển</button> -->
              <div class="dropdown">
                  <button class="btn btn-outline-warning dropdown-toggle me-2" type="button" @click="gotoChoXacNhan()">Xác nhận đơn hàng</button>
                  <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#" @click="gotoChoXacNhan()">Chưa xác nhận</a></li>
                  <li><a class="dropdown-item" href="#" @click="gotoDaXacNhan()">Đã xác nhận</a></li>
                  </ul>
              </div>
              <div class="dropdown">
                <button class="btn btn-outline-warning dropdown-toggle me-2" type="button">Đánh giá</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#" @click.prevent="gotoDanhgia()">Chưa đánh giá</a></li>
                  <li><a class="dropdown-item" href="#" @click.prevent="gotoDaDanhgia()">Đã đánh giá</a></li>
                </ul>
              </div>
              <button class="btn btn-outline-warning me-2 btn1" type="button" @click="gotoTrangchu()">Quay lại Trang chủ</button>
            </form>
          </div>
        </nav>
      </div>
    </div>

    <!-- Bảng -->
    <div class="container mt-4">
      <h2 class="text-center mb-4">Sản phẩm chưa đánh giá</h2>

      <table class="table table-striped table-bordered text-center align-middle">
        <thead>
          <tr>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Khách hàng</th>
            <th>Thành tiền</th>
            <th>Đánh giá</th>
            <th>Số sao</th>
            <th>Ngày cập nhật</th>
            <th>Lưu</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(product, index) in products" :key="index">
            <!-- Hàng đánh giá -->
            <tr>
              <td><img :src="product.image" class="img-thumbnail" style="width: 80px; height: 80px;" /></td>
              <td>{{ product.name }}</td>
              <td>{{ product.customer }}</td>
              <td>{{ product.price }}</td>
              <td>
                <textarea
                  class="form-control"
                  v-model="product.review"
                  @input="autoResize($event)"
                  placeholder="Nhập đánh giá"
                  rows="1"
                  style="resize: none; width: 14rem;"
                ></textarea>
              </td>
              <td class="star-rating">
                <span
                  v-for="n in 5"
                  :key="n"
                  class="star"
                  :class="{ filled: product.rating >= n }"
                  @click="setRating(index, n)"
                >&#9733;</span>
              </td>
              <td>{{ product.updatedAt || 'Chưa cập nhật' }}</td>
              <td>
                <i class="fa-solid fa-floppy-disk" @click="saveReview(index)" style="cursor: pointer;"></i>
              </td>
            </tr>

            <!-- Hàng phản hồi -->
            <tr>
              <td colspan="8" class="text-start bg-light">
                <strong>Phản hồi:</strong>
                <textarea
                  class="form-control mt-2"
                  v-model="product.feedback"
                  placeholder="Nhập phản hồi cho khách hàng"
                  rows="2"
                  style="resize: none;"
                ></textarea>
                <div class="text-muted small mt-2">Ngày cập nhật phản hồi: {{ product.feedbackUpdatedAt || 'Chưa cập nhật' }}</div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DaDanhgia",
  data() {
    return {
      products: [
        {
          image: "https://via.placeholder.com/80",
          name: "Sản phẩm A",
          price: "100.000 VNĐ",
          review: "Chất lượng tốt",
          response: "Cảm ơn bạn đã đánh giá!",
          rating: 4,
          updatedAt: "2025-03-02",
        },
        {
          image: "https://via.placeholder.com/80",
          name: "Sản phẩm B",
          price: "200.000 VNĐ",
          review: "Giao hàng nhanh",
          response: "Rất vui vì bạn hài lòng!",
          rating: 5,
          updatedAt: "2025-03-01",
        },
      ],
    };
  },
  methods: {
    gotoTaikhoancanhan() {
      this.$router.replace("/Taikhoancanhan");
    },
    gotoTrangchu() {
      this.$router.replace("/");
    },
    gotoDanhgia() {
      this.$router.replace("/Danhgia");
    },
    gotoDaDanhgia() {
      this.$router.replace("/DaDanhgia");
    },
    gotoChoXacNhan(){
        this.$router.replace("/ChoXacNhan")
    },
    gotoDaXacNhan(){
      this.$router.replace("/DaXacNhan")
    },
    autoResize(event) {
      const textarea = event.target;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    },
    setRating(index, stars) {
      this.products[index].rating = stars;
      this.products[index].updatedAt = new Date().toISOString().slice(0, 10);
    },
    removeProduct(index) {
      const confirmed = confirm(`Bạn có chắc chắn muốn xoá đánh giá của "${this.products[index].name}"?`);
      if (confirmed) {
        this.products.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
.table th,
.table td {
  vertical-align: middle;
}

.star-rating {
  font-size: 1.5rem;
  color: #ddd;
}
.star {
  cursor: pointer;
}
.star.filled {
  color: goldenrod;
}

.fa-trash:hover {
  font-size: 20px;
  color: red;
}

h2 {
  color: #ff9800;
  font-weight: bold;
}

.btn {
  background-color: goldenrod;
  color: white;
}
.btn:hover {
  background-color: white;
  color: goldenrod;
}

.btn1 {
  background-color: black;
}
.btn1:hover {
  background-color: white;
  color: goldenrod;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-menu li {
  list-style: none;
}
.dropdown-menu a {
  padding: 12px 16px;
  display: block;
  color: black;
  text-decoration: none;
}
.dropdown-menu a:hover {
  background-color: rgb(247, 244, 239);
  color: goldenrod;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
.btn1{
    background-color: black;
}
.btn1:hover{
    background-color: white;
    color: goldenrod;
}
.container {
  margin-top: 20px;
}
</style>
