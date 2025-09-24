<template>
  <div class="container-fluid">
    <div class="menu">
      <Menu />
    </div>
    <br><br>
    <div class="container">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(e, index) in gioHangs" :key="index" >
            <td>
              <img :src="e.sp.sp_duongdan" alt="" class="hinhanh"> 
            </td>
            <td >{{ e.sp.sp_ten }}</td>
            <td>{{ formatCurrency(e.sp.gia) }}</td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary" @click="decreaseQuantity(e)">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <input type="text" aria-label="First name" class="form-control text-center" style="width: 65px;" v-model="e.gh_soluongmua">
                <button type="button" class="btn btn-sm btn-outline-secondary" @click="increaseQuantity(e)">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </td>
            <td>{{ formatCurrency(e.sp.gia*e.gh_soluongmua) }}</td>
            <td>
              <div class="trash-icon">
                <i class="fa-solid fa-trash" @click="xoagiohang(e._id)"></i> 
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="4" class="text-right">Tổng tiền thanh toán:</td>
            <td>{{ formatCurrency(tongTien) }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-warning me-md-2 MUAHANG" type="button" @click="gotoTrangchu()">TIẾP TỤC MUA HÀNG</button>
              <button class="btn btn-warning THANHTOAN" type="button" @click="gotoThanhtoan()">THANH TOÁN NGAY</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Menu from '../Menu/Menu.vue';
async function getdata(a) {
  let data1 = await axios.get('http://localhost:8000/sanpham/'+a)
  return data1.data
}
export default {
    name: "Giohang",
    components: {
        Menu,
    },
    data(){
        return {
            quantity:1,
            totalAmount: 100,
            gioHangs:[],
            kh_ma:"",        }
    },
    methods: {
      increaseQuantity(e) {
        e.gh_soluongmua++;
      },
      decreaseQuantity(e) {
        if (e.gh_soluongmua > 1) e.gh_soluongmua--;
      },
      gotoThanhtoan(){
        this.$router.replace("/Thanhtoan")
      },
      gotoTrangchu(){
        this.$router.replace("/")
      },
      async dsGioHang(){
        let gh = []
        
        await axios.get('http://localhost:8000/giohangkh/'+this.kh_ma)
        .then(async (response) => {
          gh = response.data
          this.gioHangs =await Promise.all( gh.map(async (e)=>{
            let sp1 =await getdata(e.sp_ma)
            return{
              ...e,
              sp:sp1
            }
          }))

          
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
        console.log(this.gioHangs[0])
       
      },
      formatCurrency(value) {
        if (!value) return '0 ₫';
        return value.toLocaleString('vi-VN', {
          style: 'currency',
          currency: 'VND'
        });
      },
      xoagiohang(a) {
        let x= confirm("Bạn có chắc chắn muốn xóa sản phẩm này");
        if(x){
          axios.post('http://localhost:8000/giohang/xoa',{
            _id:a,
          })
          .then((response) => {
            alert(response.data.tinnhan);
            this.dsGioHang();

          })
          .catch(function (error) {
            console.log(error);
          });
      }  
      
      },
      
    
    },
    created(){
      const token=localStorage.getItem('token')
          // console.log(token)
      this.kh_ma=token;
      this.dsGioHang()

    
    },
    computed: {
      tongTien() {
        return this.gioHangs.reduce((tong, e) => {
          return tong + (e.sp.gia * e.gh_soluongmua);
        }, 0);
      }
    }
};
</script>

<style scoped>
.menu {
margin: 0 -12px;
}

.table {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.table th,
.table td {
    padding: 12px 16px;
    text-align: center;
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: #f8f9fa;
}

.table-hover tbody tr:hover {
background-color: #f1f3f5;
}
.fa-trash{
    font-size: larger;
    color: red;
}
.trash-icon:hover .fa-trash {
  color: goldenrod;
  font-size: 22px;
  
} 
.MUAHANG{
    
    color: whitesmoke;
    background-color: rgb(33, 33, 33); 
}
.THANHTOAN{
    
    color: whitesmoke;
    background-color: goldenrod;
}
.MUAHANG:hover, .THANHTOAN:hover{
    color: goldenrod;
    background-color: whitesmoke;
    
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