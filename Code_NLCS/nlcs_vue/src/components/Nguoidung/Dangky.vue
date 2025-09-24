<template>
  <div class="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-dark text-light">
    <div class="col-12 col-md-8 col-lg-6 bodyform p-4 rounded-4">
      <h3 class="text-center mb-4 fw-bold text-golden">Đăng ký</h3>
      <form class="row g-3">
        <div class="col-md-6">
          <label class="form-label">Họ và tên:</label>
          <input type="text" class="form-control form-control-lg bg-dark text-light border-golden" placeholder="Họ của bạn" v-model="hoten">
        </div>
        <div class="col-md-6">
          <label class="form-label">Giới tính</label>
          <select id="kh_gioitinh" class="form-select form-control form-control-lg bg-dark text-light border-golden"  v-model="gioitinh">
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
          <!-- <input type="text" class="form-control form-control-lg bg-dark text-light border-golden" placeholder="Họ của bạn" v-model="gioitinh"> -->
        </div>
        <div class="col-md-6">
          <label class="form-label">Năm sinh</label>
          <input type="date" class="form-control form-control-lg bg-dark text-light border-golden" placeholder="Họ của bạn" v-model="namsinh">
        </div>
        <div class="col-6">
          <label class="form-label">Số điện thoại:</label>
          <input type="text" class="form-control form-control-lg bg-dark text-light border-golden" placeholder="0123 456 789" v-model="sdt">
        </div>
        <div class="col-6">
          <label class="form-label">Email:</label>
          <input type="email" class="form-control form-control-lg bg-dark text-light border-golden" placeholder="Nhập email" v-model="email">
        </div>
        <div class="col-6">
          <label class="form-label">Mật khẩu:</label>
          <input type="password" class="form-control form-control-lg bg-dark text-light border-golden" placeholder="Nhập mật khẩu" v-model.trim="pass">
        </div>
        <div class="col-12 text-center">
          <button type="button" class="btn btn-golden w-100 btn-lg shadow-sm mt-4" @click="submitForm()">Đăng ký</button>
        </div>
        <div class="text-center mt-3">
          <p>Bạn đã có tài khoản?
            <a href="#" class="text-golden fw-semibold" @click="gotoDangnhap()"> Đăng nhập</a>
          </p>
        </div>
        <div class="text-center">
          <p class="mb-2">Hoặc đăng nhập bằng</p>
          <div class="d-flex justify-content-center gap-3">
            <button class="btn btn-outline-golden"><i class="fab fa-facebook-f me-2"></i> Facebook</button>
            <button class="btn btn-outline-golden"><i class="fab fa-google me-2"></i> Google</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
      name: "Dangky",
      data(){
        return {
          hoten:'',
          gioitinh:'',
          namsinh:'',
          sdt:'',
          email:'',
          pass:'',
          
        }
      },
      methods:{
        gotoDangnhap(){
          this.$router.replace("/Dangnhap")
        },
        async submitForm() {
          try {
              if (
              this.hoten !== '' &&
              this.gioitinh !== '' &&
              this.namsinh !== '' &&
              this.sdt !== '' &&
              this.email !== '' &&
              this.pass !== '' 
              
              ) {
                  axios.post('http://localhost:8000/dangky', {
                      kh_hoten: this.hoten,
                      kh_gioitinh: this.gioitinh,
                      kh_namsinh: this.namsinh,
                      kh_sdt: this.sdt,
                      kh_email: this.email,
                      kh_pass: this.pass,
               
                  })
                  .then((response)=>{
                    alert(response.data.tinnhan)
                    if(response.status!=202){
                      this.hoten=""
                      this.gioitinh=""
                      this.namsinh=""
                      this.sdt=""
                      this.email=""
                      this.pass=""
                    }
                  })   
                  .catch(function (error) {
                    console.log(error);
                  })
                } 
              else {
                  alert('Vui long nhập đủ thông tin');
              }
          } 
          catch (error) {
              console.log(error);
          }
        },
      }
    }
</script>

<style scoped>
    .bg-dark {
  background-color: #1c1c1c !important;
}

.text-golden {
  color: goldenrod;
}

.border-golden {
  border: 1px solid goldenrod;
}

.bodyform {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgba(218, 165, 32, 0.4);
  border: 1px solid goldenrod;
}

.form-control {
  border-radius: 10px;
  transition: all 0.3s ease;
}

.form-control:focus {
  border-color: goldenrod;
  box-shadow: 0 0 20px rgba(218, 165, 32, 0.6);
  background-color: #2a2a2a;
  color: #fff;
}

.btn-golden {
  /* background-color: goldenrod; */
  background-color: rgb(190, 141, 16);
  color: #1c1c1c;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-golden:hover {
  /* background-color: #e6b800; */
  transform: translateY(-2px);
  background-color: goldenrod;
}

.btn-outline-golden {
  border: 1px solid goldenrod;
  color: goldenrod;
  background-color: transparent;
  transition: all 0.3s ease;
  padding: 8px 14px;
  border-radius: 8px;
}

.btn-outline-golden:hover {
  background-color: goldenrod;
  color: #1c1c1c;
  transform: translateY(-2px);
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>