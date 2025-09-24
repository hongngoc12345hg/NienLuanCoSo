<template>
  <div class="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light text-dark">
    <div class="col-12 col-md-8 col-lg-6 bodyform p-4 rounded-4 shadow">
      <h3 class="text-center mb-4 fw-bold text-golden">Thêm sản phẩm</h3>
      <form class="row g-3">
        <div class="col-md-6">
          <label class="form-label">Tên sản phẩm:</label>
          <input type="text" class="form-control form-control-lg border-golden" placeholder="Tên sản phẩm:" v-model="sp_ten">
        </div>
        <div class="col-md-6">
          <label class="form-label">Loại:</label>
          <select class="form-select form-control-lg border-golden" id="autoSizingSelect" v-model="loai_ma">
            <option selected disabled value="">Chọn loại</option>
            <option v-for="(e, index) in dsloais" :key="index" :value="e.loai_ma">
              {{ e.loai_ma }} - {{ e.loai_tenloai }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <label class="form-label">Số lượng còn lại:</label>
          <input type="number" class="form-control form-control-lg border-golden" placeholder="Số lượng còn lại:" v-model="sp_soluong">
        </div>
        <div class="col-md-6">
          <label class="form-label">Đơn giá:</label> {{gia}} vnd
          <input type="number" class="form-control form-control-lg border-golden" placeholder="Đơn giá:" v-model="sp_dongia">
        </div>
        <div class="col-md-6">
          <label class="form-label">Nhà sản xuất:</label>
          <!-- <input type="text" class="form-control form-control-lg border-golden" placeholder="Nhà sản xuất:" v-model="nsx_ma"> -->
          <select class="form-select form-control-lg border-golden" id="autoSizingSelect" v-model="nsx_ma">
            <option selected disabled value="">Chọn nhà sản xuất</option>
            <option v-for="(e, index) in dsnsxs" :key="index" :value="e.nsx_ma">
              {{ e.nsx_ma }} - {{ e.nsx_ten }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <label class="form-label">Năm sản xuất:</label>
          <input type="date" class="form-control form-control-lg border-golden" placeholder="Năm sản xuất:" v-model="sp_namsx">
        </div>
        <div class="col-md-6">
          <label class="form-label">Chọn hình:</label>
          <div class="imgsp position-relative">
            <img class="hinhanh" :src="imgrender" alt="">

            <input class="form-control" type="file" id="formFileMultiple" multiple style="display: none;" @change="imgchange" >

            <label for="formFileMultiple" class="overlay-label"></label>
          </div>
        </div>
        <div class="col-md-6">
          <label class="form-label">Mô tả:</label>
          <textarea class="form-control form-control-lg border-golden" rows="4" placeholder="Mô tả:" v-model="sp_mota"></textarea >
        </div>
        <!-- <div class="text-right ">
          <p>Quản lý 
            <a href="#" class="text-golden fw-semibold" @click="gotoPhanloai()">Phân loại</a>, 
            <a href="#" class="text-golden fw-semibold" @click="gotoPhanloai()">Nhà sản xuất</a>
          </p>
        </div> -->
        <div class="col-12 text-center">
          <button type="button" class="btn btn-golden w-100 btn-lg shadow-sm submit" @click="themsanpham">Thêm</button>
        </div>
        <div class="text-center">
          <div class="d-flex justify-content-center gap-3">
            <button type="button" class="btn btn-outline-golden"><i class="fa-solid fa-rotate-right"></i> Làm mới</button>
            <button type="button" class="btn btn-outline-golden"@click="gotoHienthiSP()"><i class="fa-solid fa-xmark"></i> Hủy bỏ</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Themsanpham",
  data() {
    return {
      sp_hinhanh: null,
      sp_ten:"",
      sp_mota:"",
      sp_soluong:0,
      sp_dongia:0,
      sp_namsx:"",
      nsx_ma:"",
      loai_ma:"",
      imgrender:"https://icons.veryicon.com/png/o/miscellaneous/flat-designer-icons/img-8.png",
      dsloais:[],
      dsnsxs:[]
    }
  },
  methods: {
    gotoPhanloai() {
      this.$router.replace("/Phanloai");
    },
    gotoTrangChu() {
      this.$router.replace("/");
    },
    gotoHienthiSP() {
      this.$router.replace("/HienthiSP");
    },
    imgchange(e){
      const file = e.target.files[0]
      this.file = file
      this.imgrender = URL.createObjectURL(file)
    },
    themsanpham(){
      const formData = new FormData();
      formData.append('file',this.file)
      formData.append("sp_ten",this.sp_ten)
      formData.append("sp_mota",this.sp_mota)
      formData.append("sp_soluong",this.sp_soluong)
      formData.append("sp_dongia",this.sp_dongia)
      formData.append("sp_namsx",this.sp_namsx)
      formData.append("nsx_ma",this.nsx_ma)
      formData.append("loai_ma",this.loai_ma)
      axios.post('http://localhost:8000/themsanpham', formData)
        .then( (response)=> {
          alert(response.data.tinnhan)
          
            this.sp_ten = "";
            this.sp_mota = "";
            this.sp_soluong = "";
            this.sp_namsx = "";
            this.nsx_ma = "";
            this.loai_ma = "";
            this.sp_dongia = "";
            // this.file = null;
            // this.sp_hinhanh= null
            
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    dsloai() {
      axios.get('http://localhost:8000/loai')
      .then((response) => {
        console.log(response.data)
        this.dsloais = response.data;

        this.$nextTick(() => {
            $(this.$refs.productTypeTable).DataTable();
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    dsnsx() {
      axios.get('http://localhost:8000/nhasanxuat')
      .then((response) => {
        console.log(response.data)
        this.dsnsxs = response.data;

        this.$nextTick(() => {
            $(this.$refs.productTypeTable).DataTable();
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    

  },
  created(){
    this.dsloai();
    this.dsnsx()
  }
    
}
</script>

<style scoped>
.text-right{
  margin: 0;

}

.hinhanh {
  width: 30%; /* Đảm bảo hình ảnh chiếm toàn bộ chiều rộng */
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
  width: 30%; /* Chiều rộng 100% */
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
  /* background-color: rgb(190, 141, 16); */
  background-color: goldenrod;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-golden:hover {
  transform: translateY(-2px);
  background-color: white;
  color: goldenrod;
  border: 1px solid goldenrod;
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
  color: white;
  transform: translateY(-2px);
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.form-control, .form-select {
  border-radius: 10px;
  transition: all 0.3s ease;
  font-size: 0.875rem; /* Kích thước font nhỏ lại */
  padding: 0.5rem; /* Giảm padding */
}

.form-control::placeholder, .form-select {
  font-size: 0.8rem; /* Kích thước font của placeholder nhỏ lại */
  color: rgba(0, 0, 0, 0.5); /* Màu sắc của placeholder */
}

.btn-golden {
  font-size: 0.875rem; /* Kích thước font cho nút nhỏ lại */
}

.btn-outline-golden {
  font-size: 0.875rem; /* Kích thước font cho nút nhỏ lại */
}
.form-label{
  margin: 5px;
}
.col-md-6{
  margin-top: 0px;
  margin-bottom: 10px;
}
.col-12{
  margin-top: -0px;
  margin-bottom: 9px;
}
.submit{
  font-size: 20px;
}
</style>
