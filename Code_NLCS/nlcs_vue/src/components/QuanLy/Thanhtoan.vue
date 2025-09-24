<template>
  <div class="container-fluid bg-light py-5">
    <div class="row g-4 equal-height-container">
      <!-- Bên trái -->
      <div class="col-6 d-flex flex-column">
        <div class="box p-4 flex-fill">
          <h5 class="title mb-4">Thông tin thanh toán</h5>
          <div class="mb-3">
            

            <label for="fullname" class="form-label">Họ và tên</label>
            <input type="text" id="fullname" class="form-control custom-input mb-3" placeholder="Họ và tên" v-model="TTcanhans.kh_hoten" readonly/>

            <label for="phone" class="form-label">Số điện thoại</label>
            <input type="text" id="phone" class="form-control custom-input mb-3" placeholder="Số điện thoại" v-model="TTcanhans.kh_sdt" readonly/>

            <label for="email" class="form-label">Email</label>
            <input type="text" id="email" class="form-control custom-input mb-3" placeholder="Email" v-model="TTcanhans.kh_email" readonly/>

            <label for="address" class="form-label">Địa chỉ</label>
            <input type="text" id="address" class="form-control custom-input" placeholder="Địa chỉ" v-model="kh_diachi"/>
          </div>
        </div>
      </div>

      <!-- Bên phải -->
      <div class="col-6 d-flex flex-column">
        <div class="box p-4 flex-fill d-flex flex-column justify-content-between">
          <div>
            <h5 class="title mb-4">Thông tin vận chuyển</h5>
            <div class="form-check mb-3 d-flex justify-content-between align-items-center">
              <div>
                <input class="form-check-input custom-check me-2" type="radio" name="shipMethod" id="fast" />
                <label class="form-check-label" for="fast">Giao hàng nhanh</label>
              </div>
              <span class="badge price-badge">40.000₫</span>
            </div>
            <div class="form-check d-flex justify-content-between align-items-center">
              <div>
                <input class="form-check-input custom-check me-2" type="radio" name="shipMethod" id="economy" checked />
                <label class="form-check-label" for="economy">Giao hàng tiết kiệm</label>
              </div>
              <span class="badge price-badge">25.000₫</span>
            </div>
          </div>

          <div class="mt-4">
            <h5 class="title mb-3">Phương thức thanh toán</h5>
            <div class="form-check mb-2">
              <input class="form-check-input custom-check me-2" type="radio" name="payMethod" id="cod" />
              <label class="form-check-label" for="cod">Thanh toán khi nhận hàng</label>
            </div>
            <div class="form-check">
              <input class="form-check-input custom-check me-2" type="radio" name="payMethod" id="bank" checked />
              <label class="form-check-label" for="bank">Chuyển khoản</label>
            </div>
          </div>
          <div class="mt-4">
            <!-- <label for="note" class="form-label ">Ghi chú</label> -->
            <h5 class="title mb-3">Ghi chú</h5>
            <textarea id="note" class="form-control custom-textarea" rows="4" placeholder="Nhập ghi chú ở đây..." v-model="kh_ghichu"></textarea>
          </div>

        </div>
      </div>
    </div>
    <br>
    <br>
    <div class="container">
      <table class="table table-striped table-hover text-center">
        <thead>
          <tr >
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <!-- <th>Xóa</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(e, index) in gioHangs" :key="index">
            <td>
              <img :src="e.sp.sp_duongdan" alt="" class="hinhanh"> 
            </td>
            <td>{{ e.sp.sp_ten }}</td>
            <td>{{ formatCurrency(e.sp.gia) }}</td>
            <td>
              {{e.gh_soluongmua}}
            </td>
            <td>{{ formatCurrency(e.sp.gia*e.gh_soluongmua) }}</td>
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
              <div class="text-right ">
                <p> 
                  <a href="#" class="text-golden fw-semibold" @click="gotoGiohang()">Quay lại giỏ hàng</a>
                </p>
              </div>
              <button class="btn btn-warning THANHTOAN" type="button" @click="taodonhang()">THANH TOÁN</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
async function getdata(a) {
  let data1 = await axios.get('http://localhost:8000/sanpham/'+a)
  return data1.data
}
export default {
  name: "Thanhtoan",
  data(){
    return{
      quantity:1,
      totalAmount: 100,
      gioHangs:[],
      kh_ma:"",     
      TTcanhans:{},
      kh_diachi:"",
      kh_ghichu:""
    }
  },
  methods:{
    gotoGiohang(){
      this.$router.replace("/Giohang");
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
          this.quantity--;
      }
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
      // console.log(this.gioHangs[0])
    },
    formatCurrency(value) {
      if (!value) return '0 ₫';
      return value.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
      });
    },
    taodonhang() {
      const token=localStorage.getItem('token')
      let x= confirm("Bạn có chắc chắn muốn đặt hàng?");
      if(x){
        axios.post('http://localhost:8000/createdonhang',{
          kh_ma:token,
          hd_diachi:this.kh_diachi,
          hd_ghichu:this.kh_ghichu,
        })
        .then((response) => {
          alert(response.data.tinnhan);
          this.$router.replace("/ChoXacNhan")

        })
        .catch(function (error) {
          console.log(error);
        });
      }  
    },
    ttcanhan(){
      const token=localStorage.getItem('token')
      axios.get('http://localhost:8000/user/thongtin/'+token)
      .then((response) => {
        console.log(response.data)
        this.TTcanhans = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  },
  created(){
    const token=localStorage.getItem('token')
        // console.log(token)
    this.kh_ma=token;
    this.dsGioHang()
    this.ttcanhan()

  
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
.custom-textarea {
  border: 1px solid goldenrod;
  border-radius: 6px;
  padding: 10px;
  resize: none; /* Prevent resizing */
}

.custom-textarea::placeholder {
  color: #999;
}

.container-fluid {
  min-height: 100vh;
}

.title {
  color: goldenrod;
  font-weight: 600;
}

.box {
  background-color: #fff;
  border: 1px solid goldenrod;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.form-label {
  color: goldenrod;
  font-weight: 500;
}

.custom-input {
  border: 1px solid goldenrod;
  border-radius: 6px;
}

.custom-input::placeholder {
  color: #999;
}

.custom-check {
  border: 1px solid goldenrod;
}

.custom-check:checked {
  background-color: goldenrod;
  border-color: goldenrod;
}

.price-badge {
  background-color: goldenrod;
  color: #fff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
}

.equal-height-container {
  display: flex;
}

@media (max-width: 768px) {
  .col-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
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
