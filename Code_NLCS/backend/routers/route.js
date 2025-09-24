

const router = require("express").Router()
const controller = require("../controllers/controller")
const uploadSP = require('../storage/sanpham')
const uploadQC = require('../storage/quangcao')

router.route("/dangnhap").post(controller.login);

router.route('/themsanpham').post(uploadSP.single('file'),controller.themsanpham)
router.route('/themloai').post(controller.themLoai)
router.route('/sanpham').get(controller.allSp)
router.route('/anhchinhsanpham/:id').get(controller.anhchinhsanpham)
router.route('/loai').get(controller.allloai)
router.route('/xoaloai').post(controller.deleteLoai)
router.route('/nhasanxuat').post(controller.themNSX).get(controller.dsNSX)
router.route('/xoanhasanxuat').post(controller.xoaNSX)
router.route("/sanpham/suasp").post(controller.editSP)
router.route("/sanpham/:id").get(controller.SanPham)
router.route("/sanpham/suaanh").post(uploadSP.single('file'),controller.editASP)
router.route("/sualoai").post(controller.editloai)
router.route("/suansx").post(controller.editNSX)
router.route("/giohang").get(controller.allgiohang).post(controller.addGioHang)
router.route("/giohang/xoa").post(controller.delgiohnag)
router.route("/dangnhap").post(controller.login);
router.route("/dangky").post(controller.dangky);
router.route('/noibat').get(controller.allSpNoiBAt);
router.route('/khuyenmai').get(controller.allSpKhuyenMai)
router.route('/timkiemsanpham').post(controller.allSpTimKiem)
router.route("/giohangkh/:id").get(controller.allgiohangkh)
router.route("/user/thongtin/:id").get(controller.ttuser)
router.route("/user/edituser").post(controller.edituser)
router.route("/allhoadoned").get(controller.all_HoaDon_DaDuyet)
router.route("/allhoadonnon").get(controller.all_HoaDon_chuaDuyet)
router.route("/allhoadoned/:id").get(controller.all_HoaDon_DaDuyet_kh)
router.route("/allhoadonnon/:id").get(controller.all_HoaDon_chuaDuyet_kh)
router.route("/allhoadon").get(controller.all_HoaDon)
router.route("/sanphamtt/:id").get(controller.SanPhamTuongTu)
router.route("/createdonhang").post(controller.createDonhang)
router.route("/duyetdon").post(controller.duyetDonHang)
router.route("/allusers").get(controller.alluser)
router.route("/addNV").post(controller.addNhanVien)
router.route("/sanphamtheoloai/:id").get(controller.allSp_loai)

module.exports = router