<template>
  <div class="container-fluid text-center bg-warning clor">
    <div class="container">
      <hr />
      <b class="title h4">SẢN PHẨM NỔI BẬT</b>
      
      <ul class="row list-unstyled gy-3 mt-3">
        <li class="col-3 mb-4" v-for="sp in paginatedSanPhams" :key="sp.id">
          <div class="card h-100 position-relative">
            <img :src="sp.sp_duongdan" class="card-img-top" alt="Hình sản phẩm" />
            <div class="card-body d-flex flex-column justify-content-between">
              <div class="text-center">
                <p class="mb-2 h3 text-warning">{{ formatCurrency(sp.sp_dongia) }}</p>
              </div>
              <p class="card-text h5 text-center ten-san-pham">
                <b>{{ sp.sp_ten }}</b>
              </p>
              <div class="text-center small my-0">
                Thương hiệu: {{ sp.nsx_ten }} <br />
                Tình trạng:
                <span :class="sp.sp_soluong > 0 ? 'text-success' : 'text-danger'">
                  {{ sp.sp_soluong > 0 ? 'Còn hàng' : 'Hết hàng' }}
                </span>
              </div>
              <p class="card-text text-center mb-2 small">
                Đánh giá: {{ sp.sp_rate }} <i class="fa-solid fa-star"></i> |
                Lượt bán: {{ sp.luotban }}
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
</template>

<script>
import axios from 'axios';

export default {
  name: 'SanPhamNoiBat',
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 4,
      sanPhams: [],
    };
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
  methods: {
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
      axios.get('http://localhost:8000/noibat')
        .then((response) => {
           console.log(response.data)
          this.sanPhams = response.data;
        })
        .catch((error) => {
          console.error('Lỗi khi tải danh sách sản phẩm:', error);
        });
    },
  },
  created() {
    this.dssanpham();
  }
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 15px rgba(218, 165, 32, 0.3);
  transition: box-shadow 0.4s ease, transform 0.3s ease;
  height: 450px;
  display: flex;
  flex-direction: column;
}

.card:hover {
  box-shadow: 0 8px 25px rgba(218, 165, 32, 0.5);
  transform: translateY(-3px);
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
}

.card-img-top {
  height: 180px;
  object-fit: cover;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

.ten-san-pham {
  white-space: normal;
  word-break: break-word;
  font-size: 1.15rem;
  min-height: 48px;
  margin-bottom: 5px;
}

.badge {
  font-size: 0.95rem;
  padding: 0.4em 0.6em;
  border-radius: 0.5rem;
  z-index: 1;
}

.about{
    padding: 15px;
    /* width: 150px; */
    text-align: center;
    border-radius: 30px;
    color: whitesmoke;
    background-color: goldenrod;
  }

.about:hover {
  color: whitesmoke;
  background-color: rgb(45, 44, 44);
  border: 1px solid black;
}

.pagination .page-link {
  color: goldenrod;
}

.pagination .active .page-link {
  background-color: goldenrod;
  color: white;
  border-color: goldenrod;
}
.small{
  font-size: 1.05rem;
}
.title:hover {
  color: #c38208;
}

.fa-star {
  color: gold;
}



</style>
