<template>
  <div class="container-fluid">
    <div class="menu">
      <Menu  />
    </div>
    <br>
    <br>
    <div class="container">
      <div class="container-fluid">
        <div class="container">
          <div class="row d-flex align-items-stretch ">
            <div class="col-6">
              <div class="product-gallery text-center bg-light p-4 rounded h-100">
                
                <div class="main-image mb-3 ">
                  <img :src="selectedImage" class="img-fluid rounded border" />
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
              <div class="card text-center mb-3 h-100" style="width: 40rem; border-radius: 20px; ">
                <div class="card-body ms-4 me-4">
                  <br>
                  <h5 class="card-title">{{ sp_ten }}</h5>
                
                  <div v-if="sp_khuyenmai>0" class="badge bg-warning text-dark position-absolute" style="top: -10px; right: -10px;">
                    Giảm {{sp_khuyenmai}}%
                  </div>
                  
                  <hr>
                  <p class="card-text text-left">Thương hiệu: {{ nsx_ten }} | Số lượng còn lại: {{ sp_soluong }}</p>
                  <hr>
                  <p class="card-text text-left"><b>Đặc điểm sản phẩm:</b>
                    <br>
                    {{ sp_mota }}
                  </p>
                  <hr>
                  
                  <p class="card-text text-left" v-if="sp_khuyenmai==0">
                    <span class="h4 text-warning">{{ formatCurrency(sp_dongia) }}</span>
                  </p>
                  <div class="card-text text-left" v-else>
                    <p class="mb-1 h5 text-decoration-line-through">{{ formatCurrency(sp_dongia) }} </p> 
                    <p class="mb-2 h3 text-danger">{{ formatCurrency(sp_dongia-sp_dongia*sp_khuyenmai/100) }}</p>

                  </div>
                  <hr>
                  <p class="card-text text-left">Đánh giá: {{ sp_rate }} <i class="fa-solid fa-star"></i> | Lượt bán: {{ luotban }}</p>
                  <hr>
                  
                  <div class="d-flex justify-content-between align-items-center ">
                    <div class="btn-group mt-1">
                      <button type="button" class="btn btn-sm btn-outline-secondary" @click="decreaseQuantity"><i class="fa-solid fa-minus"></i></button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">{{ quantity }}</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary" @click="increaseQuantity"><i class="fa-solid fa-plus"></i></button>
                    </div>
                  </div>
                  
                  <div class="d-grid gap-2 d-md-block mt-4">
                    <button class="btn btn-warning btn-warning1 marginright " type="button" @click="themVaoGioHang()"> <i class="fa-solid fa-plus"></i> Thêm vào giỏ hàng</button>
                    <button class="btn btn-warning btn-warning2 " type="button"><i class="fa-solid fa-cart-shopping"></i> Mua ngay</button>
                  </div>
                    <br>
                </div>
              </div>
            </div>
            

          </div>  
        </div>
      </div>
      <br>

    <div class="row">
      <div class="col">
        <p class="d-inline-flex gap-1">
          <a class="btn" :class="{ 'active': isCollapsed }" @click="toggleCollapse" role="button" aria-expanded="false" aria-controls="collapseExample">
            {{ isCollapsed ? 'Mô tả sản phẩm <<' : 'Mô tả sản phẩm >>' }}
          </a>
        </p>
        <div class="collapse" :class="{ 'show': isCollapsed }" id="collapseExample">
          <div class="card card-body">
            <table class="table ">
              <tbody>
                
                <tr>
                  <th>Tên sản phẩm:</th>
                  <td>{{ sp_ten }}</td>
                </tr>
                <tr>
                  <th>Thương hiệu:</th>
                  <td>{{ nsx_ten }}</td>
                </tr>
                <tr>
                  <th>Mô tả:</th>
                  <td>{{ sp_mota }}</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      <br>
      
    <div class="row">
      <div class="col">    
        <h5 class="hoverable">Sản phẩm tương tự <span class="badge text-bg-secondary sameproduct"></span></h5>
      </div>
      <!-- Start -->
      <div class="container-fluid text-center clor">
        <div class="container">       
          <ul class="row list-unstyled gy-3 mt-3">
            <li class="col-3 mb-4" v-for="sp in paginatedSanPhams" :key="sp.id">
              <div class="card h-100 position-relative small-card">
                <img :src="sp.sp_duongdan" class="card-img-top" alt="Hình sản phẩm" />
                <div class="card-body d-flex flex-column justify-content-between">
                  <div class="text-center">
                    <p class="mb-2 h3 text-warning">{{ formatCurrency(sp.sp_dongia) }}</p>
                  </div>
                  <p class="card-text h5 text-center ten-san-pham">
                    <b>{{ sp.sp_ten }}</b>
                  </p>
                  
                  <div class="d-grid gap-2 justify-content-center">
                    <a href="#" class="btn btn-warning about" @click="gotoChitietsp(sp._id)">
                      <i class="fa-solid fa-magnifying-glass"></i> Xem thêm
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
     
          <!-- Pagination -->
          <div class="d-flex justify-content-center mt-3">
            <nav>
              <ul class="pagination">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <button class="page-link" @click="gotoPage(currentPage - 1)" :disabled="currentPage === 1">
                    Trước
                  </button>
                </li>
                <li
                  class="page-item"
                  v-for="page in totalPages"
                  :key="page"
                  :class="{ active: currentPage === page }"
                >
                  <button class="page-link" @click="gotoPage(page)">{{ page }}</button>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                  <button class="page-link" @click="gotoPage(currentPage + 1)" :disabled="currentPage === totalPages">
                    Sau
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <!-- End -->
    </div>
      <br>
    
      <div class="row">
        <div class="col">
        
          <div class="container mt-5">
            <h5 class="mb-4">Đánh giá sản phẩm</h5>

            <div v-for="(review, index) in reviews" :key="index" class="mb-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <h6 class="card-title mb-0">{{ review.name }}</h6>
                    <small class="text-muted">{{ review.date }}</small>
                  </div>

                  <div class="mb-2">
                    <span v-for="n in 5" :key="n" class="text-warning">
                      <i class="fa" :class="n <= review.rating ? 'fa-star' : 'fa-star-o'"></i>
                    </span>
                  </div>

                  <p class="card-text">{{ review.comment }}</p>

                  <div v-if="review.reply" class="card bg-light border ms-3 mt-3">
                    <div class="card-body py-2 px-3">
                      <strong>Phản hồi:</strong>
                      <p class="mb-0">{{ review.reply }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
    <div class="footer">
      <Footers />
    </div>
    
  </div>
</template>

<script>
import Footers from '../Menu/Footers.vue';
import Menu from '../Menu/Menu.vue';

import axios from 'axios';
    export default {
        name: 'Chitietsp',
        components:{
          Menu,
          Footers
        },
        data(){
          return{
            sp_hinhanh: null,
            sp_id:"",
            dsloais:[],
            sp_ten:"",
            sp_mota:"",
            sp_soluong:0,
            sp_dongia:0,
            sp_namsx:"",
            nsx_ma:"",
            sp_khuyenmai:0,
            loai_ma:"",
            sp_rate:0,
            luotban:0,
            sp_duongdan:"",
            nsx_ten:"",
            kh_ma:"",
            quantity: 1,
            isCollapsed: false,

            images: [], // mảng ảnh
            selectedImage: "",  //ảnh hiện lên

            _id:"",
            currentPage: 1,
            itemsPerPage: 4,
            sanPhams: [],

            
             sanPhams:[],
            
          }
        },
        computed: {
          totalPages() {
            return Math.ceil(this.sanPhams.length / this.itemsPerPage);
          },
          paginatedSanPhams() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.sanPhams.slice(start, start + this.itemsPerPage);
          }
        },
        
        methods:{
          gotoPage(page) {
            if (page >= 1 && page <= this.totalPages) {
              this.currentPage = page;
            }
          },
          gotoChitietsp(id) {
            this.$router.push("/Chitietsp/"+id);
          },
          
          formatCurrency(value) {
            if (!value) return '0 ₫';
            return value.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND'
            });
          },
          dssanpham() {
            const _id = this.$route.params.id; 
            axios.get('http://localhost:8000/sanphamtt/'+_id)
              .then((response) => {
                console.log(response.data)
                this.sanPhams = response.data;
              })
              .catch((error) => {
                console.error('Lỗi khi tải danh sách sản phẩm:', error);
              });
          },
          

          increaseQuantity() {
            this.quantity++;
          },
          decreaseQuantity() {
            if (this.quantity > 1) {
              this.quantity--;
            }
          },
          toggleCollapse() {
            this.isCollapsed = !this.isCollapsed;
          },
          tinhTongTien() {
            const gia = this.sp_khuyenmai > 0
              ? this.sp_dongia - (this.sp_dongia * this.sp_khuyenmai / 100)
              : this.sp_dongia;
            return gia * this.quantity;
          },
          formatCurrency(value) {
            if (!value) return '0 ₫';
            return value.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND'
            });
          },
          gotoChitietsp(id) {
            this.$router.push("/Chitietsp/"+id).then(()=>location.reload());
          },

          async themVaoGioHang() {
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
                sp_ma: this.sp_id,                     
                kh_ma: this.kh_ma,
                gh_soluongmua: this.quantity,
                                
                      
              };

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
          
          const token=localStorage.getItem('token')
          // console.log(token)
          this.kh_ma=token;
          const id = this.$route.params.id;
          this.sp_id=this.$route.params.id;
          this.dssanpham();
          const _id = this.$route.params.id;
          await axios.get('http://localhost:8000/sanpham/'+id)
            .then((response) => {
                // console.log(this.$route.params.id)
                // console.log(response.data)
                this.sp_ten= response.data.sp_ten
                this.sp_mota= response.data.sp_mota
                this.sp_soluong=  response.data.sp_soluong
                this.sp_dongia =response.data.sp_dongia
                this.sp_namsx=  response.data.sp_namsx
                this.nsx_ma=  response.data.nsx_ma
                this.nsx_ten=  response.data.nsx_ten
                this.sp_khuyenmai=  response.data.sp_khuyenmai
                this.loai_ma = response.data.loai_ma
                this.sp_rate = response.data.sp_rate
                this.luotban = response.data.luotban
                this.sp_duongdan=  response.data.sp_duongdan  
                
                /// thêm ảnh vào trong mảng
                this.images.push(response.data.sp_duongdan)  
                //// chọn ảnh mặc định hiện lên trước tiên
                this.selectedImage = this.images[0]
            })
            .catch(function (error) {
                console.log(error);
            }
          );
        }
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
    .marginright{
      margin-right: 10px;
    }
    .hoverable {
      cursor: pointer;
    }

    .hoverable:hover {
      color: #007bff;
    }

    .hoverable:hover .sameproduct {
      background-color: #007bff;
      color: #fff;
    }
    .carousel-control-prev{
      margin-left: -150px;
    }
    .carousel-control-next{
      margin-right: -150px;
    }
    .carousel-indicators button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #999;
      margin: 0 5px;
    }

    .carousel-indicators button.active {
      background-color: #333;
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

  .fa-star {
    color: gold;
  }
  .fa-star-o {
    color: #ccc;
  }
  .product-details {
    margin-top: 20px;
  }

  .table th {
    width: 300px;
    background-color: #f8f9fa;
  }
  .table td,
  .table th {
    vertical-align: middle;
  }
  .badge {
    font-size: 1.25rem;
    padding: 0.4em 0.6em;
    border-radius: 0.5rem;
    z-index: 1;
  }
  .pagination .page-link {
    color: goldenrod;
  }

  .pagination .active .page-link {
    background-color: goldenrod;
    color: white;
    border-color: goldenrod;
  }

  .small-card {
  height: 400px;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-color: #fff;
}

.small-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.small-card .card-img-top {
  height: 160px;
  width: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;
}

.small-card:hover .card-img-top {
  transform: scale(1.02);
}

.small-card .card-body {
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.small-card .ten-san-pham {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 10px 0;
  height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3em;
}

.small-card .text-warning {
  font-size: 1.05rem;
  color: #ff9800 !important;
}

.small-card .btn {
  background-color: #ffb300;
  color: white;
  border-radius: 20px;
  font-size: 0.85rem;
  padding: 6px 14px;
  transition: background-color 0.2s ease, transform 0.15s ease;
}

.small-card .btn:hover {
  background-color: #f57c00;
  transform: translateY(-1px);
}

.pagination .page-link {
  color: #ff9800;
  border-radius: 4px;
}

.pagination .active .page-link {
  background-color: #ff9800;
  color: white;
  border-color: #ff9800;
}

</style>