<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="container-fluid justify-content-start">
              <button class="btn btn-outline-warning warning me-2" type="button" @click="gotoHienthiND()">Xem tài khoản người dùng</button>
              <button class="btn btn-outline-warning warning me-2" type="button" @click="gotoThemND()">Thêm người dùng mới</button>
              <!-- <button class="btn btn-outline-warning warning me-2" type="button" @click="On_del()">Xóa loại sản phẩm</button> -->
              <button class="btn btn-outline-warning  warning1 me-2" type="button" @click="gotoTrangChu()">Quay lại Trang Chủ</button>
                <!-- <div class="d-flex ms-auto" role="search">
                    <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-warning search" type="submit">Search</button>
                </div> -->
            </form>
            
          </div>
        </nav>
      </div>
    </div>

    <div class="container mt-4">
      <h3 class="text-center mb-4">Danh sách tài khoản</h3>
      <table ref="userTable" class="display table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Ngày tạo</th>
            <th>Ngày cập nhật</th>
            <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(e, index) in dsNDs" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ e.kh_hoten  }}</td>
            <td>{{ e.kh_sdt}}</td>
            <td>{{ e.kh_email}}</td>
            <td>{{ e.kh_ngaytao}}</td>
            <td>{{ e.kh_ngaycapnhat}}</td>
            <td>
                <button class="btn btn-outline-warning warning">
                    <i class="fa-solid fa-pen"></i> Edit
                </button>
            </td>
            </tr>
            <!-- Add more rows as needed -->
        </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  
  name: "Phanloai",
  data() {
    return {
      on_off_Del: false,
      dsNDs:[],
    };
  },
  // mounted() {
  //   $(this.$refs.userTable).DataTable();
  // },
  methods: {
    gotoThemloaisp() {
      this.$router.replace("/Themloaisp");
    },
    gotoThemsanpham() {
      this.$router.replace("/Themsanpham");
    },
    gotoTrangChu() {
      this.$router.replace("/");
    },
    On_del() {
      this.on_off_Del = !this.on_off_Del;
    },
    gotoThemND() {
      this.$router.replace("/ThemND");
    },
    gotoHienthiND() {
      this.$router.replace("/HienthiND");
    },
    dsND(){
      axios.get('http://localhost:8000/allusers')
      .then((response) => {
        console.log(response.data)
        this.dsNDs = response.data;


      })
      .catch(function (error) {
        console.log(error);
      });

    },
  },
  created(){
    this.dsND()
  }
};
</script>


<style scoped>
.table {
  margin-top: 20px;
}

.table th, .table td {
  text-align: center;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f2f2f2; /* Màu nền cho các hàng lẻ */
}

.table-bordered {
  border: 1px solid #dee2e6; /* Khung cho bảng */
}

.table-bordered th, .table-bordered td {
  border: 1px solid #dee2e6; /* Khung cho các ô */
}

.navbar {
  margin-bottom: 20px;
}

.warning1{
  color: white;
  background-color: black;
}
.warning:hover, .warning1:hover{
  color: goldenrod;
  background-color: white;
}
.warning, .fa-trash{
  color: white;
  background-color: goldenrod;
}

</style>
