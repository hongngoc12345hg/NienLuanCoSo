const { ObjectId} = require("mongodb");
const {NHASANXUAT,NHANVIEN,KHACHHANG,GIOHANG,HOADON,SANPHAM,CHITIETHOADON,LOAI,HINHANH} = require("../model/model.js")
const crypto = require("crypto")
const dayjs = require('dayjs');
const path = require("path");
const { promises } = require("dns");
const {xoaAnhSP,xoaAnhQC} = require('../delete/deleteAnh.js');
const { Promise } = require("mongoose");
function hashSHA2256(text){
    return crypto.createHash("sha256").update(text).digest('hex')
}
function fotmatdate(txt){
    return dayjs(txt).format('YYYY-MM-DD')
}

exports.test = async(req,res)=>{
    try {
        console.log(req.body)

        if(check1.length>0){
            res.status(200).json({tinnhan:"them thanh cong"})
        }
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};


exports.themsanpham = async(req,res)=>{
    try {
        const files = req.file
        const fileName = files.filename;
        const newSP = new SANPHAM({
            sp_hinhanh: fileName,
            sp_ten: req.body.sp_ten,
            sp_mota: req.body.sp_mota,
            sp_soluong: req.body.sp_soluong,
            sp_dongia: req.body.sp_dongia,
            sp_namsx: fotmatdate(req.body.sp_namsx),
            nsx_ma: req.body.nsx_ma,
            loai_ma: req.body.loai_ma,
            sp_ngayfcapnhat: fotmatdate(new Date().toLocaleString())
        })
        const id = newSP._id.toString()
        newSP.sp_duongdan ="http://localhost:8000/anhchinhsanpham/"+id
        // console.log(newSP)
        const saveSP = await newSP.save()
        res.status(200).json({tinnhan:"them thanh cong"})
       
       
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.themLoai = async(req,res)=>{
    try {
        console.log(req.body)
        const newLoai = new LOAI(req.body)
        let check0 = null
        check0 = await LOAI.find({loai_ma:req.body.loai_ma})
        if(check0.length==0){
            
            const saveLoai = await newLoai.save()
        }
        else{
            res.status(202).json({tinnhan:"Mã Loại đã tồn tại"})
        }
        const check1 = await LOAI.find(newLoai)
        if(check1.length>0){
            res.status(200).json({tinnhan:"them thanh cong"})
        }

        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.allSp = async(req,res)=>{
    try {
        const allSP = await SANPHAM.find().lean()

        for (let e of allSP){   
             let nsx = await NHASANXUAT.find({nsx_ma:e.nsx_ma})
            let tennsx = nsx[0].nsx_ten
            e.sp_namsx =await fotmatdate(e.sp_namsx)
            e.sp_ngayfcapnhat =await fotmatdate(e.sp_ngayfcapnhat)
            e.nsx_ten = tennsx

        }

        if(allSP.length>0){
            res.status(200).send(allSP)
        }else{
            res.status(202).json({tinnhan: "khong co san pham"})
        }
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.anhchinhsanpham = async(req,res)=>{
    try {
        const id = req.params.id
        const sanpham = await SANPHAM.find({_id:id})
        const imgpath = path.join(__dirname,'../hinhanh/sanpham',sanpham[0].sp_hinhanh)
        res.sendFile(imgpath)
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.allloai = async(req,res)=>{
    try {
        const check0 =await LOAI.find().lean()
        
 
        for (let e of check0){
             e.loai_ngaycapnhat = fotmatdate(e.loai_ngaycapnhat)
             let soluong = await SANPHAM.countDocuments({loai_ma:e.loai_ma})
             e.tongsp=soluong

        }
        
        if(check0.length>0){
            res.status(200).json(check0)
        }else{
            res.status(202).json({tinnhan:"khong co loai nao"})
        }
        

    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.deleteLoai = async(req,res)=>{
    try {
        console.log(req.body)
        const check0 = await SANPHAM.find({loai_ma:req.body.loai_ma})
        if(check0.length>0){
            res.status(202).json({tinnhan:"Xóa thất bại"})
        }else{
            await LOAI.deleteOne({loai_ma:req.body.loai_ma})
            const check1 = await LOAI.find({loai_ma:req.body.loai_ma})
            if(check1.length>0){
                res.status(202).json({tinnhan:"Xóa thất bại"})
            }else{
                res.status(200).json({tinnhan:"Xóa thành công"})
            }
        }
        
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.themNSX = async(req,res)=>{
     try {
        if(req.body.nsx_ma !="" && req.body.nsx_ten !=""){
            const newNsx = new NHASANXUAT(req.body)
            let check0 = await NHASANXUAT.find({nsx_ma:req.body.nsx_ma})
            if(check0.length==0){
                const saveLoai = await newNsx.save()
            }
            else{
                res.status(202).json({tinnhan:"Mã nhaf sản xuất đã tồn tại"})
            }
            const check1 = await NHASANXUAT.find(newNsx)
            if(check1.length>0){
                res.status(200).json({tinnhan:"thêm thanh cong"})
            }
        }else{
            res.status(202).json({tinnhan:"vui lòng nhập đủ thông tin"})
        }
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.dsNSX = async(req,res)=>{
    try{
        const check0 = await NHASANXUAT.find().lean()
        let check1 = check0.map(e=>{
            e.nsx_ngaycapnhat = fotmatdate(e.nsx_ngaycapnhat)
            return{
                ...e,
            }
        })
        if(check1.length>0){
            res.status(200).json(check1)
        }else{
             res.status(202).json({tinnhan:"khong co nha san xuat nao"})
        }
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.xoaNSX = async(req,res)=>{
    try {
        console.log(req.body)
        const check0 = await SANPHAM.find({nsx_ma:req.body.nsx_ma})
        if(check0.length>0){
            res.status(202).json({tinnhan:"Xóa thất bại"})
        }
        await NHASANXUAT.deleteOne({nsx_ma:req.body.nsx_ma})
        const check1 = await NHASANXUAT.find({nsx_ma:req.body.nsx_ma})
        if(check1.length>0){
            res.status(202).json({tinnhan:"Xóa thất bại"})
        }else{
            res.status(200).json({tinnhan:"Xóa thành công"})
        }
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.editSP = async(req,res)=>{
     try {
        
    const {_id, ...dataUpdate }= req.body;

    dataUpdate.sp_ngayfcapnhat = new Date()


    const updatedSP = await SANPHAM.findByIdAndUpdate(_id, { $set: dataUpdate }, { new: true });
    res.status(200).json({ tinnhan: "Cập nhật thành công", });

  } catch (error) {
    console.error("Lỗi cập nhật sản phẩm:", error);
    res.status(500).json({ tinnhan: "Lỗi server", error });
  }
};

exports.SanPham = async(req,res)=>{
    try {
    const _id = req.params.id
    const sanpham = await SANPHAM.findById(_id).lean()
    
    if(!sanpham){
        res.status(202).json({tinnhan:"Sản phẩm không tồn tại"})
    }else{
        let nsx = await NHASANXUAT.find({nsx_ma:sanpham.nsx_ma})
        let tennsx = nsx[0].nsx_ten
        sanpham.nsx_ten = tennsx
        sanpham.gia =sanpham.sp_dongia - ((sanpham.sp_dongia * sanpham.sp_khuyenmai)/100)
        sanpham.sp_namsx = fotmatdate(sanpham.sp_namsx)
        sanpham.sp_ngayfcapnhat = fotmatdate(sanpham.sp_ngayfcapnhat )
        res.status(200).json(sanpham)
    }

  } catch (error) {
    console.error("Lỗi cập nhật sản phẩm:", error);
    res.status(500).json({ tinnhan: "Lỗi server", error });
  }
};

exports.editASP = async(req,res)=>{
     try {
    const _id= req.body._id;
    const files = req.file
    const fileName = files.filename;
    const check0 = await SANPHAM.findById(_id); 
    if (!check0) return res.status(404).json({ tinnhan: "Không tìm thấy sản phẩm" });

    const updatedSP = await SANPHAM.findByIdAndUpdate(
        _id, 
        { $set: {
            sp_hinhanh: fileName,
            sp_ngayfcapnhat: new Date()
        } }, 
        { new: true });
    const ketqua = xoaAnhSP(check0.sp_hinhanh)
    console.log(ketqua)
    res.status(200).json({ tinnhan: "Cập nhật thành công"});


  } catch (error) {
    console.error("Lỗi cập nhật sản phẩm:", error);
    res.status(500).json({ tinnhan: "Lỗi server", error });
  }
};

exports.editloai = async(req,res)=>{
    try {
        let {_id, ...dataUpdate} = req.body
        dataUpdate.loai_ngaycapnhat = new Date();
        const check0 = await LOAI.find({_id:_id})
        if(check0.length>0){
            const check1 = await LOAI.findByIdAndUpdate(
                _id,
                { $set: dataUpdate },
                { new: true }
            );
       
            res.status(200).json({tinnhan:"sửa thành công"})
            
        }else{
            res.status(202).json({tinnhan:"loại không tồn tại"})
        }

            
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.editNSX = async(req,res)=>{
    try {
        const {_id, ...dataUpdate} = req.body
        dataUpdate.nsx_ngaycapnhat = new Date();
        const check0 = await NHASANXUAT.find({_id:_id})
        if(check0.length>0){
            const check1 = await NHASANXUAT.findByIdAndUpdate(
                _id,
                { $set: dataUpdate },
                { new: true }
            );
       
            res.status(200).json({tinnhan:"sửa thành công"})
            
        }else{
            res.status(202).json({tinnhan:"Nhà sản xuất không tồn tại"})
        }

            
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.addGioHang = async(req,res)=>{
    try {
       

        const newgiohang = new GIOHANG(req.body)
        newgiohang.kh_ma= new ObjectId(newgiohang.kh_ma)
        const save = await newgiohang.save()

        res.status(200).json({tinnhan:"them thanh cong"})
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

// exports.addGioHang = async (req, res) => {
//   try {
//     console.log(req.body)
//     const { sp_id, gh_soluongmua } = req.body;

//     // Tìm sản phẩm theo ID
//     const sanpham = await SANPHAM.findById(sp_id);
//     console.log(sanpham)
//     if (!sanpham) {
//       return res.status(404).json({ message: "Sản phẩm không tồn tại" });
//     }

//     // Thêm mới vào giỏ hàng
//     const newGioHang = new GIOHANG({
//       sp_ma: sp_id,              // Gán đúng field trong schema
//       gh_soluongmua: gh_soluongmua
//     });

//     const savedGioHang = await newGioHang.save();

//     // Tính giá sau khuyến mãi (nếu có)
//     const donGiaSauKhuyenMai = sanpham.sp_khuyenmai > 0
//       ? sanpham.sp_dongia * (1 - sanpham.sp_khuyenmai / 100)
//       : sanpham.sp_dongia;
    
//     // Trả kết quả về frontend
//     res.status(200).json({
//       message: "Thêm vào giỏ hàng thành công",
//       data: {
//         gh_id: savedGioHang._id,
//         sp_id: sanpham._id,
//         sp_ten: sanpham.sp_ten,
//         sp_khuyenmai: sanpham.sp_khuyenmai,
//         sp_dongia: sanpham.sp_dongia,
//         // sp_hinhanh: sanpham.sp_hinhanh || null,
//         gh_soluongmua: gh_soluongmua,
//         tong_tien: donGiaSauKhuyenMai * gh_soluongmua
//       }
     
//     });
     
//   } catch (error) {
//     console.error("Lỗi thêm giỏ hàng:", error);
//     res.status(500).json({ message: "Lỗi máy chủ", error });
//   }
// };


exports.allgiohang = async(req,res)=>{
    try {
        
        const allgiohang = await GIOHANG.find()
        if(allgiohang.length>0){
            res.status(200).json(allgiohang)
        }else{
            res.status(202).json({tinnhan:"Chưa có sản phẩm nào trong giỏ hàng. Hãy đến trang chủ để mua sắm."})
        }
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.allgiohangkh = async(req,res)=>{
    try {
        let allgiohang = await GIOHANG.find({kh_ma:req.params.id}).lean()
   

        if(allgiohang.length>0){
            res.status(200).json(allgiohang)
        }else{
            res.status(202).json({tinnhan:"Chưa có sản phẩm nào trong giỏ hàng. Hãy đến trang chủ để mua sắm."})
        }
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.delgiohnag = async(req,res)=>{
    try {
        await GIOHANG.deleteOne({_id:req.body._id})
        const check1 = await GIOHANG.find({_id:req.body._id})
        if(check1.length==0){
            res.status(200).json({tinnhan:"Xóa thành công"})
        }else{
            res.status(202).json({tinnhan:"Xóa thất bại"})
        }
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.dangky = async(req,res)=>{
    try {

        if(req.body.kh_hoten == ""){
            res.status(202).json({tinnhan:"thieu ho va ten"})
        }
        if(req.body.kh_sdt == ""){
            res.status(202).json({tinnhan:"thieu so dien thoai"})
        }
        if(req.body.kh_email == ""){
            res.status(202).json({tinnhan:"thieu dia chi email"})
        }
        if(req.body.kh_pass == ""){
            res.status(202).json({tinnhan:"thieu ma khau"})
        }
        const check0 = await KHACHHANG.find({kh_sdt:req.body.kh_sdt})
        if(check0.length>0){
            res.status(202).json({tinnhan:"số điện thoại đã tồn tại"})
            return
        }
        const khachhang = new KHACHHANG(req.body)
        khachhang.kh_pass = hashSHA2256(String(req.body.kh_pass))
        
        
        const saveKH = khachhang.save()

        const check1 =await KHACHHANG.find(khachhang)
        if(check1.length>0){
            res.status(200).json({tinnhan:"them thanh cong"})
        }

    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.login = async(req,res)=>{
    try {  
        pass = hashSHA2256(String(req.body.kh_pass))
        const check1 = await NHANVIEN.find({nv_sdt:req.body.sdt,nv_pass:pass})
        if (check1.length>0){
            let result =new Object()
            result.id = check1[0]._id
            result.ten=check1[0].nv_hoten
            result.role = 0
            result.tinnhan = "đăng nhập thành công"
            res.status(200).json(result)
        }
        const check2 = await KHACHHANG.find({kh_sdt:req.body.sdt,kh_pass:pass})
        // console.log(check2)
        if (check2.length>0){
            let result =new Object()
            result.id = check2[0]._id
            result.role = 1
            result.ten=check2[0].kh_hoten
            result.tinnhan = "đăng nhập thành công"
            res.status(201).json(result)
        }
        if(check1.length==0 && check2.length==0)
            res.status(202).json({tinnhan:"đăng nhập thất bại"})
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.allSpTimKiem = async(req,res)=>{
    try {
        const keyword = req.body.keyword
        const allSP = await SANPHAM.find({$or: [
                { sp_ten: { $regex: keyword, $options: 'i' } },
                { sp_mota: { $regex: keyword, $options: 'i' } }
            ]}).lean()

   
        for (let e of allSP){
            let nsx = await NHASANXUAT.find({nsx_ma:e.nsx_ma}).lean()
            let tennsx = nsx[0].nsx_ten
            e.sp_namsx = fotmatdate(e.sp_namsx)
            e.sp_ngayfcapnhat = fotmatdate(e.sp_ngayfcapnhat)
            e.nsx_ten=tennsx
        }
        if(allSP.length>0){
            res.status(200).send(allSP)
        }else{
            res.status(202).json({tinnhan: "khong co san pham"})
        }
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.allSpNoiBAt = async(req,res)=>{
    try {
        const allSP = await SANPHAM.find({sp_khuyenmai: {$lte:0}}).sort({luotban:-1}).lean()


        for (let e of allSP){   
            let nsx = await NHASANXUAT.find({nsx_ma:e.nsx_ma})
            let tennsx = nsx[0].nsx_ten
            e.sp_namsx = fotmatdate(e.sp_namsx)
            gia =e.sp_dongia - ((e.sp_dongia * e.sp_khuyenmai)/100)
            e.sp_ngayfcapnhat = fotmatdate(e.sp_ngayfcapnhat)
            e.nsx_ten = tennsx
            e.gia = gia

        }
        if(allSP.length>0){
            res.status(200).send(allSP)
        }else{
            res.status(202).json({tinnhan: "khong co san pham"})
        }
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.allSpKhuyenMai = async(req,res)=>{
    try {
        const allSP = await SANPHAM.find({sp_khuyenmai: {$gt:0}}).sort({sp_khuyenmai:-1}).lean()


        for (let e of allSP){   
            let nsx = await NHASANXUAT.find({nsx_ma:e.nsx_ma})
            let tennsx = nsx[0].nsx_ten
            e.sp_namsx = fotmatdate(e.sp_namsx)
            gia =e.sp_dongia - ((e.sp_dongia * e.sp_khuyenmai)/100)
            e.sp_ngayfcapnhat = fotmatdate(e.sp_ngayfcapnhat)
            e.nsx_ten = tennsx
            e.gia = gia

        }
       
        if(allSP.length>0){
            res.status(200).send(allSP)
        }else{
            res.status(202).json({tinnhan: "khong co san pham"})
        }
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.ttuser = async(req,res)=>{
    try {
        console.log(req.params.id)
        let check1 = await KHACHHANG.findById(req.params.id).lean()
        if(check1 == null){
            check1 = await NHANVIEN.findById(req.params.id).lean()
            check1.nv_ngaycapnhat = fotmatdate(check1.nv_ngaycapnhat)
        }else{
            check1.kh_namsinh = fotmatdate(check1.kh_namsinh)
            check1.kh_ngaycapnhat = fotmatdate(check1.kh_ngaycapnhat)
        }
        

        if(check1!=null){
            res.status(200).json(check1)
        }else{
            res.status(202).json("lay thong tin that bai")
        }
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.edituser = async(req,res)=>{
     try {
    const {_id, ...dataUpdate }= req.body;
    dataUpdate.kh_ngaycapnhat = new Date()
    const updatedUSER = await KHACHHANG.findByIdAndUpdate(_id, { $set: dataUpdate }, { new: true });
    res.status(200).json({ tinnhan: "Cập nhật thành công", data: updatedUSER });
  } catch (error) {
    console.error("Lỗi cập nhật sản phẩm:", error);
    res.status(500).json({ tinnhan: "Lỗi server", error });
  }
};

exports.alluser = async(req,res)=>{
    try {
        console.log(req.body)
        let allu = await KHACHHANG.find().lean()

        for (let e of allu){
            e.kh_namsinh = fotmatdate(e.kh_namsinh)
            e.kh_ngaycapnhat = fotmatdate(e.kh_ngaycapnhat)
        }
        if(allu.length>0){
            res.status(200).json(allu)
        }
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.createDonhang = async(req,res)=>{
    try {
        console.log(req.body)
        const _id = req.body.kh_ma
        let hoadon = new HOADON(req.body)
        hoadon.hd_tongtien =0
        hoadon.nv_manv = new ObjectId()
        let gh = await GIOHANG.find({kh_ma:_id})
        let gia = 0
       
        for (let e of gh){
            let sp_phu = await SANPHAM.findById(e.sp_ma)
            let gia_sp= ((sp_phu.sp_dongia-((sp_phu.sp_dongia*sp_phu.sp_khuyenmai)/100))* e.gh_soluongmua)
            gia+=gia_sp
            const newchitiet = new CHITIETHOADON({
                    sp_ma:e.sp_ma,
                    cthd_soluongmua: e.gh_soluongmua,
                    hd_ma: hoadon._id,
                    cthd_tongtien: gia_sp
                })
            await newchitiet.save()

        }
        hoadon.hd_tongtien = gia

        await hoadon.save()
        await GIOHANG.deleteMany({kh_ma:req.body.kh_ma})
        
   
        res.status(200).json({tinnhan:"tao thanh cong"})
        
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.SanPhamTuongTu = async(req,res)=>{
    try {
        const _id = req.params.id
        const sp = await SANPHAM.findById(_id)
        let allSP = await SANPHAM.find({_id: {$ne:_id},loai_ma:sp.loai_ma}).sort({luotban:-1,sp_rate:-1}).lean()
        for(let e of allSP ){
            let nsx = await NHASANXUAT.find({nsx_ma:e.nsx_ma})
            let tennsx = nsx[0].nsx_ten
            e.sp_namsx = fotmatdate(e.sp_namsx)
            e.sp_ngayfcapnhat = fotmatdate(e.sp_ngayfcapnhat)
            gia =e.sp_dongia - ((e.sp_dongia * e.sp_khuyenmai)/100)
            e.nsx_ten=tennsx
            e.gia=gia
        }
        if(allSP.length>0){
            res.status(200).send(allSP)
        }else{
            res.status(202).json({tinnhan: "khong co san pham"})
        }
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.duyetDonHang = async(req,res)=>{
    try {
        console.log(req.body)
        const _id = new ObjectId(req.body._id)
        const nv_manv = new ObjectId( req.body.nv_manv)
        await HOADON.findByIdAndUpdate(_id,
            {
                $set:{
                    nv_manv:nv_manv,
                    hd_trangthai:1,
                }
            })
        const list_chi_tiet_hoa_don = await CHITIETHOADON.find({hd_ma:_id})
        for (let e of list_chi_tiet_hoa_don) {
            await SANPHAM.updateOne(
                { _id: e.sp_ma }, 
                { $inc: { 
                    sp_soluong: -e.cthd_soluongmua,
                    luotban:e.cthd_soluongmua

                },
             } // dùng $inc thì tốt hơn cho giảm số lượng
            );
        }
         res.status(200).json({tinnhan:"Đã duyệt tất cả các sản phẩm trong danh sách"})
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.all_HoaDon_chuaDuyet = async(req,res)=>{
    try {
        const check1 = await HOADON.find({hd_trangthai:0}).lean()
        for(let e of check1){
            e.hd_ngaytao = fotmatdate(e.hd_ngaytao)
            let chitiet = await CHITIETHOADON.find({hd_ma:e._id}).lean()
            for(let ee of chitiet){
                let sp = await SANPHAM.findById(ee.sp_ma).lean()
                sp.sp_ngayfcapnhat = fotmatdate(sp.sp_ngayfcapnhat)
                sp.gia =sp.sp_dongia - ((sp.sp_dongia * sp.sp_khuyenmai)/100)
                ee.sp = sp
            }
            e.chitiet = chitiet
        }
        if(check1.length>0){
            res.status(200).json(check1)
        }else{
            res.status(202).json({tinnhan:"danh sach trong"})
        }
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.all_HoaDon_DaDuyet = async(req,res)=>{
    try {
        const check1 = await HOADON.find({hd_trangthai:1}).lean()
        for(let e of check1){
            e.hd_ngaytao = fotmatdate(e.hd_ngaytao)
            let chitiet = await CHITIETHOADON.find({hd_ma:e._id}).lean()
            for(let ee of chitiet){
                let sp = await SANPHAM.findById(ee.sp_ma).lean()
                sp.sp_ngayfcapnhat = fotmatdate(sp.sp_ngayfcapnhat)
                sp.gia =sp.sp_dongia - ((sp.sp_dongia * sp.sp_khuyenmai)/100)
                ee.sp = sp
            }
            e.chitiet = chitiet
        }
        if(check1.length>0){
            res.status(200).json(check1)
        }else{
            res.status(202).json({tinnhan:"danh sach trong"})
        }
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.all_HoaDon_chuaDuyet_kh = async(req,res)=>{
    try {

        let check1 = await HOADON.find({hd_trangthai:0,kh_ma:req.params.id}).lean()
        for(let e of check1){
            e.hd_ngaytao = fotmatdate(e.hd_ngaytao)
            let chitiet = await CHITIETHOADON.find({hd_ma:e._id}).lean()
            for(let ee of chitiet){
                let sp = await SANPHAM.findById(ee.sp_ma).lean()
                sp.sp_ngayfcapnhat = fotmatdate(sp.sp_ngayfcapnhat)
                sp.gia =sp.sp_dongia - ((sp.sp_dongia * sp.sp_khuyenmai)/100)
                ee.sp = sp
            }
            e.chitiet = chitiet
        }
        if(check1.length>0){
            res.status(200).json(check1)
        }else{
            res.status(202).json({tinnhan:"danh sach trong"})
        }
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.all_HoaDon_DaDuyet_kh = async(req,res)=>{
    try {
        const check1 = await HOADON.find({hd_trangthai:1,kh_ma:req.params.id}).lean()
        for(let e of check1){
            e.hd_ngaytao = fotmatdate(e.hd_ngaytao)
            let chitiet = await CHITIETHOADON.find({hd_ma:e._id}).lean()
            for(let ee of chitiet){
                let sp = await SANPHAM.findById(ee.sp_ma).lean()
                sp.sp_ngayfcapnhat = fotmatdate(sp.sp_ngayfcapnhat)
                sp.gia =sp.sp_dongia - ((sp.sp_dongia * sp.sp_khuyenmai)/100)
                ee.sp = sp
            }
            e.chitiet = chitiet
        }
        if(check1.length>0){
            res.status(200).json(check1)
        }else{
            res.status(202).json({tinnhan:"danh sach trong"})
        }
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.all_HoaDon = async(req,res)=>{
    try {
        const check1 = await HOADON.find().lean()
        for(let e of check1){
            e.hd_ngaytao = fotmatdate(e.hd_ngaytao)
            let chitiet = await CHITIETHOADON.find({hd_ma:e._id}).lean()
            for(let ee of chitiet){
                let sp = await SANPHAM.findById(ee.sp_ma).lean()
                sp.sp_ngayfcapnhat = fotmatdate(sp.sp_ngayfcapnhat)
                sp.gia =sp.sp_dongia - ((sp.sp_dongia * sp.sp_khuyenmai)/100)
                ee.sp = sp
            }
            e.chitiet = chitiet
        }
        if(check1.length>0){
            res.status(200).json(check1)
        }else{
            res.status(202).json({tinnhan:"danh sach trong"})
        }
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};
exports.addNhanVien = async(req,res)=>{
    try {
        console.log(req.body)
        const {nv_hoten,nv_pass,nv_chucvu,nv_sdt} = req.body
        const check0 = await NHANVIEN.find({nv_sdt:nv_sdt})
        if (check0.length>0){
            res.status(202).json({tinnhan:"số điện thoại đã tồn tại"})
            return
        }
        if(nv_hoten!="" && nv_pass!="" && nv_chucvu!="" && nv_sdt!=""  ){
            let newNV = new NHANVIEN(req.body)
            newNV.nv_pass = hashSHA2256(String(newNV.nv_pass ))
            await newNV.save()
            res.status(200).json({tinnhan:"thêm thành công"})

       }else{
            res.status(202).json({tinnhan:"vui lòng nhập đầy đủ thông tin"})
       }
       

        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};

exports.allSp_loai = async(req,res)=>{
    try {
        const maloai =req.params.id
        const allSP = await SANPHAM.find({loai_ma:maloai}).lean()

        for (let e of allSP){   
             let nsx = await NHASANXUAT.find({nsx_ma:e.nsx_ma})
            let tennsx = nsx[0].nsx_ten
            e.sp_namsx =await fotmatdate(e.sp_namsx)
            e.sp_ngayfcapnhat =await fotmatdate(e.sp_ngayfcapnhat)
            e.nsx_ten = tennsx

        }

        if(allSP.length>0){
            res.status(200).send(allSP)
        }else{
            res.status(202).json({tinnhan: "khong co san pham"})
        }
        
    } catch (error) {
        res.status(500).json(error); console.log(error)
    }
};