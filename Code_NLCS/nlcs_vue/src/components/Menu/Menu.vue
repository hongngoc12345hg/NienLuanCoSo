<template>
    <div class="container-fluid">
        <div class="row row11 bg-dark">
            <div class="col-1">
                <a href="#"><img class="logo" src="D:\Niên luận cơ sở\PROJECT_NLCS\nlcs_vue\src\img\logo3.png" alt=""></a>
            </div>
            <div class="col-6">
                <form class="container-fluid justify-content-start mt-4">
                  <button type="button" class="btn btn-light button_nav bg-dark home" @click="gotoTrangchu()">TRANG CHỦ</button>

                  <div class="product-dropdown">
                    <button type="button" class="btn btn-light button_nav bg-dark d-flex align-items-center">
                      <span>SẢN PHẨM</span>
                      <i class="fa-solid fa-caret-down icon-menu icon-menu1 ms-2"></i>
                    </button>
                    <div class="product-hover-bridge"></div>
                    <!-- <div class="product-dropdown-menu" v-for="(e, index) in dsloais" :key="index">
                      <a href="#" @click="gotoBanphim()">{{ e.loai_tenloai }}</a>
                      
                    </div> -->
                    <div class="product-dropdown-menu">
                      <a v-for="(e, index) in dsloais" :key="index" href="#" @click="goto(e.loai_ma, e.loai_tenloai)">
                        {{ e.loai_tenloai }}
                      </a>
                    </div>

                  </div>
                  <button type="button" class="btn btn-light button_nav bg-dark home">CHÚNG TÔI</button>
                  <div class="product-dropdown" v-if="quanly">
                    <button type="button" class="btn btn-light button_nav bg-dark d-flex align-items-center">
                      <span>QUẢN LÝ</span>
                      <i class="fa-solid fa-caret-down icon-menu icon-menu1 ms-2"></i>
                    </button>
                    <div class="product-hover-bridge"></div>
                    <div class="product-dropdown-menu">
                      <a href="#" @click="gotoHienthiND()">Tài khoản người dùng</a>
                      <div class="product-submenu">
                        <a href="#" class="has-submenu d-flex justify-content-between align-items-center">
                          <span>Sản phẩm</span>
                          <i class="fa-solid fa-caret-right icon-menu"></i>
                        </a>
                        <div class="product-submenu-menu">
                          <a href="#" @click="gotoHienthiSP()">Thông tin sản phẩm</a>
                          <a href="#" @click="gotoPhanloai()">Thông tin loại sản phẩm</a>
                          <a href="#" @click="gotoHienthiNSX()">Thông tin nhà sản xuất</a>
                          <a href="#" @click="gotoChoXacNhanQL()">Xác nhận</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

            </div>
            <div class="col-3">
                <nav class="navbar bg-body-tertiary mt-4 ">
                    <div class="container-fluid">   
                        <form class="d-flex" role="search" style="width: 100%;">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style="flex: 1;" v-model="a"/>
                            <button class="btn btn-outline-warning  search" type="button" @click="gotoTimKiemSP()">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
            <div class="col-2 d-flex justify-content-end align-items-center position-relative">
                <div class="dropdown">
                    <i class="fa-solid fa-circle-user fa-2x icon-user"></i>
                    <div class="dropdown-hover-bridge"></div>

                    <div class="dropdown-menu-custom">
                        <a href="#" v-if="!tenNguoiDung" @click="gotoDangky()">Đăng ký</a>
                        <a href="#" v-if="!tenNguoiDung" @click="gotoDangnhap()">Đăng nhập</a>
                        <a href="#" v-else class="fw-bold text-golden" @click="gotoTaikhoancanhan()">👤 {{ this.tenNguoiDung }}</a>

                        <!-- <a href="#" @click="gotoTaikhoancanhan()">Tài khoản của tôi</a> -->
                        
                        <div class="dropdown-divider"></div>
                        <a href="#" v-if="tenNguoiDung" @click="logout()">Đăng xuất</a>

                    </div>
                </div>

                <a href="#" @click="gotoGiohang()">
                    <i class="fa-solid fa-cart-shopping icon-cart"></i>
                </a>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Taikhoancanhan from '../Nguoidung/Danhgia/Taikhoancanhan.vue'

export default {
  name: 'Menu',
  data(){
    return{
      tenNguoiDung: null,
      quanly:0,
      a:"",
      dsloais:[]
    }
  }
  ,
  methods:{
    gotoTrangchu(){
        this.$router.replace("/")
    },
    gotoGiohang(){
        this.$router.replace("/Giohang")
    },
    gotoDangnhap(){
        this.$router.replace("/Dangnhap")
    },
    gotoDangky(){
        this.$router.replace("/Dangky")
    },
    gotoBanphim(){
        this.$router.replace("/Banphim")
    },
    gotoTaikhoancanhan(){
        this.$router.replace("/Taikhoancanhan")
    },
    gotoHienthiND(){
      this.$router.replace("/HienthiND")
    },
    gotoHienthiND() {
      this.$router.replace("/HienthiND");
    },
    gotoPhanloai() {
      this.$router.replace("/Phanloai");
    },
    gotoPhanhoiDG() {
      this.$router.replace("/PhanhoiDG");
    },
    gotoHienthiNSX() {
      this.$router.replace("/HienthiNSX");
    },
    gotoHienthiSP() {
      this.$router.replace("/HienthiSP");
    },
    gotoChoXacNhanQL() {
      this.$router.replace("/ChoXacNhanQL");
    },
    logout() {
      
      let x= confirm("Bạn chắc chắn muốn đăng xuất tài khoản này?")
      if(x){
        localStorage.removeItem('token');
        localStorage.removeItem('ten');
        localStorage.removeItem('role');
        this.quanly = 0
        this.tenNguoiDung = null;
        this.$router.replace('/');
        alert("Đã đăng xuất")
      }
    },
    gotoTimKiemSP() {
      this.$router.replace({path:"/TimKiemSanPham",query:{
        a:this.a
        
      }}).then(()=>window.location.reload())
    },
    dsloai() {
      axios.get('http://localhost:8000/loai')
      .then((response) => {
        console.log(response.data)
        this.dsloais = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    goto(id, ten){
      this.$router.replace({path:"/Banphim", query:{
        loai_ma:id,
        loai_tenloai:ten
      }}).then(()=>{window.location.reload()})
    }

  },

  async created() {
    const ten = localStorage.getItem('ten');
    if (ten) {
      this.tenNguoiDung = ten;
    }
    const vaitro = localStorage.getItem('role');
    if(vaitro  != 0)
      this.quanly = 0
    else {
      this.quanly = 1
    }
      
    this.dsloai()

  },

}
</script>

<style scoped>
.main-image img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  border: 2px solid #ccc;
}
.thumbnail-item {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
  padding: 4px;
  border: 2px solid transparent;
  width: 68px;  /* 60px + 4px padding + 2px border */
  height: 68px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumbnail-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  display: block;
  transition: all 0.3s ease;
}

/* Viền vàng khi ảnh được chọn */
.thumbnail-item.active {
  border: 3px solid goldenrod;
}

/* Hover — chỉ scale ảnh chứ không scale khung */
.thumbnail-item:hover img {
  transform: scale(1.05);
}

/* Phần menu */
.row11 {
    background-color: #e9ecef; 
    height: 110px;
}
.logo {
    width: 90%;
    height: 80%;
    margin: 0;
    margin-top: 10px;
}

i:hover {
    color: goldenrod;
    text-shadow:  0 0 10px rgba(243, 235, 185, 0.5),  0 0 20px rgba(189, 168, 25, 0.5);
    transform: scale(1.1);
}
.button_nav {
    padding: 15px 20px;
    margin-left: 4px;
    font-size: larger;
    /* background-color: #e9ecef; */
    display: inline-block;
    width: 10px;
    border: none;
    color: whitesmoke;
}
.button_nav:hover {
    /* background-color: #dee2e6; */
    color: goldenrod;
    font-weight: bold;
    box-shadow: 0 0 20px goldenrod; 
}

.logo:hover {
    width: 92%;
    height: 82%;
}
.navbar {
    width: 120%; /* Đảm bảo navbar chiếm toàn bộ chiều rộng */
    margin-left: -70px;
}
.form-control {
    width: 100%; /* Đảm bảo thanh tìm kiếm chiếm toàn bộ chiều rộng */
}
.search{
    background-color: goldenrod;
    color: whitesmoke;
}
.search:hover{
    background-color: whitesmoke;
    color: goldenrod;
}


.icon-user:hover {
  color: goldenrod;
  text-shadow: 0 0 10px rgba(243, 235, 185, 0.5), 0 0 20px rgba(189, 168, 25, 0.5);
  transform: scale(1.1);
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-hover-bridge {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 12px;
  background: transparent;
  z-index: 5;
  display: none;
  
}

.dropdown-menu-custom {
  position: absolute;
  top: calc(100%);
  right: 0;
  min-width: 180px;
  background-color: #2a2a2a;
  border: 1px solid goldenrod;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(218, 165, 32, 0.3);
  display: none;
  flex-direction: column;
  /* padding: 10px 0; */
  z-index: 10;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  pointer-events: none;
}

.dropdown:hover .dropdown-menu-custom,
.dropdown:hover .dropdown-hover-bridge {
  display: flex;
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  
}

.dropdown-menu-custom a {
  color: goldenrod;
  padding: 10px 16px;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease;
}

.dropdown-menu-custom a:hover {
  background-color: goldenrod;
  color: #1c1c1c;
  
}

.dropdown-divider {
  height: 1px;
  background-color: rgba(218, 165, 32, 0.5);
  margin: 5px 0;
}

i {
    margin-left: 20px;
    margin-top: -3px;
    font-size: 30px;
    color: whitesmoke;
    margin-right: 20px;
}

i:hover {
    color: goldenrod;
    text-shadow:  0 0 10px rgba(243, 235, 185, 0.5),  0 0 20px rgba(189, 168, 25, 0.5);
    transform: scale(1.1);
}

.icon-user {
  color: whitesmoke;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 33px;
}

.product-dropdown {
  position: relative;
  display: inline-block;
}

.product-hover-bridge {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 10px;
  background: transparent;
  display: none;
  z-index: 20;
}

.product-dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 5px;
  min-width: 160px;
  background-color: #2a2a2a;
  border: 1px solid goldenrod;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(218, 165, 32, 0.3);
  display: none;
  flex-direction: column;
  padding: 0;
  z-index: 30;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  pointer-events: none;
}

.product-dropdown:hover .product-dropdown-menu,
.product-dropdown:hover .product-hover-bridge {
  display: flex;
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.product-dropdown-menu a,
.product-submenu a {
  color: goldenrod;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background 0.3s ease, color 0.3s ease;
}

.product-dropdown-menu a:hover,
.product-submenu-menu a:hover {
  background-color: goldenrod;
  color: #1c1c1c;
}

.product-submenu {
  position: relative;
}

.product-submenu-menu {
  position: absolute;
  top: 0;
  left: 100%;
  min-width: 160px;
  background-color: #2a2a2a;
  border: 1px solid goldenrod;
  border-radius: 8px;
  display: none;
  flex-direction: column;
  padding: 0;
  z-index: 35;
  opacity: 0;
  transform: translateX(10px);
  transition: all 0.3s ease;
  pointer-events: none;
}

.product-submenu:hover .product-submenu-menu {
  display: flex;
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.product-submenu-menu a {
  color: goldenrod;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background 0.3s ease, color 0.3s ease;
}


.icon-menu {
  font-size: 14px;
  color: goldenrod;
  transition: transform 0.3s ease;
}
.icon-menu1 {
  font-size: 14px;
  color: whitesmoke;
  transition: transform 0.3s ease;
}

.product-dropdown button:hover .icon-menu,
.product-dropdown-menu a:hover .icon-menu {
  color: #1c1c1c;
}

.product-submenu:hover .has-submenu .icon-menu {
  transform: translateX(2px);
}
.button_nav {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  margin-left: 4px;
  font-size: larger;
  background-color: #e9ecef;
  width: 160px;
  border: none;
  color: whitesmoke;
}
.icon-menu1{
  margin-right: -12px;
}
.icon-user, .icon-cart{
  margin-top: -10px;
  margin-bottom: 5px;
}
.home{
  margin-top: -10px;
}

</style>
