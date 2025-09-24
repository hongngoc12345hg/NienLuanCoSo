<template>
  <div class="container-fluid">
    <div class="menu">
      <Menu  />
    </div>
    <div class="row cars">  
      <div class="col">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner carousel-inner1">
            <div class="carousel-item active">
              <img src="D:\Niên luận cơ sở\PROJECT_NLCS\nlcs_vue\src\img\ssa53.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item ">
              <img src="D:\Niên luận cơ sở\PROJECT_NLCS\nlcs_vue\src\img\iphone13promax.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="D:\Niên luận cơ sở\PROJECT_NLCS\nlcs_vue\src\img\banphim.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="D:\Niên luận cơ sở\PROJECT_NLCS\nlcs_vue\src\img\sac1.jpeg" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </div>
    
    <div class="container-fluid m-5">
      <div class="container">
        <div class="row d-flex align-items-stretch ">
          <div class="col-6">
            <div class="product-gallery text-center bg-light p-4 rounded h-100"> 
              <div class="main-image mb-3 ">
                <img :src="selectedImage" class="img-fluid rounded border imgsp" />
              </div>
              <div class="thumbnail-list d-flex justify-content-center gap-3">
                <div
                  v-for="(image, index) in images"
                  :key="index"
                  class="thumbnail-item"
                  :class="{ active: selectedImage === image }"
                  @click="selectedImage = image"
                >
                  <img :src="image" />
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-6">
            <div class="card text-center mb-3 h-100" style="width: 25rem; border-radius: 20px; ">
              <div class="card-body ms-4 me-4">
                <br>
                <h5 class="card-title">{{ sanPhams[0].sp_ten }}</h5>
                
                <hr>
                <p class="card-text text-left">Thương hiệu: {{ sanPhams[0].nsx_ten }} <br> Tình trạng: {{ sanPhams[0].sp_soluong }}</p>
                <hr>
                <p class="card-text text-left"><b>Đặc điểm sản phẩm:</b>
                  <br>
                  {{ sanPhams[0].sp_mota }}
                </p>
                <hr>
                
                <p class="card-text text-left">
                  <span class="h4 text-warning">{{ sanPhams[0].sp_dongia }}</span>
                </p>
                <hr>
                  <p class="card-text text-left">Đánh giá: {{ sanPhams[0].sp_rate }} <i class="fa-solid fa-star"></i> | Lượt bán: {{ sanPhams[0].luotban }}</p>
                <hr>
                
                <div class="d-flex justify-content-between align-items-center ">
                  <div class="btn-group mt-1">
                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="decreaseQuantity"><i class="fa-solid fa-minus"></i></button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">{{ quantity }}</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="increaseQuantity"><i class="fa-solid fa-plus"></i></button>
                  </div>
                </div>
                
                <div class="d-grid gap-2 d-md-block mt-4">
                  <button class="btn btn-warning btn-warning1 marginright " type="button" @click="themVaoGioHang(sanPhams[0]._id )"> <i class="fa-solid fa-plus" ></i> Thêm vào giỏ hàng</button>
                  <button class="btn btn-warning btn-warning2 " type="button"><i class="fa-solid fa-cart-shopping"></i> Mua ngay</button>
                </div>
                  <br>
              </div>
            </div>
          </div>

        </div>  
      </div>
    </div>
  
    


  
  
  

    <SanPhamNoiBat  />
  <br>
    <SanPhamKhuyenMai  />
    
    <div class="footer">
      <Footers  />

    </div>
    
  </div>
</template>

<script>
import Menu from '@/components/Menu/Menu.vue';
import Footers from '../Menu/Footers.vue';

import axios from 'axios';
import SanPhamNoiBat from './Sanpham/SanPhamNoiBat.vue';
import SanPhamKhuyenMai from './Sanpham/SanPhamKhuyenMai.vue';
import router from '@/router';
export default {
  name: 'TrangChu',
  components:{
    Menu,
    Footers,
    SanPhamNoiBat,
    SanPhamKhuyenMai
  },
  data() {
    return {
    
      selectedImage: "", 
      images: [],
      quantity:1,
      sanPhams:[],
    }
  },
  
  methods: {
    
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    gotoThemsanpham(){
        this.$router.replace("/Themsanpham")
    },
    gotoChitietsp(){
        this.$router.replace("/Chitietsp")
    },
    
    
    formatCurrency(value) {
      if (!value) return '0 VND';
      return Number(value).toLocaleString('vi-VN') + ' VND';
    },
    checkquanly(){
      const quanly = localStorage.getItem('role');
      if(quanly == 1){
        alert("bạn không phải là nhân viên")
        router.replace("/")
      }
    },
    async dssanpham() {
      await axios.get('http://localhost:8000/noibat')
        .then(async (response) => {
           console.log(response.data)
          this.sanPhams = response.data;
           /// thêm ảnh vào trong mảng
            this.images.push(response.data[0].sp_duongdan)  
            //// chọn ảnh mặc định hiện lên trước tiên
            this.selectedImage = this.images[0]
        })
        .catch((error) => {
          console.error('Lỗi khi tải danh sách sản phẩm:', error);
        });

    },
    async themVaoGioHang(a) {
      //console.log(this.kh_ma)
      const token = localStorage.getItem('token')
      if (!token) {
        alert('Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!')
        let x= confirm("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!. Chuyển đến trang đăng nhập ??");
        if(x){
          this.$router.push('/dangnhap') // chuyển hướng đến trang đăng nhập
        }
        return
      }
      try {
        const data = {
          sp_ma: a,                     
          kh_ma: token,
          gh_soluongmua: this.quantity,        
        };
        console.log(data)
        const res = await axios.post("http://localhost:8000/giohang", data);
        if (res.status === 200) {
          alert("Đã thêm vào giỏ hàng thành công!");
        }
      } catch (err) {
        console.error("Lỗi khi thêm vào giỏ hàng:", err);
        alert("Thêm sản phẩm vào giỏ hàng thất bại.");
      }
    },

  },

  async created(){
    this.dssanpham()

    // axios.post('http://localhost:8000/addNV',{
    //   nv_hoten:"nhân viên 1",
    //   nv_pass:"nhanvien1",
    //   nv_chucvu:"nhanvien",
    //   nv_sdt:"0987654321",
    // })
    //   .then((response) => {
    //    console.log(response.data)

        
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },
  
}
</script>

<style scoped>

  .menu{
    margin: 0 -12px;
    padding: 0;
  }
  .footer{
    margin: 0 -12px;
    padding: 0;
  }
  .cars{
    max-width: 100vw;
    height: 80vh;
    position: relative;
    background-image: url("D:\Niên luận cơ sở\PROJECT_NLCS\nlcs_vue\src\img\bg.jpg");
    object-fit:cover ;
    background-size: cover; /* Kích thước hình nền chiếm toàn bộ div mà không bị lặp */
    background-repeat: no-repeat; /* Không lặp lại hình nền */
    background-position: center; /* Căn giữa hình nền */
  }
  .carousel {
    margin: 0 -12px;
    
  }
 .carousel-inner1 img{
   height: 80vh;
 }
 

/* Chitietsap */
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

  .thumbnail-item.active {
    border: 3px solid goldenrod;
  }

  .thumbnail-item:hover img {
    transform: scale(1.05);
  }
  .main-image {
    width: 100%;
    max-width: 400px;   /* tối đa trên desktop */
    aspect-ratio: 1/1;  /* giữ ảnh hình vuông, hoặc 4/3, 16/9 tùy nhu cầu */
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    border: 2px solid #ccc;
    transition: all 0.3s ease;
  }

  .marginright{
      margin-right: 10px;
  }
  
  .btn-warning1 {
    background-color: white;
    color: goldenrod;
    
  }
  .btn-warning1:hover {
    background-color: goldenrod;
    color: white;
  }
  .btn-warning2:hover {
    background-color: white;
    color: goldenrod;
    border: 1px solid goldenrod;
  }
  .btn-warning2 {
    background-color: goldenrod;
    color: white;
  }
  .product-gallery {
    box-shadow: 0 4px 15px rgba(218, 165, 32, 0.3); /* ánh sáng vàng nhẹ */
    transition: box-shadow 0.4s ease, transform 0.3s ease;
  }

  .product-gallery:hover {
    box-shadow: 0 8px 25px rgba(218, 165, 32, 0.5);
    transform: translateY(-3px);
  }

  .card {
    box-shadow: 0 4px 15px rgba(218, 165, 32, 0.3);
    transition: box-shadow 0.4s ease, transform 0.3s ease;
  }

  .card:hover {
    box-shadow: 0 8px 25px rgba(218, 165, 32, 0.5);
    transform: translateY(-3px);
  }
  .clor{
   background: linear-gradient(135deg, #ead8a8, #eadf9f, #e9d798);
  }
  .about{
    padding: 15px;
    /* width: 150px; */
    text-align: center;
    border-radius: 30px;
    color: whitesmoke;
    background-color: goldenrod;
  }
  .about:hover{
    color: whitesmoke;
    background-color: rgb(45, 44, 44);
    border: 1px solid black;
  }
  .title:hover{
    color: #c38208;
  }
  
  .badge {
    font-size: 1rem; /* Kích thước chữ */
    padding: 0.6em 0.6em; /* Khoảng cách bên trong */
    border-radius: 0.5rem; /* Bo góc */
    z-index: 1; /* Đảm bảo thẻ giảm giá nằm trên các phần tử khác */
  }
  .fa-star {
    color: gold;
  }
  .fa-star-o {
    color: #ccc;
  }
  .card-img-top {
    height: 200px; /* hoặc bất kỳ chiều cao mong muốn nào */
    object-fit: cover;
  }

    
   
</style>
