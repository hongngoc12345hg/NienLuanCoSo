<template>
  <div class="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light text-dark">
    <div class="col-12 col-md-8 col-lg-6 bodyform p-4 rounded-4 shadow">
      <h3 class="text-center mb-4 fw-bold text-golden">Thêm nhà sản xuất</h3>
      <form class="row g-3">
        <div class="col-md-12">
          <label class="form-label">Mã nhà sản xuất:</label>
          <input type="text" class="form-control form-control-lg border-golden" placeholder="Nhập mã NSX" v-model="nsx_ma" />
        </div>

        <div class="col-md-12">
          <label class="form-label">Tên nhà sản xuất:</label>
          <input type="text" class="form-control form-control-lg border-golden" placeholder="Nhập tên NSX"  v-model="nsx_ten"/>
        </div>

        <div class="col-md-12">
          <label class="form-label">Địa chỉ:</label>
          <input type="text" class="form-control form-control-lg border-golden" placeholder="Nhập địa chỉ" v-model="nsx_diachi"/>
        </div>

        <div class="col-md-12">
          <label class="form-label">Số điện thoại:</label>
          <input type="text" class="form-control form-control-lg border-golden" placeholder="Nhập số điện thoại" v-model="nsx_sdt"/>
        </div>

        <!-- <div class="text-right">
          <p>Quản lý 
            <a href="#" class="text-golden fw-semibold" @click="gotoNSX()">Nhà sản xuất</a>
          </p>
        </div> -->

        <div class="col-12 text-center">
          <button type="button" class="btn btn-golden w-100 btn-lg shadow-sm" @click="themnsx()">Thêm</button>
        </div>

        <div class="text-center">
          <div class="d-flex justify-content-center gap-3">
            <button type="button" class="btn btn-outline-golden"><i class="fa-solid fa-rotate-right"></i> Làm mới</button>
            <button type="button" class="btn btn-outline-golden" @click="gotoHienthiNSX()"><i class="fa-solid fa-x"></i> Hủy bỏ</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ThemNSX",
  data(){
    return{
      nsx_ma:"",
      nsx_ten:"",
      nsx_diachi:"",
      nsx_sdt:"",
    }
  },
  methods: {
    
    
    gotoHienthiNSX() {
      this.$router.replace("/HienthiNSX");
    },
    themnsx(){
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
    
  }
}
</script>

<style scoped>
.bg-light {
  background-color: #f8f9fa !important;
}

.text-dark {
  color: #343a40;
}

.text-golden {
  color: goldenrod;
}

.border-golden {
  border: 1px solid goldenrod;
}

.bodyform {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  border: 1px solid goldenrod;
}

.form-control {
  border-radius: 10px;
  transition: all 0.3s ease;
}

.form-control:focus {
  border-color: goldenrod;
  box-shadow: 0 0 20px rgba(218, 165, 32, 0.6);
  background-color: #ffffff;
  color: #343a40;
}

.btn-golden {
  background-color: rgb(190, 141, 16);
  color: #1c1c1c;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-golden:hover {
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
.form-control::placeholder, .form-select {
  font-size: 0.8rem; /* Kích thước font của placeholder nhỏ lại */
  color: rgba(0, 0, 0, 0.5); /* Màu sắc của placeholder */
}
</style>
