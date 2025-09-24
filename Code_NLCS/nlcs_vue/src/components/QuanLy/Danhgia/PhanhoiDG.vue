<template>
  <div class="container">
    <!-- Menu -->
    <div class="row">
      <div class="col-12">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="container-fluid justify-content-start">
              <!-- <button class="btn btn-outline-warning me-2" type="button" >Xem thông tin tài khoản</button> -->
              <!-- <button class="btn btn-outline-warning me-2" type="button" @click="gotoChoXacNhanQL()">Chờ xác nhận</button> -->
              <!-- <button class="btn btn-outline-warning me-2" type="button">Đang vận chuyển</button> -->
              <div class="dropdown">
                  <button class="btn btn-outline-warning dropdown-toggle me-2" type="button">Xác nhận đơn hàng</button>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#" @click="gotoChoXacNhanQL()">Chưa xác nhận</a></li>
                      <li><a class="dropdown-item" href="#" @click.prevent="gotoDaXacNhanQL()">Đã xác nhận</a></li>
                  </ul>
              </div>
              <div class="dropdown">
                <button class="btn btn-outline-warning dropdown-toggle me-2" type="button">Phản hồi đánh giá</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#" @click.prevent="gotoPhanhoiDG()">Chưa phản hồi</a></li>
                  <li><a class="dropdown-item" href="#" @click.prevent="gotoDaPhanhoiDG()">Đã phản hồi</a></li>
                </ul>
              </div>
              <button class="btn btn-outline-warning me-2 btn1" type="button" @click="gotoTrangchu()">Quay lại Trang chủ</button>
            </form>
          </div>
        </nav>
      </div>
    </div>

    <br />

    <!-- Bảng -->
    <div class="container">
      <h2 class="text-center mb-4">Sản phẩm chưa phản hồi</h2>

      <table class="table table-striped table-bordered text-center align-middle">
        <thead>
          <tr>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Thành tiền</th>
            <th>Khách hàng</th>
            <th>Đánh giá</th>
            <th>Số sao</th>
            <th>Ngày cập nhật</th>
            <th>Lưu</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(product, index) in products" :key="index">
            <!-- Hàng chính -->
            <tr @click="toggleDetail(index)">
              <td><img :src="product.image" class="img-thumbnail" style="width: 80px; height: 80px;" /></td>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.customer }}</td>
              <td>
                <textarea
                  class="form-control"
                  v-model="product.review"
                  @click.stop
                  @input="autoResize($event)"
                  placeholder="Nhập đánh giá"
                  style="resize: none; width: 16rem;"
                  rows="1"
                ></textarea>
              </td>
              <td class="star-rating" @click.stop>
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
                <i class="fa-solid fa-floppy-disk" @click.stop="saveReview(index)" style="cursor: pointer;"></i>
              </td>
            </tr>

            <!-- Hàng chi tiết: phản hồi -->
            <tr v-if="expandedRow === index">
              <td colspan="8" class="text-start bg-light">
                <strong>Phản hồi:</strong>
                <textarea
                  class="form-control mt-2 mb-1"
                  v-model="product.feedback"
                  placeholder="Nhập phản hồi cho cửa hàng"
                  rows="2"
                  style="resize: none;"
                ></textarea>
                <div class="text-muted small mt-1">Ngày cập nhật phản hồi: {{ product.feedbackUpdatedAt || 'Chưa cập nhật' }}</div>
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
  name: "PhanhoiDG",
  data() {
    return {
      expandedRow: null,
      products: [
        {
          image: "#",
          name: "Sản phẩm A",
          price: "100.000 VNĐ",
          customer: "Nguyễn Văn A",
          review: "",
          rating: 0,
          feedback: "",
          updatedAt: "",
          feedbackUpdatedAt: "",
        },
        {
          image: "#",
          name: "Sản phẩm B",
          price: "250.000 VNĐ",
          customer: "Trần Thị B",
          review: "",
          rating: 0,
          feedback: "",
          updatedAt: "",
          feedbackUpdatedAt: "",
        },
      ],
    };
  },
  methods: {
    gotoTrangchu() {
      this.$router.replace("/");
    },
    gotoTaikhoancanhan() {
      this.$router.replace("/Taikhoancanhan");
    },
    
    gotoPhanhoiDG() {
      this.$router.replace("/PhanhoiDG");
    },
    gotoDaPhanhoiDG() {
      this.$router.replace("/DaPhanhoiDG");
    },
    gotoChoXacNhanQL() {
      this.$router.replace("/ChoXacNhanQL");
    },
    toggleDetail(index) {
      this.expandedRow = this.expandedRow === index ? null : index;
    },
    gotoChoXacNhanQL() {
      this.$router.replace("/ChoXacNhanQL");
    },
    gotoDaXacNhanQL() {
      this.$router.replace("/DaXacNhanQL");
    },
    setRating(index, stars) {
      this.products[index].rating = stars;
    },
    autoResize(event) {
      const textarea = event.target;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    },
    saveReview(index) {
      const now = new Date().toISOString().slice(0, 10);
      const product = this.products[index];
      product.updatedAt = now;
      product.feedbackUpdatedAt = now;
      alert(`Đã lưu đánh giá cho "${product.name}" với ${product.rating} sao và phản hồi: ${product.feedback}`);
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

.fa-floppy-disk {
  font-size: 20px;
}
.fa-floppy-disk:hover {
  color: goldenrod;
  font-size: 22px;
}

.btn {
  background-color: goldenrod;
  color: white;
}
.btn:hover {
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
</style>
