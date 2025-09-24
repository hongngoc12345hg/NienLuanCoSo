<template>
  <div class="container">
    <!-- Thanh điều hướng -->
    <div class="row">
      <div class="col-12">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="container-fluid justify-content-start">
              <button class="btn btn-outline-warning warning me-2" type="button" @click="gotoHienthiNSX()">Xem tất cả các nhà sản xuất</button>
              <button class="btn btn-outline-warning warning me-2" type="button" @click="gotoThemNSX()">Thêm nhà sản xuất</button>
              <button class="btn btn-outline-warning warning1 me-2" type="button" @click="gotoTrangchu()">Quay lại Trang Chủ</button>
            </form>
          </div>
        </nav>
      </div>
    </div>

    <!-- Bảng nhà sản xuất -->
    <div class="container mt-4">
      <h3 class="text-center mb-4">Danh sách nhà sản xuất</h3>
      <table ref="nsxTable" class="display table table-striped table-bordered" style="width:100%">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã nhà sản xuất</th>
            <th>Tên nhà sản xuất</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Ngày cập nhật</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(nsx, index) in nhaSanXuats" :key="index" >
            <td>{{ index + 1 }}</td>
            <td>{{ nsx.nsx_ma }}</td>
            <td>{{ nsx.nsx_ten }}</td>
            <td>{{ nsx.nsx_diachi }}</td>
            <td>{{ nsx.nsx_sdt }}</td>
            <td>{{ nsx.nsx_ngaycapnhat }}</td>
            <td >
              <i class="fa-solid fa-pencil " @click="gotoSuaNSX(nsx._id,nsx.nsx_ma,nsx.nsx_ten,nsx.nsx_diachi,nsx.nsx_sdt )"></i>
            </td>
            <td>
              <i class="fa-solid fa-trash text-danger" style="cursor: pointer;" @click="xoansx(nsx.nsx_ma)"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-dt';
import axios from 'axios';
export default {
  name: "HienthiNSX",
  data() {
    return {
      nhaSanXuats: [],
      
    };
  },
  
  methods: {
    gotoThemNSX() {
      this.$router.replace("/ThemNSX");
    },
    gotoHienthiNSX() {
      this.$router.replace("/HienthiNSX");
    },
    gotoTrangchu() {
      this.$router.replace("/");
    },
   gotoSuaNSX(id,ma,ten,diachi,sdt){
      this.$router.replace({path:"/SuaNSX", query:{
        _id:id,
        nsx_ma:ma,
        nsx_ten:ten,
        nsx_diachi:diachi,
        nsx_sdt:sdt,
      }});
   },
    dsNSX(){
      axios.get('http://localhost:8000/nhasanxuat')
      .then((response) => {
        console.log(response.data)
        this.nhaSanXuats = response.data;

        this.$nextTick(() => {
            $(this.$refs.nsxTable).DataTable();
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    xoansx(a) {
      let x= confirm("Bạn có chắc chắn muốn xóa mã loại "+ a);
      if(x){
        axios.post('http://localhost:8000/xoanhasanxuat',{
          nsx_ma:a,

        })
        .then((response) => {
          alert(response.data.tinnhan);
          this.dsNSX();

        })
        .catch(function (error) {
          console.log(error);
        });
      }  
    },
    
    
  },
  created(){
    this.dsNSX();
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
  background-color: #f2f2f2;
}
.table-bordered {
  border: 1px solid #dee2e6;
}
.table-bordered th, .table-bordered td {
  border: 1px solid #dee2e6;
}
.navbar {
  margin-bottom: 20px;
}
.warning:hover, .warning1:hover {
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
