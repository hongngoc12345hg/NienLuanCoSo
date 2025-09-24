<template>
  <div class="container">
    <!-- Menu -->
    <div class="row">
      <div class="col-12">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="container-fluid justify-content-start">
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
      <h2 class="text-center mb-4">Xác nhận đơn hàng</h2>

      <table class="table table-striped table-bordered text-center align-middle">
        <thead>
          <tr>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Khách hàng</th>
            <th>Ngày cập nhật</th>
            <th>Duyệt</th>
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
            <td>{{  }}</td>
            <td>{{  hoadon.hd_ngaytao }}</td>
            <td  >
              <!-- <i class="fa-solid fa-floppy-disk" @click="saveReview(index)" style="cursor: pointer;"></i> -->
               <i class="fa-solid fa-square-check icon" @click="Duyetdon(hoadon._id)"></i>
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
  name: "ChoXacNhanQL",
  
  data() {
    return {
        
        hoadons:[],
        id:"",
      
    };
  },
  methods: {
    gotoTrangchu() {
      this.$router.replace("/");
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
    gotoDaXacNhanQL() {
      this.$router.replace("/DaXacNhanQL");
    },
    formatCurrency(value) {
      if (!value) return '0 VND';
      return Number(value).toLocaleString('vi-VN') + ' VND';
    },
    async dsChoXacNhan(){

        await axios.get('http://localhost:8000/allhoadonnon')
        .then(async (response) => {
            console.log(response.data)
            this.hoadons = response.data
          if(response.status!=200){
            let a=confirm(response.data.tinnhan);
            if(a){
              this.$router.replace("/")
            }
          } 
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async Duyetdon(id){

        await axios.post('http://localhost:8000/duyetdon',{
            _id:id,
            nv_ma:this.id,
        })
        .then(async (response) => {
            console.log(response.data)
            
        })
        .catch(function (error) {
          console.log(error);
        });

       
    },
  },
  created(){
    const token=localStorage.getItem('token')
    this.id=token;
    this.dsChoXacNhan()
  }
};
</script>

<style scoped>
.table th,
.table td {
  vertical-align: middle;
}
.icon {
  font-size: 25px;
}
.icon:hover {
  color: goldenrod;
  font-size: 29px;
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
