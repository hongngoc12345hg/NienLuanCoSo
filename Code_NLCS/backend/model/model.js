const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



const NHASANXUAT_Schema = new Schema({
   nsx_ma: {type: String},
   nsx_ten: {type: String},
   nsx_diachi: {type: String,default:""},
   nsx_sdt: {type: String,default:""},
   nsx_ngaycapnhat:{type: Date, default: Date.now},
});

const LOAI_Schema = new Schema({
   loai_ma: {type: String},
   loai_tenloai: {type: String},
   mota: {type: String,default:""},
   loai_ngaycapnhat:{type: Date, default: Date.now},
});

const HINHANH_Schema = new Schema({
   ha_ten: {type: String},
   sp_ma: {type: ObjectId},
   ha_duongdan:{type: String,default:""},
   ha_ngaytao:{type: Date, default: Date.now},
});

const KHACHHANG_Schema = new Schema({
   kh_hoten: {type: String},
   kh_sdt: {type: String},
   kh_gioitinh: {type: String,default:""},
   kh_namsinh: {type: Date,default: Date.now},
   kh_email: {type: String,default:""},
   kh_pass: {type: String},
   kh_ngaycapnhat:{type: Date, default: Date.now},
});

const NHANVIEN_Schema = new Schema({
   nv_hoten: {type: String},
   nv_pass: {type: String},
   nv_chucvu: {type: String},
   nv_sdt: {type: String},
   nv_ngaycapnhat:{type: Date, default: Date.now},
});

const HOADON_Schema = new Schema({
   kh_ma: {type: ObjectId},
   hd_ngaytao:{type: Date, default: Date.now},
   hd_tongtien:{type: Number},
   nv_manv: {type: ObjectId},
   hd_trangthai:{type: Number, default: 0},
   hd_diachi:{type: String,default:"Shipper liên hệ sau"},
   hd_ghichu:{type: String,default:""},
});

const SANPHAM_Schema =new Schema({
   sp_hinhanh: {type: String},
   sp_ten: {type: String},
   sp_mota: {type: String},
   sp_soluong: {type: Number},
   sp_dongia:{type: Number},
   sp_namsx: {type: Date},
   nsx_ma: {type: String},
   sp_khuyenmai: {type: Number,default:0},
   loai_ma:{type: String},
   sp_rate: {type: Number,default:0},
   luotban: {type: Number,default:0},

   sp_duongdan:{type:String,default:""},

   sp_ngayfcapnhat:{type: Date, default: Date.now},
});

const CHITIETHOADON_Schema = new Schema({
   sp_ma: {type: ObjectId},
   cthd_soluongmua: {type: Number},
   cthd_tongtien: {type: Number},
   hd_ma: {type: ObjectId},
});

const GIOHANG_Schema = new Schema({
   kh_ma:{type: ObjectId},
   gh_soluongmua:{type: Number},
   sp_ma: {type: ObjectId},
});

const PHANHOI_Schema = new Schema({
   dg_ma:{type: ObjectId},
   nv_ma:{type: ObjectId},
   ph_binhluan: {type: String},
   ph_ngaycapnhat: {type: Date, default: Date.now},
});

const DANHGIA_Schema = new Schema({
   sp_ma:{type: ObjectId},
   kh_ma:{type: ObjectId},
   dg_rate: {type: String},
   dg_binhluan: {type: String},
   dg_ngaycapnhat :{type: Date, default: Date.now},
});
const QUANGCAO_Schema = new Schema({
   qc_ten: {type: String},
   nv_manv: {type: String},
   qc_ngaycapnhat :{type: Date, default: Date.now},
   qc_duongdan:{type: String},
});

let NHASANXUAT = mongoose.model("NHASANXUAT",NHASANXUAT_Schema);
let LOAI = mongoose.model("LOAI",LOAI_Schema);
let HINHANH = mongoose.model("HINHANH",HINHANH_Schema);
let KHACHHANG = mongoose.model("KHACHHANG",KHACHHANG_Schema);
let NHANVIEN = mongoose.model("NHANVIEN",NHANVIEN_Schema);
let HOADON = mongoose.model("HOADON",HOADON_Schema);
let SANPHAM = mongoose.model("SANPHAM",SANPHAM_Schema);
let CHITIETHOADON = mongoose.model("CHITIETHOADON",CHITIETHOADON_Schema);
let GIOHANG = mongoose.model("GIOHANG",GIOHANG_Schema);
let PHANHOI = mongoose.model("PHANHOI",PHANHOI_Schema);
let DANHGIA = mongoose.model("DANHGIA",DANHGIA_Schema);
let QUANGCAO = mongoose.model("QUANGCAO",QUANGCAO_Schema);


module.exports = {NHASANXUAT,LOAI,HINHANH,KHACHHANG,NHANVIEN,HOADON,SANPHAM,CHITIETHOADON,PHANHOI,DANHGIA,GIOHANG,QUANGCAO}