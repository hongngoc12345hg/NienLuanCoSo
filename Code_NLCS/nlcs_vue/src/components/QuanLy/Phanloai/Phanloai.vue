<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="container-fluid justify-content-start">
              <button class="btn btn-outline-warning warning me-2" type="button">Xem tất cả các loại sản phẩm</button>
              <button class="btn btn-outline-warning warning me-2" type="button" @click="gotoThemloaisp()">Thêm loại sản phẩm</button>
              <button class="btn btn-outline-warning  warning1 me-2" type="button" @click="gotoTrangchu()">Quay lại Trang Chủ</button>
                
            </form>
            
          </div>
        </nav>
      </div>
    </div>

    <div class="container mt-4">
      <h3 class="text-center mb-4">Bảng loại sản phẩm</h3>
      <table ref="productTypeTable"  class="display table table-striped table-bordered" style="width:100%" :data="dsloais">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã loại</th>
            <th>Tên loại</th>
            <th>Số lượng sản phẩm</th>
            <th>Ngày cập nhật</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(e, index) in dsloais" :key="index">
            <td>{{ index+1}}</td>
            <td>{{ e.loai_ma}}</td>
            <td>{{ e.loai_tenloai}}</td>
            <td>{{ e.tongsp }}</td>
            <td>{{ e.loai_ngaycapnhat }}</td>
            <td ><i class="fa-solid fa-pencil  " @click="gotoSualoai(e._id,e.loai_ma,e.loai_tenloai )"></i></td>
            <td><i class="fa-solid fa-trash text-danger" style="cursor: pointer;" @click="xoaloai(e.loai_ma)"></i></td>
          </tr>
        </tbody>
      </table>
      
        
  

      
      
    </div>
  </div>
</template>

<script>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-dt';

 
DataTable.use(DataTablesCore);
import axios from 'axios';
export default {
  name: "Phanloai",
  data() {
    return {
      dsloais: [],

    };
  },
  mounted() {
    // Không khởi tạo DataTable ở đây
  },
  components:{
    DataTable,
  },
  methods: {
    gotoThemloaisp() {
      this.$router.replace("/Themloaisp");
    },
    gotoThemsanpham() {
      this.$router.replace("/Themsanpham");
    },
    gotoTrangchu() {
      this.$router.replace("/");
    },
    gotoSualoai(id,ma, ten) {
      this.$router.replace({path: "/Sualoai",query:{
        id:id,
        loai_ma:ma,
        loai_ten:ten,
      }});
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
    xoaloai(a) {
      let x= confirm("Bạn có chắc chắn muốn xóa mã loại "+ a);
      if(x){
        axios.post('http://localhost:8000/xoaloai',{
          loai_ma:a,

        })
        .then((response) => {
          alert(response.data.tinnhan);
          this.dsloai();

        })
        .catch(function (error) {
          console.log(error);
        });
      }  
    },

  },
  created() {
    this.dsloai();
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
.warning:hover, .search:hover, .warning1:hover{
  color: goldenrod;
  background-color: white;
}
.warning, .search{
  color: white;
  background-color: goldenrod;
}
.warning1{
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
