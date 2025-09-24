<template>
  <div class="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light text-dark">
    <div class="col-12 col-md-8 col-lg-6 bodyform p-4 rounded-4 shadow">
      <h3 class="text-center mb-4 fw-bold text-golden">Thêm loại sản phẩm</h3>
      <form class="row g-3">
        <div class="col-md-12">
          <label class="form-label">Mã loại:</label>
          <input type="text" class="form-control form-control-lg border-golden" placeholder="Mã loại"  v-model="loai_ma">
        </div>
        <div class="col-md-12">
          <label class="form-label">Tên loại:</label>
          <input type="text"  class="form-control form-control-lg border-golden" placeholder="Tên loại" v-model="loai_tenloai">
        </div>
        
        
        <div class="text-right ">
          <p>Quản lý 
            <a href="#" class="text-golden fw-semibold" @click="gotoPhanloai()">Phân loại</a>
          </p>
        </div>
        <div class="col-12 text-center">
          <button type="button" class="btn btn-golden w-100 btn-lg shadow-sm " @click="themloai">Thêm</button>
        </div>
        <div class="text-center">
          <div class="d-flex justify-content-center gap-3">
            <button type="button" class="btn btn-outline-golden"><i class="fa-solid fa-rotate-right"></i> Làm mới</button>
            <button type="button" class="btn btn-outline-golden" @click="gotoPhanloai()"><i class="fa-solid fa-x"></i> Hủy bỏ</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Themloaisp",
  data() {
    return {
      gia: 0,
      loai_ma:"",
      loai_tenloai:"",
    }
  },
  methods: {
    gotoPhanloai() {
      this.$router.replace("/Phanloai");
    },
    // gotoPhanloai() {
    //   this.$router.replace("/Phanloai");
    // },
    themloai(){
      if(this.loai_ma!="" && this.loai_tenloai!=""){
        axios.post('http://localhost:8000/themloai', {
          loai_ma: this.loai_ma,
          loai_tenloai: this.loai_tenloai,
        })
          .then( (response) =>{
            alert(response.data.tinnhan)
            if(response.status!=202){
              this.loai_ma=""
              this.loai_tenloai=""
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
.hinhanh {
  width: 50%; /* Đảm bảo hình ảnh chiếm toàn bộ chiều rộng */
  height: auto; /* Đảm bảo chiều cao tự động */
  border: none; /* Loại bỏ khung màu đen */
  border-radius: 10px; /* Bo góc cho hình ảnh */
}

.imgsp {
  position: relative;
  display: block; /* Đảm bảo label nằm trên ảnh */
}

.overlay-label {
  position: absolute;
  width: 50%; /* Chiều rộng 100% */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(124, 122, 122, 0); /* Nền trong suốt cho label */
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 10px; /* Bo góc cho label */
}

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
