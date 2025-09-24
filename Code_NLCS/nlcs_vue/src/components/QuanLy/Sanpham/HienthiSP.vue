<template>
  <div class="container-fluid">
    <!-- Thanh điều hướng -->
    <div class="row">
      <div class="col-12">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="container-fluid justify-content-start">
              <button class="btn btn-outline-warning warning me-2" type="button" @click="gotoHienthiSP()">Xem tất cả sản phẩm</button>
              <button class="btn btn-outline-warning warning me-2" type="button" @click="gotoThemSP()">Thêm sản phẩm</button>
              <button class="btn btn-outline-warning warning1 me-2" type="button" @click="gotoTrangchu()">Quay lại Trang Chủ</button>
            </form>
          </div>
        </nav>
      </div>
    </div>

    <!-- Bảng sản phẩm -->
    <div class="container-fluid mt-4">
      <h3 class="text-center mb-4">Danh sách sản phẩm</h3>
      <table ref="spTable" class="display table table-striped table-bordered w-100">
        <thead>
          <tr>
            <th>STT</th>
            
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Năm sản xuất</th>
            <th>Mã NSX</th>
            <th>Mã loại</th>
            <th>Khuyến mãi</th>
            <th>Ngày cập nhật</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(sp, index) in sanPhams" :key="index">
            <td>{{ index + 1 }}</td>
            
            <td>
              <img :src="imgpath(sp.sp_duongdan)" alt="Hình ảnh" class="product-img" />
            </td>
            <td>{{ sp.sp_ten }}</td>
            <td>{{ sp.sp_soluong }}</td>
            <td>{{ formatCurrency( sp.sp_dongia) }} </td>
            <td>{{ sp.sp_namsx }}</td>
            <td>{{ sp.nsx_ma }}</td>
            <td>{{ sp.loai_ma }}</td>
            <td>{{ sp.sp_khuyenmai }} % </td>
            <td>{{ sp.sp_ngayfcapnhat }}</td>
            <td ><i class="fa-solid fa-pencil  m-2 " @click="gotoSuasanpham(sp._id)"></i></td>
            <td><i class="fa-solid fa-trash text-danger m-2 "></i></td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export default {
  name: "HienthiSP",
  data() {
    return {
      sanPhams: [],
    };
  },
  
  methods: {
    gotoHienthiSP() {
      this.$router.replace("/HienthiSP");
    },
    gotoThemSP() {
      this.$router.replace("/Themsanpham");
    },
    gotoTrangchu() {
      this.$router.replace("/");
    },
    gotoSuasanpham(e) {
      this.$router.replace("/Suasanpham/"+e);

    },
    async dssanpham(){
      await axios.get('http://localhost:8000/sanpham')
        .then(async(response) => {
          console.log(response.data)
          this.sanPhams = await response.data;

        this.$nextTick(() => {
            $(this.$refs.spTable).DataTable();
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    imgpath(e){
      return e;
    },
    formatCurrency(value) {
      if (!value) return '0 VND';
      return Number(value).toLocaleString('vi-VN') + ' VND';
    },
     checkquanly(){
      const quanly = localStorage.getItem('role');
      if(quanly == 1){
        alert("bạn không phải là nhân viên")
        this.$router.replace("/")
      }
    },

    
  },
  async created(){
  
    this.dssanpham();
    this.checkquanly();
  },
  mount(){
    
   
  }
};
</script>

<style scoped>
.table th,
.table td {
  text-align: center;
  vertical-align: middle;
}
.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f2f2f2;
}
.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}
.navbar {
  margin-bottom: 20px;
}
.warning:hover,
.warning1:hover {
  color: goldenrod;
  background-color: white;
}
.warning {
  color: white;
  background-color: goldenrod;
}
.warning1 {
  color: white;
  background-color: black;
}
.product-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
}
.fa-trash:hover {
  color: red;
  font-size: 18px;
  cursor: pointer;
}
.fa-pencil:hover{
  color: goldenrod;
  font-size: 18px;
  cursor: pointer;
}
</style>
