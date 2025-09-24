<template>
  <div class="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-dark">
    <div class="col-12 col-md-6 col-lg-4 bodyform">
      <div class="card shadow-lg p-4 rounded-4 bg-dark text-light border-0 ">
        <h3 class="text-center mb-4 fw-bold text-golden">Đăng nhập</h3>
        <form class="row g-3">
          <div class="col-12">
            <label for="inputsdt" class="form-label">Số điện thoại</label>
            <input type="text" class="form-control form-control-lg bg-dark text-light border-golden" id="inputsdt" placeholder="Nhập số điện thoại của bạn" v-model="sdt">
          </div>
          <div class="col-12">
            <label for="inputPassword4" class="form-label">Mật khẩu</label>
            <input type="password" class="form-control form-control-lg bg-dark text-light border-golden" id="inputPassword4" placeholder="Nhập mật khẩu" v-model="pass">
          </div>

          <div class="col-12 d-flex justify-content-between align-items-center">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck">
              <label class="form-check-label" for="gridCheck">
                Ghi nhớ tôi
              </label>
            </div>
            <a href="#" class="text-golden">Quên mật khẩu?</a>
          </div>

          <div class="col-12">
            <button type="button" class="btn btn-golden w-100 btn-lg shadow-sm" @click="Dangnhap()">Đăng nhập</button>
          </div>
        </form>

        <div class="text-center mt-3">
          <p>Bạn chưa có tài khoản?
            <a href="#" class="text-golden fw-semibold" @click="gotoDangky()"> Đăng ký</a>
          </p>
        </div>

        <div class="text-center">
          <p class="mb-2">Hoặc đăng nhập bằng</p>
          <div class="d-flex justify-content-center gap-3">
            <button class="btn btn-outline-golden"><i class="fab fa-facebook-f me-2"></i> Facebook</button>
            <button class="btn btn-outline-golden"><i class="fab fa-google me-2"></i> Google</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Dangnhap",
  data(){
    return {
      sdt:"",
      pass:''
    }
  },
  methods: {
    gotoDangky(){
        this.$router.replace("/Dangky")
    },
    async Dangnhap(){
      try {
        // localStorage.setItem('token', token);
        if(this.sdt && this.pass){
          await axios.post('http://localhost:8000/dangnhap',{
            sdt:this.sdt,
            kh_pass:this.pass
          }). then((response)=>{
            if (response.status!=202) {
              alert(response.data.tinnhan)
              console.log(response.data)
              localStorage.setItem('token', response.data.id);
              localStorage.setItem('ten', response.data.ten);
              localStorage.setItem('role', response.data.role);
              this.$router.replace('/')
            }
          }).catch((error)=>{
            if (error.status==400) {
              alert('Sai tài khoản');
            }
          })
        }
        else {
          alert('Vui lòng nhập đủ!');
        }
      } catch (error) {
          console.log(error)
      }
    }
  }
};
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
  background-color: rgb(190, 141, 16);
  border: none;
  /* color: #3f3f3f; */
  transition: all 0.3s ease;
  font-weight: 600;
  color: #000;
}

.btn-golden:hover {
  /* background-color: #daa520;
  color: #000; */
  transform: translateY(-2px);
  background-color: goldenrod;
  /* color: #3f3f3f; */
  color: #000;
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

.card {
  border: none;
  border-radius: 20px;
}

.form-label {
  font-weight: 500;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
.bodyform{
    border: 1px solid goldenrod;
    box-shadow: 0 0 30px rgba(230, 201, 12, 0.5);
    border-radius: 20px;
    

}
</style>
