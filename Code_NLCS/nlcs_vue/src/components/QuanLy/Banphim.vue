<template>
  <div>
    <div class="container-fluid">
      <div class="menu">
        <Menu />
      </div>

      <div class="container">
        <hr />
        <ul class="row list-unstyled gy-3 mt-3">
          <li class="col-3 mb-4" v-for="sp in paginatedSanPhams" :key="sp._id">
            <div class="card h-60 text-center">
              <img :src="sp.sp_duongdan" class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column">
                <p class="card-text text-center">
                  <span class="h3 text-warning">{{ sp.sp_dongia }}đ</span>
                </p>
                <p class="card-text h5"><b>{{ sp.sp_ten }}</b></p>
                <p class="card-text text-center">
                  Thương hiệu: {{ sp.sp_nsx_ten }} <br />
                  Tình trạng: {{ sp.sp_soluong}}
                </p>
                <div class="d-grid gap-2 mt-auto justify-content-center">
                  <a href="#" class="btn btn-warning about" @click="gotoChitietsp(sp._id)">
                    <i class="fa-solid fa-magnifying-glass"></i> Xem thêm
                  </a>
                </div>
              </div>
            </div>
          </li>

          
        </ul>

        <!-- Pagination -->
        <div class="text-center mb-4">
          <nav>
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <button class="page-link" @click="gotoPage(currentPage - 1)">Trước</button>
              </li>

              <li
                v-for="page in totalPages"
                :key="page"
                class="page-item"
                :class="{ active: currentPage === page }"
              >
                <button class="page-link" @click="gotoPage(page)">{{ page }}</button>
              </li>

              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <button class="page-link" @click="gotoPage(currentPage + 1)">Sau</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="footer">
        <Footers />
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import Footers from '../Menu/Footers.vue'
import Menu from '../Menu/Menu.vue'

export default {
  name: 'Banphim',
  components: {
    Menu,
    Footers
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 8,
      sanPhams: [],
      id:"",
      ten:""
    }
  },
  computed: {
    paginatedSanPhams() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      return this.sanPhams.slice(start, start + this.itemsPerPage)
    },
    totalPages() {
      return Math.ceil(this.sanPhams.length / this.itemsPerPage)
    }
  },
  methods: {
    gotoPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
      }
    },
    gotoThemsanpham() {
      this.$router.push('/themsanpham')
    },
    gotoChitietsp(id) {
      this.$router.push(`/chitietsanpham/${id}`)
    },
    async dssanpham(id){
      await axios.get('http://localhost:8000/sanphamtheoloai/'+id)
        .then(async(response) => {
          console.log(response.data)
          this.sanPhams = await response.data;

        
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    gotoChitietsp(id) {
      this.$router.push("/Chitietsp/"+id);
    },
  },
  created(){
    this.id = this.$route.query.loai_ma;
    this.ten = this.$route.query.loai_tenloai;

    this.dssanpham(this.id)
  }
}
</script>

<style scoped>
.menu {
  margin: 0 -12px;
  padding: 0;
}
.footer {
  margin: 0 -12px;
  padding: 0;
}

.card:hover {
  box-shadow: 0 8px 25px rgba(218, 165, 32, 0.5);
  transform: translateY(-3px);
}
.about {
  padding: 15px;
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
  border-color: goldenrod;
  color: white;
}
.card {
  box-shadow: 0 4px 15px rgba(218, 165, 32, 0.3);
  transition: box-shadow 0.4s ease, transform 0.3s ease;
  height: 100%; /* giữ kích thước đồng đều */
  min-height: 300px; /* cố định chiều cao card */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-img-top {
  height: 180px; /* cố định chiều cao hình ảnh */
  object-fit: contain; /* hoặc 'cover' nếu bạn muốn ảnh tràn đều */
  padding: 10px;
}

</style>
