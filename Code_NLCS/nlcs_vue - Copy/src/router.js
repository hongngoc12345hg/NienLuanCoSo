
import { createWebHistory, createRouter } from 'vue-router'
import TrangChu from './components/QuanLy/TrangChu.vue';
import Menu from './components/Menu/Menu.vue';
import TEST from './components/QuanLy/TEST.vue';
import Chitietsp from './components/QuanLy/Chitietsp.vue';
import Giohang from './components/QuanLy/Giohang.vue';
import Dangnhap from './components/Nguoidung/Dangnhap.vue';
import Dangky from './components/Nguoidung/Dangky.vue';
import Banphim from './components/QuanLy/Banphim.vue';
import Thanhtoan from './components/QuanLy/Thanhtoan.vue';
import Themsanpham from './components/QuanLy/Sanpham/Themsanpham.vue';
import Phanloai from './components/QuanLy/Phanloai/Phanloai.vue';
import Themloaisp from './components/QuanLy/Phanloai/Themloaisp.vue';
import Taikhoancanhan from './components/Nguoidung/Danhgia/Taikhoancanhan.vue';
import Danhgia from './components/Nguoidung/Danhgia/Danhgia.vue';
import DaDanhgia from './components/Nguoidung/Danhgia/DaDanhgia.vue';
import HienthiND from './components/QuanLy/Nguoidung/HienthiND.vue';
import ThemND from './components/QuanLy/Nguoidung/ThemND.vue';
import PhanhoiDG from './components/QuanLy/Danhgia/PhanhoiDG.vue';
import DaPhanhoiDG from './components/QuanLy/Danhgia/DaPhanhoiDG.vue';
import HienthiNSX from './components/QuanLy/NSX/HienthiNSX.vue';
import ThemNSX from './components/QuanLy/NSX/ThemNSX.vue';
import HienthiSP from './components/QuanLy/Sanpham/HienthiSP.vue';
import Suasanpham from './components/QuanLy/Sanpham/Suasanpham.vue';
import SanPhamNoiBat from './components/QuanLy/Sanpham/SanPhamNoiBat.vue';
import SanPhamKhuyenMai from './components/QuanLy/Sanpham/SanPhamKhuyenMai.vue';
import Sualoai from './components/QuanLy/Phanloai/Sualoai.vue';
import SuaNSX from './components/QuanLy/NSX/SuaNSX.vue';
import SanPhamTuongTu from './components/QuanLy/Sanpham/SanPhamTuongTu.vue';
import ChoXacNhan from './components/Nguoidung/Danhgia/ChoXacNhan.vue';
import ChoXacNhanQL from './components/QuanLy/XacNhanDonHang/ChoXacNhanQL.vue';
import DaXacNhanQL from './components/QuanLy/XacNhanDonHang/DaXacNhanQL.vue';
import DaXacNhan from './components/Nguoidung/Danhgia/DaXacNhan.vue';
import TimKiemSanPham from './components/QuanLy/Sanpham/TimKiemSanPham.vue';




const routes=[
    { path: '/', component: TrangChu},
    { path: '/Menu', component: Menu},  
    { path: '/test', component: TEST},
    { path: '/Chitietsp/:id', component: Chitietsp},
    { path: '/Giohang', component: Giohang},
    { path: '/Dangnhap', component: Dangnhap},
    { path: '/Dangky', component: Dangky},
    { path: '/Banphim', component: Banphim},
    { path: '/Thanhtoan', component: Thanhtoan},
    { path: '/Themsanpham', component: Themsanpham},
    { path: '/Phanloai', component: Phanloai},
    { path: '/Themloaisp', component: Themloaisp},
    { path: '/Taikhoancanhan', component: Taikhoancanhan},
    { path: '/Danhgia', component: Danhgia},
    { path: '/DaDanhgia', component: DaDanhgia},
    { path: '/HienthiND', component: HienthiND},
    { path: '/ThemND', component: ThemND},
    { path: '/PhanhoiDG', component: PhanhoiDG},
    { path: '/DaPhanhoiDG', component: DaPhanhoiDG},
    { path: '/HienthiNSX', component: HienthiNSX},
    { path: '/ThemNSX', component: ThemNSX},
    { path: '/HienthiSP', component: HienthiSP},
    { path: '/Suasanpham/:id', component: Suasanpham},
    { path: '/SanPhamNoiBat', component: SanPhamNoiBat},
    { path: '/SanPhamKhuyenMai/:id', component: SanPhamKhuyenMai},
    { path: '/Sualoai', component: Sualoai},
    { path: '/SanPhamTuongTu', component: SanPhamTuongTu},
    { path: '/ChoXacNhan', component: ChoXacNhan},
    { path: '/DaXacNhan', component: DaXacNhan},
    { path: '/ChoXacNhanQL', component: ChoXacNhanQL},
    { path: '/DaXacNhanQL', component: DaXacNhanQL},
    { path: '/TimKiemSanPham', component: TimKiemSanPham},
]   

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;