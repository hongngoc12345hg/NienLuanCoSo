<template>
  <div class="container">
    <!-- Menu -->
    <div class="row">
      <div class="col-12">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="container-fluid justify-content-start">
                <button class="btn btn-outline-warning me-2" type="button" @click="gotoTaikhoancanhan()">Xem thông tin tài khoản</button>

                <div class="dropdown">
                    <button class="btn btn-outline-warning dropdown-toggle me-2" type="button" @click="gotoChoXacNhan()">Xác nhận đơn hàng</button>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" @click="gotoChoXacNhan()">Chưa xác nhận</a></li>
                    <li><a class="dropdown-item" href="#" @click="gotoDaXacNhan()">Đã xác nhận</a></li>
                    </ul>
                </div>
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

    <br />

    <!-- Bảng -->
    <div class="container">
      <h2 class="text-center mb-4">Sản phẩm đã xác nhận</h2>

      <table class="table table-striped table-bordered text-center align-middle">
        <thead>
          <tr>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Ngày cập nhật</th>
            <th>Tình trạng</th>
          </tr>
        </thead>
        <tbody v-for="(hoadon, index) in hoadons" :key="index">
          <tr v-for="(e, index1) in hoadon.chitiet" :key="index1">
            <td>
                <img :src="e.sp.sp_duongdan" alt="" class="hinhanh"> 
            </td>
            <td>{{ e.sp.sp_ten }}</td>
            <td>{{ formatCurrency(e.sp.gia) }}</td>
            <td>{{e.cthd_soluongmua}}</td>
            <td>{{ formatCurrency(e.sp.gia*e.cthd_soluongmua) }}</td>
            <td>{{  hoadon.hd_ngaytao }}</td>
            <td class="text-success">
              <!-- <i class="fa-solid fa-floppy-disk" @click="saveReview(index)" style="cursor: pointer;"></i> -->
               Dã xác nhận
            </td> 
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: "DaXacNhan",
  data() {
    return {
        kh_ma:"",
        hoadons:[]
    };
  },
  methods: {
    gotoTrangchu() {
      this.$router.replace("/");
    },
    gotoChoXacNhan() {
      this.$router.replace("/ChoXacNhan");
    },
    gotoDaXacNhan() {
      this.$router.replace("/DaXacNhan");
    },
    gotoDanhgia() {
      this.$router.replace("/Danhgia");
    },
    saveReview(index) {
      const now = new Date().toISOString().slice(0, 10);
      this.products[index].updatedAt = now;
      alert(`Đã xác nhận sản phẩm: "${this.products[index].name}"`);
    },
    gotoTaikhoancanhan() {
      this.$router.replace("/Taikhoancanhan");
    },
    formatCurrency(value) {
      if (!value) return '0 VND';
      return Number(value).toLocaleString('vi-VN') + ' VND';
    },
    async dsChoXacNhan(){

        await axios.get('http://localhost:8000/allhoadoned/'+this.kh_ma)
        .then(async (response) => {
            console.log(response.data)
            this.hoadons = response.data
          if(response.status!=200){
            let a=confirm(response.data.tinnhan);
            // if(a){
            //   this.$router.replace("/")
            // }
          } 
        })
        .catch(function (error) {
          console.log(error);
        });

       
      },
  },
  created(){
     const token=localStorage.getItem('token')
          // console.log(token)
    this.kh_ma=token;
    this.dsChoXacNhan()
  }
};
</script>

<style scoped>
.table th,
.table td {
  vertical-align: middle;
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


.container {
  margin-top: 20px;
}
.my-profile {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  margin-bottom: 20px;
  color: goldenrod;
  font-weight: 600;
}
.btn{
    background-color: goldenrod;
    color: white;
}
.btn:hover{
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
.btn1 {
  background-color: black;
}
.btn1:hover {
  background-color: white;
  color: goldenrod;
}
.hinhanh {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;        /* Bo góc nhẹ */
  border: 1px solid #ddd;    /* Viền nhẹ */
  display: block;
  margin: 0 auto;            /* Căn giữa ảnh trong ô */
}
</style>
