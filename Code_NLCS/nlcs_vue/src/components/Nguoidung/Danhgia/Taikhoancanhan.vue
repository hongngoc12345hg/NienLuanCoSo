<template>
    <div class="container">
        <div class="row">
        <div class="col-12">
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <form class="container-fluid justify-content-start">
                        <button class="btn btn-outline-warning me-2" type="button" @click="gotoTaikhoancanhan()">Xem thông tin tài khoản</button>
                        <!-- <button class="btn btn-outline-warning me-2" type="button" @click="gotoChoXacNhan()">Chờ xác nhận</button> -->
                         <div class="dropdown">
                            <button class="btn btn-outline-warning dropdown-toggle me-2" type="button" @click="gotoChoXacNhan()">Xác nhận đơn hàng</button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" @click="gotoChoXacNhan()">Chưa xác nhận</a></li>
                            <li><a class="dropdown-item" href="#" @click="gotoDaXacNhan()">Đã xác nhận</a></li>
                            </ul>
                        </div>
                        <!-- <button class="btn btn-outline-warning me-2" type="button" @click="">Đang vận chuyển</button> -->

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
    <div class="container my-profile">

    <h2 class="title ">Thông tin cá nhân</h2>
    <form v-if="this.khachhang">
      <div class="mb-2">
        <label for="kh_hoten" class="form-label">Họ và tên:</label>
        <input type="text" id="kh_hoten" class="form-control" v-model="TTcanhans.kh_hoten"/>
      </div>
      <div class="mb-2">
        <label for="kh_sdt" class="form-label">Số điện thoại:</label>
        <input type="text" id="kh_sdt" class="form-control"  v-model="TTcanhans.kh_sdt" />
      </div>
      <div class="mb-2">
        <label for="kh_gioitinh" class="form-label">Giới tính:</label>
        <select id="kh_gioitinh" class="form-select"  v-model="TTcanhans.kh_gioitinh">
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
          <option value="Khác">Khác</option>
        </select>
      </div>
      <div class="mb-2">
        <label for="kh_namsinh" class="form-label">Năm sinh:</label>
        <input type="date" id="kh_namsinh" class="form-control"  v-model="TTcanhans.kh_namsinh" />
      </div>
      <div class="mb-2">
        <label for="kh_email" class="form-label">Email:</label>
        <input type="email" id="kh_email" class="form-control"  v-model="TTcanhans.kh_email"/>
      </div>
      
      <div class="row">
        <!-- <div class="col-6">
            <div class="mb-2">
                <label for="" class="form-label">Ngày tạo:</label>
                <input type="" id="" class="form-control"   />
            </div>
        </div> -->
        <div class="col-12">
            <div class="mb-2">
                <label for="" class="form-label">Ngày cập nhật:</label>
                <input type="text" id="" class="form-control"  v-model="TTcanhans.kh_ngaycapnhat"/>
            </div>
        </div>
      </div>
      
      <button type="button" class="btn btn-warning" @click="editcanhan()">Cập nhật thông tin</button>
      
    </form>


    <form v-else>
      
      



      <div class="mb-2">
        <label for="kh_hoten" class="form-label">Họ và tên:</label>
        <input type="text" id="kh_hoten" class="form-control" v-model="TTcanhans.nv_hoten"/>
      </div>
      <div class="mb-2">
        <label for="kh_sdt" class="form-label">Số điện thoại:</label>
        <input type="text" id="kh_sdt" class="form-control"  v-model="TTcanhans.nv_sdt" />
      </div>
      <div class="mb-2">
        <label for="kh_gioitinh" class="form-label">Giới tính:</label>
        <select id="kh_gioitinh" class="form-select"  v-model="TTcanhans.nv_chucvu">
          <option value="nhanvien">Nhan vien</option>
          <option value="Khác">Khác</option>
        </select>
      </div>
      
      <div class="row">
        <!-- <div class="col-6">
            <div class="mb-2">
                <label for="" class="form-label">Ngày tạo:</label>
                <input type="" id="" class="form-control"   />
            </div>
        </div> -->
        <div class="col-12">
            <div class="mb-2">
                <label for="" class="form-label">Ngày cập nhật:</label>
                <input type="text" id="" class="form-control"  v-model="TTcanhans.nv_ngaycapnhat"/>
            </div>
        </div>
      </div>
      
      <button type="button" class="btn btn-warning" >Cập nhật thông tin</button>
    </form>
  </div>
  </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';

export default {
  name: "Taikhoancanhan",
  data(){
    return {
      TTcanhans:{},
      khachhang: true
    }
  },
  methods: {
    gotoDanhgia(){
        this.$router.replace("/Danhgia")
    },
    gotoTaikhoancanhan(){
        this.$router.replace("/Taikhoancanhan")
    },
    gotoTrangchu(){
        this.$router.replace("/")
    },
    gotoDaDanhgia(){
        this.$router.replace("/DaDanhgia")
    },
    gotoChoXacNhan(){
        this.$router.replace("/ChoXacNhan")
    },
    gotoDaXacNhan(){
      this.$router.replace("/DaXacNhan")
    },
    ttcanhan(){
      const token=localStorage.getItem('token')
      axios.get('http://localhost:8000/user/thongtin/'+token)
      .then((response) => {
        console.log(response.data)
        this.TTcanhans = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    editcanhan(){
        axios.post('http://localhost:8000/user/edituser',
            this.TTcanhans
        )
            .then((response) => {
                alert(response.data.tinnhan) 
                location.reload()
            })
            .catch(function (error) {
                console.log(error);
            }
        );
    }
  },
  created(){
    this.ttcanhan()
    const rolo=localStorage.getItem('role')
    if(rolo == 0){
      this.khachhang = false
    }
    
    console.log("role: ",this.khachhang )

  }
  
};
</script>

<style scoped>
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
