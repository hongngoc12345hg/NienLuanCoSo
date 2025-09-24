<template>
  <div class="container">
    <!-- Navbar -->
    <!-- <div class="row">
      <div class="col-12">
        <nav class="navbar bg-body-tertiary shadow-sm rounded mb-4">
          <div class="container-fluid">
            <div class="d-flex flex-wrap gap-2">
              <button class="btn btn-outline-warning warning" type="button" @click="gotoHienthiND()">Xem tài khoản người dùng</button>
              <button class="btn btn-outline-warning warning" type="button" @click="gotoThemND()">Thêm người dùng mới</button>
              <button class="btn btn-outline-warning warning1" type="button" @click="gotoTrangChu()">Quay lại Trang Chủ</button>
            </div>
          </div>
        </nav>
      </div>
    </div> -->

    <!-- Form Thêm người dùng -->
     <br><br>
     <br><br>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow p-4">
          <h3 class="text-center mb-4 text-warning">Thêm người dùng mới</h3>

          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="hoTen" class="form-label"><b>Họ và tên</b></label>
              <input
                type="text"
                class="form-control"
                id="hoTen"
                
                required
              />
            </div>

            <div class="mb-3">
              <label for="soDienThoai" class="form-label"><b>Số điện thoại</b></label>
              <input
                type="tel"
                class="form-control"
                id="soDienThoai"
                
                required
                pattern="[0-9]{10}"
              />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label"><b>Email</b></label>
              <input
                type="email"
                class="form-control"
                id="email"
                
                required
              />
            </div>

            <div class="mb-3">
              <label for="matKhau" class="form-label"> <b>Mật khẩu</b></label>
              <input
                type="password"
                class="form-control"
                id="matKhau"
                
                required
                minlength="6"
                placeholder="Nhập ít nhất 6 ký tự"
              />
            </div>

            <div class="text-center mt-4">
              <button type="submit" class="btn btn-warning warning me-3 px-4">Lưu</button>
              <button type="button" class="btn btn-warning warning1 px-4" @click="gotoHienthiND()">Hủy</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemND",
  data() {
    return {
      
    };
  },
  methods: {
    submitForm() {
      console.log("Dữ liệu người dùng:", this.form);
      alert("Thêm người dùng thành công!");
      this.$router.replace("/nguoidung");
    },
    
    gotoTrangChu() {
      this.$router.replace("/");
    },
    gotoThemND() {
      this.$router.replace("/Themloaisp");
    },
    gotoHienthiND() {
      this.$router.replace("/HienthiND");
    },
    themND(){
      if(this.nsx_ma!="" && this.nsx_ten!=""){
        axios.post('http://localhost:8000/nhasanxuat', {
          nsx_ma: this.nsx_ma,
          nsx_ten: this.nsx_ten,
          nsx_diachi: this.nsx_diachi,
          nsx_sdt: this.nsx_sdt,
        })
          .then( (response) =>{
            alert(response.data.tinnhan)
            if(response.status!=202){
              this.nsx_ma=""
              this.nsx_ten=""
              this.nsx_diachi=""
              this.nsx_sdt=""
            }
            
        })
          .catch(function (error) {
            console.log(error);
        });
      }
      else{
        alert("Vui lòng nhập đủ thông tin !")
      }
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 1rem;
}

.warning:hover,
.warning1:hover {
  color: goldenrod;
  background-color: white;
}

.warning,
.search {
  color: white;
  background-color: goldenrod;
}

.warning1 {
  color: white;
  background-color: black;
}
</style>
